module.exports = api => {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      ["@babel/plugin-proposal-optional-chaining"],
      ["babel-plugin-styled-components"],
      [
        "module-resolver",
        {
          alias: {
            "@components": "./src/components",
            "@config": "./src/config",
            "@layouts": "./src/layouts",
            "@navigation": "./src/navigation",
            "@providers": "./src/providers",
            "@hooks": "./src/hooks",
            "@packages": "./src/packages",
            "@helpers": "./src/helpers",
            "@containers": "./src/containers",
            "@screens": "./src/screens",
            "@static": "./src/static",
            "@stores": "./src/stores",
            "@utils": "./src/utils",
            "@theme": "./src/theme",
          },
        },
      ],
    ],
  };
};
