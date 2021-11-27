# 后台搭建
## 框架选择
本文选用eggjs，对原本的eggjs做了一定的改造 方便快速开发
## 框架生成

直接使用脚手架，只需几条简单指令，即可快速生成项目 详细说明 见[egg.js 快速入门](https://eggjs.org/zh-cn/intro/quickstart.html)

```shell
$ mkdir WebServer && cd WebServer
$ yarn init egg
```
选择 ts
```
? Please select a boilerplate type
  ──────────────
  simple - Simple egg app boilerplate
  microservice - Microservice app boilerplate based on egg
  sequelize - egg app with sequelize
> ts - Simple egg && typescript app boilerplate
  empty - Empty egg app boilerplate
  plugin - egg plugin boilerplate
  framework - egg framework boilerplate
```
命令行设置项目基本配置
```
? project name WebServer
? project description simple Web builder
? project author Xiang 
? cookie security keys XiangWebBuilderSecurityKey
```
启动项目:
```shell
$ yarn
$ yarn dev
$ open http://localhost:7001
```

## 自定义配置
