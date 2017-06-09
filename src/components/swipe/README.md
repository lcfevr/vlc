## Swipe组件

***全局组件:[否]***

**接收prop参数：**

    props                     type                 default          description

    auto                     Boolean               true            是否自动轮播

    list                      Array                 []              轮播数组


    startIndex                Number                0           规定开始轮播的索引

    height                  [Number,String]        auto             组件高度

    dots                      String              'bottom'          焦点位置

    mutiple                   Boolean             false             list是否为多维数组（组件会自动判定）

    distanceIndex             Number              1.5               滑动速度

    loop                      Boolean             true              是否循环

    speed                     Number               2                轮播速度
    perpage                    Number               1              每个轮播项里的子项个数




```
   <Swipe :auto="auto" :loop="loop" :list="list"></Swipe>

   export defaut {

       data(){
           return {
               auto:true,
               loop:true,
               list:[
                    [
                            { image:'https://vuefe.cn/images/logo.png',
                            spec:'1111'
                            },
                            { image:'https://vuefe.cn/images/logo.png',
                                spec:'2222'
                            }
                    ]

                    ,
                    [
                            { image:'https://vuefe.cn/images/logo.png',
                                spec:'3333'
                            },
                            { image:'https://vuefe.cn/images/logo.png',
                                spec:'5555'
                            }
                        ]
                    ,
                    [
                            { image:'https://vuefe.cn/images/logo.png',
                                spec:'121231'
                            },
                            { image:'https://vuefe.cn/images/logo.png',
                                spec:'0000'
                            }
                        ]

                ]
           }
       }
   }
```