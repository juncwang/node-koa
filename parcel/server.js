const Koa = require('koa')
const { resolve } = require('path')
// 本地静态资源服务器 npm install static
const serve = require('koa-static')

const app = new Koa()

// 配置静态资源服务器路径
app.use(serve(resolve(__dirname, './')))

app.listen(4466)
