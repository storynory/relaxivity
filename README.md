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

## CSS: Bootstrap

We are using boostrap 5.

### Responsive Breakpoints and css classes

X-Small         none     <576px  
Small             sm     ≥576px  
Medium            md     ≥768px
Large             lg     ≥992px  
Extra large       xl     ≥1200px  
Extra extra large xxl    ≥1400px  

## Icons

FSize	Name	         Purpose

32×32	favicon-32.png 	 Standard for most desktop browsers
128×128	favicon-128.png	 Chrome Web Store icon & Small Windows 8 Star Screen Icon*
152×152	favicon-152.png	 iPad touch icon (Change for iOS 7: up from 144×144)
167×167	favicon-167.png	 iPad Retina touch icon
(change for iOS 10: up   from 152×152, not in action. iOS 10 will use 152×152)
180×180	favicon-180.png	  iPhone Retina
192×192	favicon-192.png	 Google Developer Web App Manifest Recommendation
196×196	favicon-196.png	 Chrome for Android home screen icon

https://www.npmjs.com/package/icon-gen