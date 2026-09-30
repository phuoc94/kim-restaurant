const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack: (config) => {
    // Emit every font as its own file. Inlined, each small subset would be base64 in the render-blocking CSS,
    // whether or not the page uses it; as files, the browser downloads only the subsets its text needs.
    config.module.rule("fonts").type("asset/resource");
  },
});
