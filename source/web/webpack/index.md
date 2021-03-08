---
title: webpack
type: webpack
order: 1
---

### webpack
webpack通过自执行函数启动，然后通过webpack自定义的exports和require实现模块化。在webpack万物皆模块。

### webpack流程
entry
output
loader
plugins

### loader和plugins
loader是模块加载器,用于加载某些资源文件
plugins用于扩展webpack的功能，提供更为强大的插件入口

### 常用的插件
http-proxy-middleware:利用代理进行跨域处理
CommonsChunkPlugin：提高打包效率，将第三方库和业务代码分开打包。
ProvidePlugin：自动加载模块
html-webpack-plugin：根据模板自动生成html代码，并自动引用css和js文件
HotModuleReplacementPlugin ：热更新
happypack：通过多进程模型，来加速代码构建
CleanWebpackPlugin：删除文件