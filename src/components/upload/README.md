## Upload组件

***全局组件:[否]***

***接收slot插值***

***on-change-file事件，接收预览图的base64字符串，类型为数组***

**接收prop参数：**

    props                     type                 default          description

    multiple                 Boolean               false            是否多文件上传

    accept                   String               'image/*'         接收文件的类型


    capture                  String                'camera'          指定调用类型

    styles                    Object                {}               自定义样式



**接收prop参数：**

```
         <Upload :multiple="true" @on-change-file="onChangeFile" ref="upload"></Upload>
          <img :src="item.base64" v-for="item in files"/>

         export default {
            data(){
                return {
                    files:null
                }
            }
            methods:{
                onChangeFile(img){
                    this.files = img
                }
            }
         }

```





