const gulp = require('gulp')
const uglify = require('gulp-uglify')
const concat = require('gulp-concat')
const uglifyCss = require('gulp-uglifycss')

gulp.task('deps', ['deps.js','deps.css','deps.fonts'])


gulp.task('deps.js', function(){
    gulp.src([
        'node_modules/angular/angular.min.js',
        'node_modules/angular-ui-router/release/angular-ui-router.min.js/',
        'node_modules/angular-animate/angular-animate.min.js',
        'node_modules/angular-toastr/dist/angular-toastr.tpls.min.js',
        'node_modules/admin-lte/plugins/jQuery/jquery-2.2.3.min.js',
        'node_modules/admin-lte/bootstap/js/bootstap.min.js',
        'node_modules/admin-lte/plugins/slimScroll/jquery/.slimscroll.min.js',
        'node_modules/admin-lte/dist/js/app.js.min'
    ])
    .pipe(uglify())
    .pipe(concat('deps.min.js'))
    .pipe(gulp.dest('public/assets/js'))
})


gulp.task('deps.css', function(){
    gulp.src([
        'node_modules/angular-toastr/dist/angular-toastr.min.css',
        

    ])
    .pipe(uglifyCss({"uglyComments" : true}))
    .pipe(concat('deps.min.css'))
    .pipe(gulp.dest('public/assets/css'))
})


gulp.task('deps.fonts', function(){
    
})