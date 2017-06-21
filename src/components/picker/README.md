## Picker组件

***全局组件:[否]***

**接收prop参数：**

    props                     type                 default          description

    type                     String              'DatePicker'       Picker类型['DatePicker','AreaPicker','NormalPicker']

    value                   Boolean                false             显示/隐藏

    styles                 Object                     {}            自定义行内样式

    @sure                  Function                  none           点击确定按钮后回调

    @cancle                Function                  none           点击取消后回调



**DatePicker**

     props                     type                 default                     description

    initYear              [String, Number]    new Date().getFullYear()           年份初始化

    initMonth             [String, Number]    new Date().getMonth()+1            月份初始化

    initDay               [String, Number]    new Date().getDate()               日初始化

    year                  [Boolean, Array]           true                 年份的数组，为false时不渲染当前列

    month                 [Boolean, Array]           true                 月份的数组，为false时不渲染当前列

    day                   [Boolean, Array]           true                 日的数组，为false时不渲染当前列

    valueSeparator             String                '/'                          分隔符





 ### DatePicker

 ```
           <Picker
                    type='AreaPicker'
                    @sure="pickerSure"
                    @cancle="pickerCancle"
                    v-model="visible"
                    :init-year="initYear"
                    :init-month="initMonth"
                    :init-day="initDay"
                    value-separator='-'
                    >
            </Picker>

           export default {

               data(){
                   visible:true,
                    initYear:'2017',
                    initMonth:'6',
                    initDay:'21'
               },
               methods(){
                   pickerSure(data){
                       console.log(data)
                   },
                   pickerCancle(){
                       console.log('cancle')
                   }
               }
           }

 ```











**AreaPicker**

     props                     type                 default                     description

    initProvince          [String, Number]          '110000'                     省初始化

    initCity              [String, Number]          '110100'                     城市初始化

    initDistrict          [String, Number]          '110101'                     区域初始化

    styles                Object                       {}                        自定义行内样式

    rootCode              [String, Number]            '86'                       国家（暂只支持中国）


 ### AreaPicker

 ```
           <Picker
                    type='AreaPicker'
                    @sure="pickerSure"
                    @cancle="pickerCancle"
                    v-model="visible"
                    :init-province="initProvince"
                    :init-city="initCity"
                    :init-district="initDistrict"
                    >
            </Picker>

           export default {

               data(){
                   visible:true,
                    initProvince:'110000',
                    initCity:'110100',
                    initDistrict:'110101'
               },
               methods(){
                   pickerSure(data){
                       console.log(data)
                   },
                   pickerCancle(){
                       console.log('cancle')
                   }
               }
           }

 ```






**NormalPicker**

     props                     type                 default                     description

     list                      Array                   []                         列表项

     initArr                   Array                   []                         列初始化




 ### NormalPicker

 ```
           <Picker
                    type='AreaPicker'
                    @sure="pickerSure"
                    @cancle="pickerCancle"
                    v-model="visible"
                    :list="list"
                    :init-arr="initArr"

                    >
            </Picker>

           export default {

               data(){
                   visible:true,
                   initArr: ['w', 'e', 'r'],
                   list: [
                                       {
                                           target: 'a',
                                           list: [{value: 'w',code:1}, {value: 2, code: 2}, {value: 3, code:3}, {
                                               value: 4,
                                               code: 4
                                           }, {value: 5, code: 5}, {value: 6, code: 6}, {value: 7, code: 7}, {
                                               value: 8,
                                               code: 8
                                           }, {value: 9, code: 9}, {value: 0, code: 0}]
                                       },
                                       {
                                           target: 'b',
                                           list: [{value: 'e',code:1}, {value: 2, code: 2}, {value: 3, code:3}, {
                                               value: 4,
                                               code: 4
                                           }, {value: 5, code: 5}, {value: 6, code: 6}, {value: 7, code: 7}, {
                                               value: 8,
                                               code: 8
                                           }, {value: 9, code: 9}, {value: 0, code: 0}]
                                       },
                                       {
                                           target: 'c',
                                           list: [{value: 'r',code:1}, {value: 2, code: 2}, {value: 3, code:3}, {
                                               value: 4,
                                               code: 4
                                           }, {value: 5, code: 5}, {value: 6, code: 6}, {value: 7, code: 7}, {
                                               value: 8,
                                               code: 8
                                           }, {value: 9, code: 9}, {value: 0, code: 0}]
                                       }
                                   ]
               },
               methods(){
                   pickerSure(data){
                       console.log(data)
                   },
                   pickerCancle(){
                       console.log('cancle')
                   }
               }
           }

 ```
