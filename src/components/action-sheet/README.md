# Action-sheet

## 参数配置


props|type|default|destiption
---|---| ---|---
value|Boolean|false|显示/隐藏
items|Object[] (text,onClick,...)|none|操作列表
cancleText|String|'取消'|取消按钮









## 说明

- 一个操作表，由多行可点击区域组成
- 依赖于==Popup==组件
- ==items==属性为一个由对象组成的数组，每个对象由==text==,==onClick==组成，==text==为当前项的文本，==onClick==为点击之后的回调






## 实例
```
    <Action-sheet v-model="visible" :items="items" cancle-text="cancleText"></Action-sheet>


```

```
  export default {

      data(){

          items:[
            {
                text:'确定'  //文本
                onClick:function(){console.log('点击了确定')} //点击后的回调
            }
          ],
          visible:false,
          cancleText:'取消'

      }

  }

  ```