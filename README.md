# Page header

## css

We are using bootstrap 5. It's not beautiful out of the box, but it's really easy to use and can be made to look nice. It's very comprehesive. It also downloads really fast and won't slow down the site.

## _includes

This folder is where the layouts and components are kept (templates). Some are templates that use the .njk suffix (nunjucks template language).  Other files here (shortcodes and filters) use .js. Shortcodes and filters need to be registerd in eleventy.js.  You need to restart eleventy everytime you change a shortcode or filter. (browser sync does not show changes)

### Shortcodes

Shortcodes are components that allow you to pass contextual data into them - from a loop for example. They use js files which use template literals with the backtick and dollar syntax.

### Filters

Filters are also js files. These are functions that can do things like reformat a date.  They are called with the pipe | synatax.  You can chain filters one after the other with pipes.

## Base Layout

The base layout (layouts/base) contains the head, header and footer and is used by most of the other layouts to keep site consistant.

## Home Page

index.njk is at the top of the site. It uses layouts/homepage.njk. This loops through cards desplaying latest posts. The cards come from a shortcode type component (components/card.js).  homepage.njk also has a jumbotron.
