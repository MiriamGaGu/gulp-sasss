var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');

//compliar archivos scss a css
gulp.task('sass',function() {
    return gulp.src(['node_modules/boostrap/scss/boostrap.scss','src/scss/*.scss'])
    .pipe(sass())
    .pipe(gulp.dest('src/css'))
    .pipe(browserSync.stream());
});

//mover los archivos js de los pauqetes al proyecto
gulp.task('js', function(){
    return gulp.src(['node_modules/dist/js/boostrap.js', 'node_modules/dist/js/jquery.js', 'node_modules/tether/dist/js/tether.js'])//buscar su src
    .pipe(gulp.dest('src/js'))
    .pipe(browserSync.stream());
});

// gulp.task(self, function()){
//     return gulp.src(['node_modules/'])

// }

//hacer un servidor Ejecutar proyecto
gulp.task('srve', ['sass'], function()){
    browserSync.init({ 
      serve: './src'
    });
    gulp.watch(['node_modules/boostrap/scss/boostrap.scss', '*.scss'], ['sass']);
    gulp.watch('src/*.html').on('change', browserSync.reload);
});

