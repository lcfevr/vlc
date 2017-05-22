## ActionSheet组件

***全局组件:[否]***

**接收prop参数：**

    props                     type                 default          description

    value                    Boolean                false            显示隐藏

    items                     Array                  none            操作列表

   maskClosable               Boolean                true        点击mask区域是否允许组件隐藏

   cancleText                 String                 '取消'       取消按钮文本，若为空则隐藏取消按钮




菜单栏跟container项均可通过slot配置 配置方法如下：

```
      <Action-sheet v-model="visible" :items="items"></Action-sheet>

```

```
  export default {

      data(){

          items:[],
          visible:false,


      }

  }

  ```