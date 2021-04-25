---
title: CSS可变的边框图
date: 2021/1/22
categories:
 - 前端
 - css
tags:
 - css
 - demo
---

::: tip
[原文是coco写的一篇文章，链接在这里](https://juejin.cn/post/6918921604160290830)
:::

## 复习border  
**在css里面border支持如下几种属性**
* solid  -实线
* dashed  -虚线
* none  
* hidden  
* dotted  -原点  
* double  -双线
* groove  
* ridge  
* inset  -内阴影
* outset  -外阴影

## 先实现一个简单的demo
如下图所示  
![效果图](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c01d562a5cee4c15acf5e675cbe9ba4f~tplv-k3u1fbpfcp-watermark.image)

html代码
```html
<div class="border-radius">
</div>
```
注意这里用的是scss
```css
html, body {
    width: 100%;
    height: 100%;
    display: flex;
}

:root {
    --borderColor: #03A9F3;
}

div {
    position: relative;
    width: 140px;
    height: 64px;
    margin: auto;
    border: 1px solid #03A9F3;
    cursor: pointer;
    
    &::before,
    &::after {
        content: "";
        position: absolute;
        width: 20px;
        height: 20px;
        transition: .3s ease-in-out;
    }
    
    &::before {
        top: -5px;
        left: -5px;
        border-top: 1px solid var(--borderColor);
        border-left: 1px solid var(--borderColor);
    }
    
    &::after {
        right: -5px;
        bottom: -5px;
        border-bottom: 1px solid var(--borderColor);
        border-right: 1px solid var(--borderColor);
    }
    
    &:hover::before,
    &:hover::after {
        width: calc(100% + 9px);
        height: calc(100% + 9px);
    }
}
```
**注意：**
* calc()函数是一个计算元素宽度的函数，用于动态计算长度值，需要注意的是，运算符前后都需要保留一个空格，例如：width: calc(100% - 10px)；  
任何长度值都可以使用calc()函数进行计算；  
calc()函数支持 "+", "-", "*", "/" 运算；  
calc()函数使用标准的数学运算优先级规则；  

COCO在这里写的：root我也是第一次遇到，百度查了这个原来是可以设置HTML文档背景色的css3语法比如
```css
:root
{
    background:#ff0000;
}
```
要注意的是:root选择器用匹配文档的根元素。在HTML中根元素始终是HTML元素。
[codepen代码](https://codepen.io/rrafa97/pen/NWRVWxW?editors=1100)

**&::**
&是scss里边的用法，在嵌套 CSS 规则时，有时也需要直接使用嵌套外层的父选择器，例如，当给某个元素设定 hover 样式时，或者当 body 元素有某个 classname 时，可以用 **& 代表嵌套规则外层的父选择器。**--官方文档

## 虚线边框动画
dashed是border的虚线关键字，但是，要让边框动起来，dashed是没有办法实现的，因此coco给出了一个方法————**渐变**
```scss
div {
    background: 
        linear-gradient(90deg, #333 50%, transparent 0) repeat-x,
        linear-gradient(90deg, #333 50%, transparent 0) repeat-x,
        linear-gradient(0deg, #333 50%, transparent 0) repeat-y,
        linear-gradient(0deg, #333 50%, transparent 0) repeat-y;
    background-size: 4px 1px, 4px 1px, 1px 4px, 1px 4px;
    background-position: 0 0, 0 100%, 0 0, 100% 0;
}
```