const gulp = require('gulp')
const browserify = require('browserify')
const fs = require('fs')
gulp.task('compileES6',()=>{
    browserify('test.js').transform('babelify',{presets:["es2015","react"]}).bundle().pipe(fs.createWriteStream('bundle.js'))
})
