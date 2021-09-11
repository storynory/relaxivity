
const card = require("./_includes/components/cards/card")
//const pluginRss = require("@11ty/eleventy-plugin-rss");
const rssdate = require("./_includes/filters/dateRfc3339");
const rsslatest = require("./_includes/filters/getNewestCollectionItemDate");
const datemod  = require("./_includes/filters/datenow");

module.exports = function(eleventyConfig) {
// eleventyConfig.addPlugin(pluginRss);
 
  let markdownIt = require("markdown-it");
  let options = {
    html: true,
    breaks: true,
    linkify: true
  };
eleventyConfig.addNunjucksFilter("rssdate", rssdate);
eleventyConfig.addNunjucksFilter("rsslatest", rsslatest);
eleventyConfig.addNunjucksFilter("datemod", datemod);
eleventyConfig.addNunjucksShortcode("card", card);

   // Get the first `n` elements of a collection.

eleventyConfig.addFilter("head", (array, n) => {
    if (n < 0) {
      return array.slice(n);
    }

    return array.slice(0, n);
  });
};