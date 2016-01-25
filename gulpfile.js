var gulp         = require('gulp');
var haml         = require('gulp-ruby-haml');
var sass         = require('gulp-sass');
var sourcemaps   = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var uglify       = require('gulp-uglify');
var browserSync  = require('browser-sync');
var browserify   = require('browserify')
var source       = require('vinyl-source-stream')
var reload       = browserSync.reload;

gulp.task('haml', function() {
  gulp.src('_haml/**/*.haml')
    .pipe(haml())
    .on('error', function (err) {
      console.log(err);
      this.emit('end');
    })
    .pipe(gulp.dest('./_site'));
});

gulp.task('sass', function() {
  gulp.src('assets/_sass/**/*.sass')
    .pipe(sourcemaps.init())
    .pipe(sass({
      indentedSyntax: true,
      outputStyle: 'compressed',
      includePaths: [
        'node_modules/susy/sass/'
      ]
    }).on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('_site/assets/css/'))
    .pipe(reload({stream: true}));
});

gulp.task('browserify', function() {
    return browserify('assets/js/app.js')
        .bundle()
        .pipe(source('assets/js/main.js'))
        .pipe(gulp.dest('./_site'));
})

gulp.task('browser-sync', function() {
  browserSync({
    notify: false,
    reloadDebounce: 2000,
    files: [
      '_site/assets/css/*.css',
      '_site/assets/media/**',
      '_site/assets/js/main.js',
      '_site/**/*.html'
    ],
    ghostMode: {
      clicks: true,
      forms: true
    },
    open: false,
    logLevel: 'debug',
    server: {
      baseDir: '_site'
    }
  });
});

gulp.task('watch', function() {
  gulp.watch('_haml/**/*.haml', ['haml']);
  gulp.watch('assets/_sass/**/*.sass', ['sass']);
  gulp.watch('assets/js/**/*.js', ['browserify']);
});

// Default Task
gulp.task('default', [
  'haml',
  'sass',
  'browserify',
  'browser-sync',
  'watch'
]);
