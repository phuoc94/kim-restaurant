import axios from "axios";
import type { AxiosError, AxiosRequestConfig } from "axios";

// Every section fetches its own content when it mounts, so one page load sends up to eight requests within about
// 100 ms. Hygraph can answer a burst like that with 429, and a section whose request fails does not render. These
// interceptors cover all of those requests in one place: they send a few at a time and retry the ones Hygraph refuses.
const API_URL = process.env.VUE_APP_API_URL;
const MAX_CONCURRENT = 3;
const MAX_RETRIES = 4;
const BASE_DELAY_MS = 500;

type RetriableConfig = AxiosRequestConfig & { retries?: number };

let active = 0;
const waiting: Array<() => void> = [];

const acquire = () =>
  new Promise<void>((resolve) => {
    if (active < MAX_CONCURRENT) {
      active += 1;
      resolve();
    } else {
      waiting.push(resolve);
    }
  });

// Hands the slot straight to the next waiting request, if there is one.
const release = () => {
  const next = waiting.shift();
  if (next) {
    next();
  } else {
    active -= 1;
  }
};

const isHygraph = (config?: AxiosRequestConfig) => config?.url === API_URL;

const isRetriable = (status?: number) =>
  status === 429 || (status !== undefined && status >= 500);

const retryDelay = (error: AxiosError, retries: number) => {
  const retryAfter = Number(error.response?.headers?.["retry-after"]);
  if (retryAfter > 0) {
    return retryAfter * 1000;
  }
  // Doubles each time. The random part stops refused requests from all coming back in the same instant.
  return BASE_DELAY_MS * 2 ** retries * (0.5 + Math.random() / 2);
};

export const setUpHygraphRequests = () => {
  axios.interceptors.request.use(async (config) => {
    if (isHygraph(config)) {
      await acquire();
    }
    return config;
  });

  axios.interceptors.response.use(
    (response) => {
      if (isHygraph(response.config)) {
        release();
      }
      return response;
    },
    async (error: AxiosError) => {
      const config: RetriableConfig | undefined = error.config;
      if (!config || !isHygraph(config)) {
        throw error;
      }
      release();

      const retries = config.retries ?? 0;
      if (!isRetriable(error.response?.status) || retries >= MAX_RETRIES) {
        throw error;
      }
      await new Promise((resolve) =>
        setTimeout(resolve, retryDelay(error, retries))
      );
      return axios({ ...config, retries: retries + 1 } as RetriableConfig);
    }
  );
};
