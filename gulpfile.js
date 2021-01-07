const gulp = require('gulp')
const del = require('del')
const moveFiles = (bolb, dest) => () => gulp.src(bolb).pipe(gulp.dest(dest))
gulp.task('clean:dist', async () => {
  await del(['./_server/dist/**/*'])
})
gulp.task('clean', async () => {
  await del(['./dist/**/*'])
})
gulp.task('delzip', async () => {
  await del(['./*.zip'])
})
gulp.task('move:dist', moveFiles('dist/**/*', './_server/dist'))
// eslint-disable-next-line eol-last
gulp.task('default', gulp.series('clean:dist', 'move:dist'))