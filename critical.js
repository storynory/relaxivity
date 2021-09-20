const critical = require('critical');

critical.generate({
    base: './_site/',
    src: 'index.html',
    target: 'styles/styles.min.css',
    width: 1300,
    height: 900,
});