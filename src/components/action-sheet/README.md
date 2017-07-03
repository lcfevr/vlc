## ActionSheet组件

***全局组件:[否]***

**接收prop参数：**

    props                     type                 default          description

    value                    Boolean                false            显示隐藏

    items                     Array                  none            操作列表

   maskClosable               Boolean                true        点击mask区域是否允许组件隐藏

   cancleText                 String                 '取消'       取消按钮文本，若为空则隐藏取消按钮




**
    其中items为数组，数组中的每一项为Object类型
    ```
        {
            text:'确定'  //文本
            onClick:function(){} //点击后的回调
            ...
        }
    ```

**

```
      <Action-sheet v-model="visible" :items="items"></Action-sheet>

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

      }

  }

  ```