## Picker组件

***全局组件:[否]***

**接收prop参数：**

    props                     type                 default          description

    rootCode              String,Number              86             根节点code

    value                  Boolean                none           显示/隐藏

    styles                 Object                     {}            自定义行内样式

    @sure                  Function                  none           点击确定按钮后回调

    @cancle                Function                  none           点击取消后回调



 ```
           <Picker @sure="pickerSure" @cancle="pickerCancle" v-model="visible"></Picker>

           export default {

               data(){
                   visible:true,

               },
               methods(){
                   pickerSure(){
                       console.log('sure')
                   },
                   pickerCancle(){
                       console.log('cancle')
                   }
               }
           }

 ```