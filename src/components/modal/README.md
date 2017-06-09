## Modal组件

***全局组件:[是]***

**接收prop参数：**

    props                     type                 default          description

    value                    Boolean                false         v-model控制组件是否显示

    closable                 Boolean                true            允许右上角关闭按钮

    maskClosable             Boolean                true           允许点击遮罩关闭modal

    title                    String                 none              modal标题

    width                    String               '220px'             modal宽度

    okText                   String                '确定'            modal按钮文本

    cancleText               String                '取消'            modal按钮文本

    loading                  Boolean               false             loading状态

    styles                   Object                 {}               自定义行内样式

    footerHide               Boolean               false              隐藏footer

    body                     String                none                body内容


  > 全局组件,已注册到Vue实例。


 ```
    this.$Modal.info({
        visible:false,
        width:'220px',
        body:'这是内容',
        title:'标题',
        okText:'确定',
        cancleText:'取消',
        loading:false, //
        showCancle:true,
        onOk:function(){},
        onCancle:function(){},
        onRemove:function(){}


    })

 ```