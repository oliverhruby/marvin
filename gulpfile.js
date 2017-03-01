var gulp = require('gulp');
var tslint = require('gulp-tslint');
var del = require('del');
var exec = require('child_process').exec;
var execSync = require('child_process').execSync;
var nodemon = require('gulp-nodemon');
var runSequence = require('run-sequence');

gulp.task('vet-api', function () {
    return gulp.src('./src/api/**/*.ts')
        .pipe(tslint())
        .pipe(tslint.report());
});

gulp.task('clean-api', function () {
    return del(['./dist/api/**/*', '!dist/api']);
});

gulp.task('compile-api', function (done) {
    exec('tsc -p src/api', function (err, stdout, stderr) {
        console.log(stdout);
        done();
    });
});

gulp.task('build-api', function (done) {
    runSequence('vet-api', 'clean-api', 'compile-api', done);
});

gulp.task('build-api-no-clean', function (done) {
    runSequence('vet-api', 'compile-api', done);
});

gulp.task('watch-api', ['build-api-no-clean'], function () {
    return gulp.watch(['src/api/**/*.ts'], ['build-api-no-clean']);
});

gulp.task('serve-api', ['watch-api'], function () {
    return nodemon({
        script: 'dist/api/server.js',
        watch: 'dist/api',
        delay: 1000, // Delay in milliseconds
    })
    .on('restart', function () {
        console.log('Restarted');
    });
});
