# Badge

## 参数配置


props|type|default|destiption
---|---| ---|---
type|String|'danger'('normal','danger','warning','success')|组件主题颜色
color|String|'#ffffff'|字体颜色
size|String|'normal'('small','normal','large')|组件大小
dot|Boolean|false|是否以红点展示
max|[Number,String]|99|显示的最大值
number|[Number,String]|none|显示的数字

## slot

name | description
---|---
none | 显示内容







## 说明

- 一个徽章，提示消息个数
- ==dot==模式下显示为小红点，即使传入==number==也不会显示出来
- ==number== 超出最大值 ==max== ，会以 ==max+== 的形式显示 ==eg:99+==






## 实例
```
<Badge number="10" max="99" :dot="false" size='danger' color='#ffffff'>
    <div style="width: 45px;height: 45px;background-color: black"></div>
</Badge>


```
