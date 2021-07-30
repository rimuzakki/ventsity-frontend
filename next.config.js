const withPlugins = require('next-compose-plugins');
const withLess = require("next-with-less");
const withImages = require('next-images');
const path = require("path");

const pathToLessFileWithVariables = path.resolve("./styles/variables.less")

const nextConfig = {
  future: {
    webpack5: true,
  },
  images: {
    domains: ['localhost'],
  },
}

// const lessPlugin = withLess({
//   future: {
//     webpack5: true,
//   },
//   lessLoaderOptions: {
//     /* ... */
//     additionalData: content =>`${content}\n\n@import '${pathToLessFileWithVariables}';`,
//   },
// })

// const imagesPlugin = withImages({
//   images: {
//     domains: ['localhost:1337'],
//   },
// })

module.exports = withPlugins([
  [withLess, {
    lessLoaderOptions: {
      /* ... */
      additionalData: content =>`${content}\n\n@import '${pathToLessFileWithVariables}';`,
    },
  }],

  // [withImages, {
  //   images: {
  //     domains: ['localhost:1337'],
  //   },
  // }]
], nextConfig);

// module.exports = withPlugins([lessPlugin, imagesPlugin])