const Koa = require('koa')
const app = new Koa()

// 引入文件夹下的文件, 不明确写出文件名时, 默认为引用 index.js
const { htmlTpl, ejsTpl, pugTpl} = require('./tpl')
// ejs 模版引擎, npm install ejs
// const ejs = require('ejs')
// pug 模版引擎, npm install pug
const pug = require('pug')

app.use(async (ctx, next) => {
    ctx.type = 'text/html; charset=utf-8'
    // 使用 html 文件渲染页面
    // ctx.body = htmlTpl
    // 使用 ejs 模版引擎渲染页面, 后面为传入的参数
    // ctx.body = ejs.render(ejsTpl, {
    //     you: 'Luke',
    //     me: 'Scott'
    // })
    // 使用 pug 模版引擎渲染页面, 后面为传入的参数
    ctx.body = pug.render(pugTpl, {
        you: 'Luke',
        me: 'Scott'
    })
})

app.listen(5000)