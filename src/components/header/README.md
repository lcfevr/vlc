# Header

## 参数配置


props|type|default|destiption
---|---| ---|--- 
value|Boolean|true|显示/隐藏
fixed|Boolean|true|是否固定在窗口顶部
title|String|none|组件title
wechat|Boolean|false|微信环境下是否隐藏（微信下浏览器会自带header）



## slot

name | description
---|---
left | 组件左侧插值，默认为返回按钮
right | 组件右侧插值








## 说明

- 一个页面头部
- 若当前运行环境下检测为微信环境，会自动隐藏，通过==wechat==参数可人为控制在微信环境下组件是否隐藏







## 实例
```
        <Header title="标题"></Header>
    

```
