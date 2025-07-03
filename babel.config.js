module.exports = function (api) {
  api.cache(true);

  return {
    presets: [
      "babel-preset-expo",
      "@babel/preset-react",
      "@babel/preset-typescript"
    ],
    plugins: [
      [
        "@babel/plugin-transform-class-properties",
        { loose: true }
      ],
      [
        "@babel/plugin-transform-private-methods",
        { loose: true }
      ],
      [
        "@babel/plugin-transform-private-property-in-object",
        { loose: true }
      ],
      [
        "module-resolver",
        {
          root: ["./"],
          alias: {
            "@": "./",
          
          }
        }
      ],
      [
        "module:react-native-dotenv",
        {
          moduleName: "@env",
          path: ".env",
          safe: false,
          allowUndefined: true
        }
      ]
    ]
  };
};
