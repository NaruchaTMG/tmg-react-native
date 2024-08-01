assumptions = {
  setPublicClassFields: true,
  privateFieldsAsSymbols: true,
};

module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      '@babel/plugin-proposal-decorators',
      {
        'version': '2023-05',
      },
    ],
    ['@babel/plugin-transform-class-static-block'],
  ]
};
