# my-ui 一个搭配vue使用的ui框架

[![Build Status](https://www.travis-ci.org/sthldd/my-ui.svg?branch=master)](https://www.travis-ci.org/sthldd/my-ui)

## 一个自制的ui框架，记录我的学习过程

## 开始使用

1. 添加样式

使用本框架之前，请在css中开启boder-box,

```
*{
  box-sizing:border-box;
}
```
你还需要在html文件中设置默认样式

```
html{
    --button-height:32px;
    --font-size:14px;
    --button-bg: white;
    --button-active-bg: #eee;
    --border-radius: 4px;
    --color: #333;
    --border-color: #999;
    --border-color-hover: #666;
  }
```

2. 安装

```
npm i --save mlx-ui
```

3. 引入ui

```
import {Button,Icon} from 'mlx-ui'
import 'mlx-ui/dist/index.css'
export default {
  name: 'app',
  components: {
    'm-button':Button,
    'm-icon':Icon
  }
}
```