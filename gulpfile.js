const gulp = require('gulp')
const del = require('del')
const zip = require('gulp-zip')
const minimist = require('minimist')

function nowDate () {
  const date = new Date()

  function format (s) {
    if (String(s).length < 2) {
      return `0${s}`
    }
    return s
  }
  const year = `${date.getFullYear()}年`
  const month = `${format(date.getMonth() + 1)}月`
  const day = `${format(date.getDate())}日`
  const hour = `${format(date.getHours())}时`
  return `${year}${month}${day}${hour}`
}
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
const zipOptions = {
  string: 'name',
  default: `dist${nowDate()}.zip`
}
const options = minimist(process.argv.slice(2), zipOptions)
gulp.task('zip', () => gulp.src('dist/**/*').pipe(zip(options.name || `./dist/dist${nowDate()}.zip`)).pipe(gulp.dest('./')))
// eslint-disable-next-line eol-last
gulp.task('default', gulp.series('clean:dist', 'move:dist'))