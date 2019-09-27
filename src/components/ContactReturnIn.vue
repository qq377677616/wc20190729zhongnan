<template>
    <div class="contact" id="contact">
        <el-row :gutter="24" class="contact-row mg-lr-0 pd-lr-0">
            <el-col class="pd-lr-0" :span="24" @click.native="backtoRouter('/index/contact')"><div class="grid-content contact-us bg-purple size-12" ><div class="contact-row-box"><el-image class="contact-row-img" :src="contactIcon"></el-image></div><div class="font-z-n contact-us-title">联系我们</div></div></el-col>
            <el-col class="pd-lr-0" :span="24" @click.native="backtoRouter('/index/innovation')"><div class="grid-content return-prev bg-purple size-12" ><div class="contact-row-box"><el-image class="contact-row-img" :src="returnIcon"></el-image></div><div class="font-z-n back-prev-title">返回上级</div></div></el-col>
            <el-col class="pd-lr-0" :span="24" @click.native="backtoRouter('/')"><div class="grid-content bg-purple back-main size-12" ><div class="contact-row-box"><el-image class="contact-row-img" :src="toMainIcon"></el-image></div><div class="font-z-n back-main-title">返回首页</div></div></el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: "contact",
        data(){
            return {
                contactIcon : require('../assets/common/page1_12.png'),
                returnIcon : require('../assets/common/page1_return.png'),
                toMainIcon : require('../assets/common/page1_11.png')
            }
        },
        methods : {
            backtoRouter(url){
                this.$router.replace({path:url})
            }
        }
    }
</script>

<style scoped>
    .contact {
        position:fixed;
        bottom:1.65rem;
        right:0;
        max-width:1rem;
        background-color:#fff;
        border-radius:5px;
        box-shadow: 0px 0px 2.5rem -1.5em;
        display: flex;
        justify-content: space-around;
        flex-direction: column;
        align-items: center;
        z-index:99999;
        transform: scale(0.9);
        transform-origin: right;
    }
    .contact-row-box {
        display:flex;
        justify-content: center;
    }
    .contact-row {
        height:100%;
    }
    .contact-row > div {
        height:50%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .contact-row-img {
        width:40%;
        margin-top:0.12rem;
    }
    .contact-us .contact-row-img {
        width:45%;
    }
    .grid-content {
        padding:0 0 0.12rem;
    }
    .contact .grid-content {
        color:#6ebdaf !important;
    }
    .font-z-n {
        font-size: 0.168rem;
    }
    .contact-us-title {
        font-size: 0.24rem;
        -webkit-transform-origin-x: 50%;
        -webkit-transform: scale(0.70);
        font-weight: 500;
    }
    .back-prev-title {
        font-size: 0.24rem;
        -webkit-transform-origin-x: 50%;
        -webkit-transform: scale(0.70);
        font-weight: 500;
    }
    .back-main-title {
        font-size: 0.24rem;
        -webkit-transform-origin-x: 50%;
        -webkit-transform: scale(0.70);
        font-weight: 500;
    }
    .return-prev {
        padding:0.2rem 0;
        position: relative;
    }
    .return-prev .contact-row-img {
        margin-top:0;
    }
    .return-prev:before {
        content : '';
        display: inline-block;
        position:absolute;
        top:0;
        left: 50%;
        transform: translate(-50%,-50%);
        width:70%;
        height:2px;
        background-color:#e0eff6;
    }
    .return-prev:after {
        content : '';
        display: inline-block;
        position:absolute;
        bottom:0;
        left: 50%;
        transform: translate(-50%,-50%);
        width:70%;
        height:2px;
        background-color:#e0eff6;
    }
</style>
