# Cell

## 参数配置


props|type|default|destiption
---|---| ---|---
title|String|none|组件title
value|*|none|右侧显示文字
label|String|none|title下方补充文字
link|String|none|点击跳转链接
hasMask|Boolean|99|点击是否显示阴影


## slot

name | description
---|---
icon | 小图标插值
title | title显示区域插值
value | 右侧说明区域插值







## 说明

- 一个单元格，可作列表显示，表单显示处理
- 若当前运行环境下有==vue-router==的实例，则==link==参数可跳转==vue-router==路由，若没有则只可跳转==http== || ==https==







## 实例
```
  <Cell title="标题" label="小标题" value="说明文字"  has-mask></Cell>


```
