# Text
## 参数配置

### Number
props| type | default | description
---|---|---|---
min| [Number, String] |-Infinity|最小值
max|[Number,String] |Infinity |最大值
value|[String,Number] |null|传入的数值
step|Number|1|每次操作变更的数值
width|Number|60|宽度
height|Number|35|高度
numberStyle|Object|{}|自定义数值样式
containerStyle|Object|{}|自定义容器样式
disable|Boolean|false|是否禁止操作数值
autocomplete|String|'off'|是否自动补全
focus|Boolean|false|是否自动获取焦点


### TextBar

props| type | default | description
---|---|---|---
rows| Number |-| textarea 的可见高度
autofocus|Boolean |true |自动获取焦点
type|String |'text'|组件类型（text  or  textarea）
value|[String, Number]|''|文本框的数值
placeholder|[String,Number]|'请输入'|输入描述
inputStyles|Object|-|文本框自定义样式
maxlength|Number|-|文本的最大长度
name|String|-|文本框的name属性
readonly|Boolean|false|是否只读
disable|Boolean|false|是否禁止操作数值
autocomplete|String|'off'|是否自动补全



## 说明

- Number为数量加减组件，TextBar为文本输入组件
- 公共props已使用混合




```
<template>
  <Number v-model="number" :min="min" :max="max" :focus="focus" :step="step">
  </Number>


  <TextBar v-model="texts" type="textarea" :maxlength="9">
  </TextBar>
  <span>{{texts}}</span>
</template>
<script>
    export default {


        data(){
            return {
                number:1,
                min:1,
                max:10,
                step:2,
                focus:true，
                texts：'正在输入....'
            }
        }
    }

</script>

```