---
title: Coco的Css文章练习
date: 2021-1-20
categories:
 - 前端
 - css
tags:
 - css
 - demo
---

# Demo列-
## 第一个是一个心形
```css
.corner {
				position: absolute;
				top: 50%;
				left: 50%;
				transform: translate(-50%, -50%);
				width: 120px;
				padding: 60px;
				text-align: center;
				color: white;
				font-size: 200%;
				border-radius: 1em;
				background:
					linear-gradient(-150deg, transparent 1.5em, rgb(239, 99, 43) 0);
			}

.corner::before {
				content: '';
				position: absolute;
				top: 0;
				right: 0;
				background:
					linear-gradient(to left bottom,
					transparent 50%,
					rgba(0, 0, 0, .2) 0,
					rgba(0, 0, 0, .4)) 100% 0 no-repeat);
				width: 1.73em;
				height: 3em;
				transform: translateY(-1.3em) rotate(-30deg);
				transform-origin: bottom right;
				border-bottom-left-radius: inherit;
				box-shadow: -.2em .2em .3em -.1em rgba(0, 0, 0, .15);
		}
```


# 写不完了懒得写了