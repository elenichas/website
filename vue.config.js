const path = require("path");

module.exports = {
  devServer: {
    allowedHosts: "all",
  },
  css: {
    loaderOptions: {
      css: {
        url: false,
      },
    },
  },
  chainWebpack: (config) => {
    // Inline images smaller than 8KB as base64, skip larger ones
    config.module
      .rule('images')
      .set('parser', {
        dataUrlCondition: {
          maxSize: 8 * 1024, // 8KB
        },
      });

    config.plugin("copy").tap((args) => {
      const UNESCAPED_GLOB_SYMBOLS_RE = /(\\?)([()*?[\]{|}]|^!|[!+@](?=\())/g;
      const publicDir = path
        .resolve(process.VUE_CLI_SERVICE.context, "public")
        .replace(/\\/g, "/");
      const escapePublicDir = publicDir.replace(
        UNESCAPED_GLOB_SYMBOLS_RE,
        "\\$2"
      );
      args[0].patterns[0].globOptions.ignore =
        args[0].patterns[0].globOptions.ignore.map((i) =>
          i.replace(publicDir, escapePublicDir)
        );
      return args;
    });
  },
  // Performance hints to warn about large assets
  configureWebpack: {
    performance: {
      maxAssetSize: 512000, // 512KB warning threshold
      maxEntrypointSize: 512000,
      hints: 'warning',
    },
  },
};
