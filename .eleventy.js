

const webp  = require("./_includes/filters/webp");
//const pluginRss = require("@11ty/eleventy-plugin-rss");


module.exports = function(eleventyConfig) {

  // eleventyConfig.addPlugin(pluginRss);

  let markdownIt = require("markdown-it");
  let options = {
    html: true,
    breaks: true,
    linkify: true
  };
  

eleventyConfig.addNunjucksFilter("webp", webp);


   // Get the first `n` elements of a collection.

eleventyConfig.addFilter("head", (array, n) => {
    if (n < 0) {
      return array.slice(n);
    }

    return array.slice(0, n);
  });


  
};