## prompt组件

***全局组件:[否]***

**接收prop参数：**

    props                     type                 default          description

    val                   String,Number              ''             input的数据

    value                    Boolean                false         v-model控制组件是否显示

    closable                 Boolean                true            允许右上角关闭按钮

    maskClosable             Boolean                true           允许点击遮罩关闭prompt

    title                    String                 none              prompt标题

    width                    String               '220px'             prompt宽度

    okText                   String                '确定'            prompt按钮文本

    cancleText               String                '取消'            prompt按钮文本

    loading                  Boolean               false             loading状态

    styles                   Object                 {}               自定义行内样式

    validator            Object,RegExp             null                 验证方式

    spec                    String                 '提示'             prompt内容文本

    message                 String                 none               验证提示信息


  > 全局组件,已注册到Vue实例。


 ```
    this.$prompt.info(props)

 ```