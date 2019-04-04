const fs = require('fs')
const path = require('path')
const bodyParser = require('body-parser')
const express = require('express')
const open = require('open')
// const proxy = require('http-proxy-middleware')

const port = '8089'
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: false
}))

// 如果有接口跨域
// app.use('/reportBi', express.static(path.resolve(__dirname, './dist')))
// const options = {
//   target: 'http://10.180.221.151:8080/reportBi',
//   changeOrigin: true,
//   pathRewrite: {
//     '^/reportBi': ''
//   }
// }
// const exampleProxy = proxy(options)
// app.use('/*.do*', exampleProxy)
// 接口跨域
// 接口不跨域
app.use(express.static(path.resolve(__dirname, './dist')))
// 接口不跨域

app.get('*', (req, res) => {
  const html = fs.readFileSync(path.resolve(__dirname, './dist/index.html'), 'utf-8')
  res.send(html)
})

app.listen(port)
console.log('在', `http://localhost:${port}/`, '端口打开成功')
// eslint-disable-next-line eol-last
open(`http://localhost:${port}/`)