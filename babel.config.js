module.exports = function (api) {
  api.cache(true);

  return {
    presets: [
      ["babel-preset-expo", { jsxImportSource: "nativewind" }],
      //["@babel/preset-env", { loose:true }],
      "nativewind/babel",
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
            "tailwind.config": "./tailwind.config.js"
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
