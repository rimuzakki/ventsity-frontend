const withLess = require("next-with-less");
const path = require("path");

const pathToLessFileWithVariables = path.resolve("./styles/variables.less")

module.exports = withLess({
  future: {
    webpack5: true,
  },

  lessLoaderOptions: {
    /* ... */
    additionalData: content =>`${content}\n\n@import '${pathToLessFileWithVariables}';`,
  },
});