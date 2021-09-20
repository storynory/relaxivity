var sass = require('sass');
const fs = require("fs");
Fiber = require("fibers");
const postcss = require("postcss");
prefixer = require('autoprefixer')
const purge = require('@fullhuman/postcss-purgecss')
//sass.render({file: scss_filename}, function(err, result) { /* ... */ });
const plugins = [
   prefixer,
   purge({
      content: ['./_site/*.html', '**/*.html',]
   })

]




sass.render({ file: "./css/styles.scss", outputStyle: "compressed", fiber: Fiber }, function (err, result) {
   //fs.writeFile('./_site/styles/app.css', result.css, () => true)
   let code = result.css.toString();


   postcss(plugins).process(code, { from: "./css/styles.scss", to: './_includes/styles/app3.css' }).then(result => {

      fs.writeFile('./_includes/styles/app2.css', result.css, () => true)
   })

});

