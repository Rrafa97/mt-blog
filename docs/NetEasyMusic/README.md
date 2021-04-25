---
title: 网易云音乐API——线上服务器demo记录
date: 2021-4-23
categories:
 - API
 - node
 - linux
tags:
 - node
 - linux
 - 服务器
---

## 需要说明
网易云官方不提供线上demo，只有部分示例存在线上demo

:::tip
[线上demo地址](http://rrafa.icu:3000/)
:::

## 需要的内容
1. 一个自己的服务器，已经设置了代理，公网可访问。
2. 配置了nginx
3. centos系统，或者其他linux

# 步骤
## 获取管理员权限
```js
$ sudo su root
```
## 安装node
在网上安装node，在你当前需要安装的路径新建一个文件夹node
然后从网上直接下载
```js
$ wget https://nodejs.org/dist/v12.14.1/node-v12.14.1-linux-x64.tar.xz
```
根据自己的需求来下载版本，路径请查看[官网](https://nodejs.org/zh-cn/)
 解压
先输入xz 你的压缩包名再tar 你的压缩包名
进入你当前的node
如果能正常进入说明node已经安装完成
查看node目录
```js
bin  CHANGELOG.md  include  lib  LICENSE  README.md  share
```
如果有如上目录，则是正常的
查看node版本
```js
cd bin
node  npm  npx
node -v
```
如果报错，说node不能借些，使用./node

如果显示安装成功则说明node已经安装到你的服务器

## 安装git
yum是安装插件的一个管理器，查看当前是否有安装yum
```js
yum --version
3.4.3
  已安装： rpm-4.11.3-40.el7.x86_64 在 2020-02-11 11:26
  构建    ：CentOS BuildSystem <http://bugs.centos.org> 在 2019-08-06 22:50
  已提交：Pavlina Moravcova Varekova <pmoravco@redhat.com> ，共 2019-05-26 

  已安装： yum-3.4.3-163.el7.centos.noarch 在 2020-02-11 11:26
  构建    ：CentOS BuildSystem <http://bugs.centos.org> 在 2019-08-08 11:57
  已提交：CentOS Sources <bugs@centos.org> ，共 2019-08-06 

  已安装： yum-plugin-fastestmirror-1.1.31-40.el7.noarch 在 2017-08-18 03:51
  构建    ：CentOS BuildSystem <http://bugs.centos.org> 在 2016-11-06 00:11
  已提交：Valentina Mukhamedzhanova <vmukhame@redhat.com> ，共 2016-08-04 
```
如果没有安装yum则需要安装一个，步骤自行百度

查看当前是否有git，若有则可以跳过这一步
```js
git --version
bash: git: 未找到命令...
yum install -y git
```
等待安装完成后查看git

```js
git --version
git version 1.8.3.1
```
## 配置git
```linux
[root@iziplquu0a4ipmz bin]# git config user.name
rrafa97
[root@iziplquu0a4ipmz bin]# git config user.email
1162965298@qq.com
[root@iziplquu0a4ipmz bin]# 
```
## 配置ssh
```js
ssh-keygen -t rsa -C "这里换上你的邮箱"
```
此过程要确认几次，完成了以后会出现一张图

## clone网易云的代码
在你想要clone的路径下创建一个文件夹，然后进入目录
再网易云音乐API官网上给出的链接直接clone
```js
$ git clone git@github.com:Binaryify/NeteaseCloudMusicApi.git
```
进入项目，查看项目内容是否clone完成，如果成功项目内容会是这样的
```js
app.js       CHANGELOG.MD  docs     index.js        issue_template.md  main.js  module_example  
node_modules  npm    package-lock.json  public     renovate.json  test           util
app.test.js  Dockerfile    forever  interface.d.ts  LICENSE            module   node           
 nohup.out     package.json  plugins            README.MD  static         tsconfig.json  vercel.json
```
这是我的目录，正常情况下是没有node，npm，forever这几个文件的
查看node再当前目录下是否能运行，如果可以的话直接npm安装依赖运行
```js
npm install
node app.js
```
此时项目是在服务器本地运行成功，如果需要更改地址，用官方给出的方法更改，如果报错直接vim进入app.js滑到最下面
```js
vim app.js
```
```js
const port = process.env.PORT || 3011
const host = process.env.HOST || ''
```
更改下边的host即可，另外还需要在你的服务器上面设置防火墙放开端口监听
如果在当前目录下运行node或者npm失败，使用ln -s 给node和npm添加软连接，用./语法打开

# 放出我自己的[demo](http://rrafa.icu:3000/)