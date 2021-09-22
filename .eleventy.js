

const webp = require("./_includes/filters/webp");
//const pluginRss = require("@11ty/eleventy-plugin-rss");
//const htmlmin = require('html-minifier')


module.exports = function (eleventyConfig) {

  // eleventyConfig.addPlugin(pluginRss);




  eleventyConfig.addNunjucksFilter("webp", webp);


  // Get the first `n` elements of a collection.

  eleventyConfig.addFilter("head", (array, n) => {
    if (n < 0) {
      return array.slice(n);
    }

    return array.slice(0, n);
  });

  /** 
    eleventyConfig.addTransform("htmlmin", function (content, outputPath) {
  
      if (outputPath.endsWith('.html')) {
  
        let minified = htmlmin.minify(content, {
          useShortDoctype: true,
          removeComments: true,
          collapseWhitespace: true
        });
        return minified;
      }
  
      return content;
    });
   **/

};