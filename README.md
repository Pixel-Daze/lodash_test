# 前端tip集合

> 主体是移动端vue项目，内容包括vue移动端必要的库、vue项目基础架构、移动端ui库非通用组件实现、基础前端知识，[在线预览地址](https://pixel-daze.github.io/vue_note/)

### 技术栈
*FastClick*
> 解决移动端300ms点击延时

```
import FastClick from 'fastclick'

FastClick.attach(document.body)
```
*flexible_css.js*
>实现H5页面的终端适配

```
import '../static/lib/js/flexible_css.js'
```

*mint-ui*
>移动端基础UI库（可自行替换如vux）

```
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(Mint)
```

*iconfont*
>字体图标库

```
import '../static/lib/icon-font/iconfont.css'
```

*axios*
>ajax
```
import axios form 'axios'
```

*AlloyLever*
>移动端调试面板，在开发环境开启，配合vue-router使用
```
require('alloylever')
import { alloyDebug } from './service/alloyDebugService'
```

*lodash*
>操作各种类型的数据结构
```
import _ from 'lodash'

export default {
	install(Vue){
		Object.defineProperty(Vue.prototype,'_',{value:_})
	}
}

import _ from './plugins/lodash'
Vue.use(_)
```

### 基础架构

- [X] header's title transition
- [X] router-view transiton
- [X] main container overflow-y

### 常用组件
- [X] grid and grid-item component
- [ ] popup

### 常用页面

- [X] 扫码支付页面
- [X] 移动端付款(一般做成单独的页面，不适合放在整体项目中)

### 玩具页面
>一些css和jsdemo,偏向简单图形化,愉悦心情

- [X] randomCards 随机选项卡
- [X] triangle 三角形探究
- [X] Svg svg动画
- [X] Font 映入外部字体
- [X] css渐变 探索线性渐变和径向渐变
- [X] 图层投影
- [X] css animation
- [X] 制作省略号

### 特殊组件
- [X] 数字键盘1(基于*2.3.0*创建的组件，使用.sync)
- [X] 数字键盘2(基于2.0的通用组件,数字双向绑定，支持添加正则校验)，配合数字转人民币
- [X] 数字转人民币大写(独立小组件，主要是算法)
- [ ] 下拉筛选