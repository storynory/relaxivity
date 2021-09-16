var sass = require('sass');
const fs = require("fs");
var Fiber = require("fibers");

//sass.render({file: scss_filename}, function(err, result) { /* ... */ });

// OR

//var result = sass.renderSync({file: "./scss/bootstrap.scss"});
//console.log(result);

sass.render({file: "./css/scss/bootstrap.scss", outputStyle: "compressed",  fiber: Fiber},  function(err, result) { 
 fs.writeFile('./_site/styles/app.css', result.css, () => true)
          

    });

