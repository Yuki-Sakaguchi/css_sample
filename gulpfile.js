var gulp    = require('gulp'),
    plumber = require('gulp-plumber'), // エラーでwatchを止めない
    sass    = require('gulp-sass'); // sassのコンパイル

var sassSrcPath  = './src/sass/',
    sassDistPath = './css/';


gulp.task('sass', function() {
  gulp.src(sassSrcPath + '*.scss')
  .pipe(plumber({
    errorHandler: function(err) {
      console.log(err.messageFormatted);
      return this.emit('end');
    }
  }))
  .pipe(sass({
    outputStyle: 'expanded',
  }))
  .pipe(gulp.dest(sassDistPath));
});


gulp.task('watch', function() {
  gulp.watch(sassSrcPath + '*.scss', ['sass']);
});
