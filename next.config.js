const withPlugins = require('next-compose-plugins');
const withLess = require("next-with-less");
const withImages = require('next-images');
const withPWA = require("next-pwa");
const runtimeCaching = require('next-pwa/cache')
const path = require("path");

const pathToLessFileWithVariables = path.resolve("./styles/variables.less")

const nextConfig = {
  future: {
    webpack5: true,
  },
  images: {
    domains: ['localhost', 'ventsity.vercel.app'],
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

  [withPWA, {
    pwa: {
      dest: "public",
      // disable: process.env.NODE_ENV === 'development',
      // register: true,
      // skipWaiting: true,
      // runtimeCaching,
    },
  }]

  // [withImages, {
  //   images: {
  //     domains: ['localhost:1337'],
  //   },
  // }]
], nextConfig);

// module.exports = withPlugins([lessPlugin, imagesPlugin])