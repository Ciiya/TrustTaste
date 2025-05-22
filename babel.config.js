module.exports = function (api) {
  api.cache(true);

  return {
    presets: [
      ["babel-preset-expo", { jsxImportSource: "nativewind" }],
      "nativewind/babel",
      "@babel/preset-react",
      "@babel/preset-typescript"
    ],

    plugins: [
      ["module-resolver", {
      root: ["./"],

      alias: {
        "@": "./",
        "tailwind.config": "./tailwind.config.js"
      }}],
      ['module:react-native-dotenv', {
        moduleName: '@env',
        path: '.env',  
      }]
  ]
  };
};
