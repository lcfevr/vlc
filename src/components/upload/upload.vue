<template>
    <div class="vlc-upload" >
        <slot>
            <div class="vlc-upload-wrapper"></div>
        </slot>
        <input type="file" ref="upload" :capture="capture" :accept="accept" :multiple="multiple" @change="showPhoto"/>
    </div>
</template>

<script>

    import EXIF from '../../lib/exif'
    import MegaPixImage from '../../lib/MegaPixImage'
    export default {
        props:{
            multiple:{
                type:Boolean,
                default:false
            },
            accept:{
                type:String,
                default:'image/*'
            },
            capture:{
                type:String,
                default:'camera'
            }
        },
        data(){
            return {}
        },
        methods:{

            showPhoto(e){
                let file = e.target.files;
                let that = this;
                for(let i = 0;i < file.length; i++){
                    let Orientation=null;
                    let reader = new FileReader();
                    reader.readAsDataURL(file);
                    reader.onload=function(e){
                        let img=new Image();
                        img.src=e.target.result;
                        img.onload=function(){
                            EXIF.getData(img, function() {
                                EXIF.getAllTags(this);
                                Orientation = EXIF.getTag(this, 'Orientation');
                                that.create(file,Orientation);
                            });
                        }
                    };
                }

                e.target.value='';
            },
            create(file,Orientation){

                let _this=this;
                let data=null;
                let img = new Image();
                let mpImg = new MegaPixImage(file);
                mpImg.render(img, { maxWidth: 600, quality: 0.8 });
                img.onload = function() {
                    let canvas = document.createElement('canvas');
                    let ctx = canvas.getContext('2d');
                    ctx.clearRect(0, 0, canvas.width, canvas.height);
                    canvas.width=img.width;
                    canvas.height=img.height;
                    ctx.drawImage(this, 0, 0, canvas.width, canvas.height);
                    data = canvas.toDataURL("image/jpeg",  0.8);
                    if (navigator.userAgent.match(/iphone/i)) {
                        if (Orientation != "" && Orientation != 1) {
                            switch (Orientation) {
                                case 6:
                                    _this.rotateImg(this, 'left', canvas);
                                    break;
                                case 8:
                                    _this.rotateImg(this, 'right', canvas);
                                    break;
                                case 3:
                                    _this.rotateImg(this, 'right', canvas);
                                    _this.rotateImg(this, 'right', canvas);
                                    break;
                            }
                        }
                        data = canvas.toDataURL("image/jpeg",  0.8);
                    }
                    if (navigator.userAgent.match(/Android/i)) {
                        let JPEGEncoder=util.JPEGEncoder;
                        let encoder = new JPEGEncoder();
                        data = encoder.encode(ctx.getImageData(0, 0, canvas.width, canvas.height), 80);
                    }
                    let result = {
                        base64: data,
                        clearBase64: data.substr(data.indexOf(',') + 1)
                    };

                };
            },
            rotateImg(img, direction,canvas) {
                let min_step = 0;
                let max_step = 3;
                if (img == null)return;
                let height = img.height;
                let width = img.width;
                let step = 2;
                if (step == null) {
                    step = min_step;
                }
                if (direction == 'right') {
                    step++;
                    step > max_step && (step = min_step);
                } else {
                    step--;
                    step < min_step && (step = max_step);
                }
                let degree = step * 90 * Math.PI / 180;
                let ctx = canvas.getContext('2d');
                switch (step) {
                    case 0:
                        canvas.width = width;
                        canvas.height = height;
                        ctx.drawImage(img, 0, 0,canvas.width,canvas.height);
                        break;
                    case 1:
                        canvas.width = height;
                        canvas.height = width;
                        ctx.rotate(degree);
                        ctx.drawImage(img, 0, -height,canvas.height,canvas.width);
                        break;
                    case 2:
                        canvas.width = width;
                        canvas.height = height;
                        ctx.rotate(degree);
                        ctx.drawImage(img, -width, -height,canvas.width,canvas.height);
                        break;
                    case 3:
                        canvas.width = height;
                        canvas.height = width;
                        ctx.rotate(degree);
                        ctx.drawImage(img, -width, 0,canvas.height,canvas.width);
                        break;
                }
            }
        }
    }
</script>

<style lang="less">
    .vlc-upload {
        position: relative;
        width:100px;
        height:50px;
        &-wrapper {
            width: 100%;
            height: 100%;
            background: #39f;
            color: #ffffff;
            line-height: 50px;
            text-align: center;
            border-radius: 10px;
        }

        input[type=file] {
            position: absolute;
            left:0;
            top:0;
            opacity: 0;
            width:100%;
            height:100%;
        }

    }
</style>