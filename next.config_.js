const withAntdLess = require('next-plugin-antd-less');

module.exports = withAntdLess({
  // modifyVars: { '@primary-color': '#04f', },
  lessVarsFilePath: './styles/variables.less',
  // cssLoaderOptions: {},
  
  // Other NextConfig Here...
  webpack(config) {
    return config;
  },

  // NextFuture
  future: {
    webpack5: true,
  },
});