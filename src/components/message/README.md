## Message组件

***全局组件:[是]***

**接收prop参数：**

    props                     type                 default          description

    name                 [String,Number]            none         当前message的name

    text                 [Number,String]             ''               消息描述

    duration                 Number                 1.5               显示时间

    showLeft                Boolean                false         显示消息文本左侧图标

    rightHide               Boolean                 true         隐藏消息文本右侧标签

    type                    String                 'normal'         message主题

    onClose                  Funtion                ()=>{}      消息框关闭之后的回调



  > 全局组件,已注册到Vue实例。


 ```
   let remove =  this.$Message.info(props) //返回当前message实例,可手动删除

  setTimeout(() => {
     remove();

  }, 3000) //手动删除

 ```
