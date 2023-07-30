export const getBrowserLanguage = () => {
  const browserLanguage = navigator.language.substr(0, 2);
  return ["fi", "en"].includes(browserLanguage) ? browserLanguage : "en";
};
