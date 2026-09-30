import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
// Self-hosted web fonts: only the families and weights the pages use, served from this site, not from Google.
// Roboto is the body font that tw-elements sets.
import "@fontsource/david-libre/700.css";
import "@fontsource/montserrat/400.css";
import "@fontsource/montserrat/700.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/700.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/700.css";
import "./index.css";

const app = createApp(App);
app.use(router);
app.mount("#app");
