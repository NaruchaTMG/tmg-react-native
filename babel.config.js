module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [["@babel/plugin-proposal-class-properties"]],
  assumptions: {
    "setPublicClassFields": false
  }
};
