const
    // module u konstante
    gulp = require('gulp'),
    imagemin = require('gulp-imagemin'),
    newer = require('gulp-newer')

// folderi
src = 'src',
    build = 'build'

// TASK FUNCTIONS
const images = () => {
    const outpuImagePath = `${build}/assets/images`
    const inputImagePath = `${src}/images/**/*`

    return gulp.src(inputImagePath)
        .pipe(newer(outpuImagePath))
        .pipe(gulp.dest(outpuImagePath))
        .pipe(imagemin())
}



// TASK DEFINITION
exports.images = images