const {CracoAliasPlugin} = require('react-app-alias')

module.exports = {
  plugins: [
    {
      plugin: CracoAliasPlugin,
      options: {}
    }
  ],
  style: {
    postcssOptions: {
      plugins: [require("tailwindcss"), require("autoprefixer")],
    },
  },
};
