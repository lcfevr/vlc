# Button

## 参数配置


props|type|default|destiption
---|---| ---|---
type|String|'normal'('success', 'loading', 'normal','primary', 'warning', 'danger', 'text')|组件主题颜色
styles|Object|{}|自定义行内样式
circle|Boolean|false|设置组件是否为圆形
disable|Boolean|false|是否禁用
loading|Boolean|false|是否loading状态
inline|Boolean|false|是否为行内组件
radius|Boolean|true|是否有圆角
width|String|'100%'|button宽度
height|String|'100%'|button高度
border|String|'all'|允许边框条数

## slot

name | description
---|---
left | ==button==左侧插值，当==loading==为==true==时，默认为==loading==状态
none | ==button==显示文字，可以是==html==也可以是字符串
right | ==button==右侧插值


## event

name | description
---|---
click | 点击之后触发，当按钮为==loading==状态或者==disabled==状态时，点击无效



## 说明

- 一个按钮
- 点击事件也可以通过==@click.native==触发，但在==loading==状态下点击事件依旧触发







## 实例
```
<v-button :inline="true" width="40%" type="warning" :loading="loading" click="load"></v-button>

<v-button :inline="true" disabled width="40%" type="success"></v-button>
```
