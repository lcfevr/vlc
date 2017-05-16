## Editor组件

***全局组件:[否]***

**接收prop参数：**

    props                     type                 default          description

    theme                    String               twilight           组件的主题

    width                    String                '100%'              宽度

    height                   String                400px               高度

    mode                     String              'javascript'       代码高亮模式

    value                    String                 ''              高亮代码的内容

    readOnly                 Boolean               false              只读

    styles                   Object                 {}              自定义行内样式








  ```
  <Editor :theme="theme" :value="value" ></Editor>



  export default {

      data(){

          data:[],
          theme:'twilight',
          value:'var a = 1;'
      }

  }

  ```
