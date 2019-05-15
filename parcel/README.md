### parcel

* 安装 `npm install parcel`

* 配置 `build": "rm -rf parcel/dist && parcel build parcel/index.html --no-cache -d parcel/dist --public-url /dist/"`

* 打包 `npm run build`

```js
// 如果需要编译 react 框架语法,需添加 .babelrc 配置文件在根目录下
// 配置如下
`
{
    "presets": ["env", "stage-0", "react"],
    "plugins": [
        "transform-runtime",
        "transform-decorators-legacy",
        "transform-class-properties"
    ]
}
`
// 并安装 babel 及 babel 插件
`
npm install babel-preset-env babel-preset-stage-0 babel-preset-react babel-plugin-transform-runtime babel-plugin-transform-decorators-legacy babel-plugin-transform-class-properties
`
```

* 运行时需使用 koa-server 开启一个服务或放在服务器上使用