<template>
  <div id="duty" class="common-box" ref="duty-child" v-cloak>
<!--    <div class="content info-content">-->
<!--&lt;!&ndash;      <el-scrollbar>&ndash;&gt;-->
<!--&lt;!&ndash;        <DutyTop></DutyTop>&ndash;&gt;-->
<!--&lt;!&ndash;        <transition name="slide-right">&ndash;&gt;-->
<!--&lt;!&ndash;          <router-view class="duty-child-view"></router-view>&ndash;&gt;-->
<!--&lt;!&ndash;        </transition>&ndash;&gt;-->
<!--&lt;!&ndash;      </el-scrollbar>&ndash;&gt;-->
<!--    </div>-->
    <div class="about-top">
      <el-row :gutter="24" class="about-top-main mg-lr-0">
        <el-col :span="8" class="top-el" v-for="(aboutItem,aboutIndex) in abouticonList" :key="aboutItem.id"  @click.native="changeType(aboutItem.urlname,$event,aboutIndex)">
          <!--<router-link  :to="{name : aboutItem.urlname}" >-->
          <div :class="{'grid-content':true, 'bg-purple':true, 'size-12':true,'about-top-active':lightIndex == aboutIndex}">
            <div class="about-top-box">
              <el-image class="about-top-img" :src="aboutItem.iconimg" ></el-image>
            </div>
            <span v-text="aboutItem.name"></span>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="content-main">
      <swiper :options="swiperOptions" ref="mySwiper" v-if="planInfo != ''">
        <swiper-slide>
          <div id="honor">
            <el-row class="tac">
              <el-col :span="5" class="tac_left">
                <ul>
                  <li @click="changeList(honorIndex)" :class="{'el-menu-item':true,'is-active': honorItem.checked}" v-for="(honorItem,honorIndex) in honorList" v-text="honorItem.year" :key="honorItem.id"></li>
                </ul>
              </el-col>
              <el-col :span="21" class="tac-right">
                <div :class="{'honor-box':true,'tac-animate':item.checked}" v-for="(item) in honorList" :key="item.id" v-show="item.checked">
                  <div class="honor-dialog"></div>
                  <div class="honor-box-content">
                    <div class="honor-type">
                      <div class="honor-type-box" >
                        <div class="honor-title" v-show="item.honor_list.type1!=''"><span>品牌荣誉</span><br><span >BRAND HONOR</span></div>
                        <div class="honor-type-info" v-for="(honorItem) in item.honor_list.type1" :key="honorItem.id">
                          <div class="honor-type-content" v-text="honorItem.title"></div>
                        </div>
                        <!--<div class="honor-title" v-show="item.honor_list.type2!=''"><span>项目荣誉</span><br><span >PROJECT HONOR</span></div>-->
                        <!--<div class="honor-type-info" v-for="(honorItem) in item.honor_list.type2" :key="honorItem.id">-->
                          <!--<div class="honor-type-content" v-text="honorItem.title"></div>-->
                        <!--</div>-->
                      </div>
                      <div class="honor-type-box" >
                        <div :class="{'honor-title':true,'honor-top':item.honor_list.type1!=''}" v-show="item.honor_list.type2!=''"><span>项目荣誉</span><br><span >PROJECT HONOR</span></div>
                        <div class="honor-type-info" v-for="(honorItem) in item.honor_list.type2" :key="honorItem.id">
                          <div class="honor-type-content" v-text="honorItem.title"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </el-col>
            </el-row>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="content-main-info">
            <div class="info-detail-box">
              <div class="info-detail" v-html="planInfo"  v-cloak>
              </div>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
    <ContactBox></ContactBox>
  </div>
</template>

<script>
  import 'swiper/dist/css/swiper.css'////这里注意具体看使用的版本是否需要引入样式，以及具体位置。
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  export default {
    name: "duty",
    data(){
      return {
        show :false,
        transitionName : '',
        lightIndex : 0,
        year : '2019',
        honorList : [

        ],
        abouticonList :[
          {
            id:1,
            iconimg: require('../assets/common/page3_10.png'),
            name : '重要荣誉',
            urlname : 'honor',
            info : null
          },
          {
            id:2,
            iconimg:require('../assets/common/page3_9.png'),
            name : '社会责任',
            urlname : 'responsibility',
            info : null
          }
        ],
        planInfo : ''
      }
    },
    components: {
      ContactBox:() => import('@/components/ContactBox.vue'),
      swiper,
      swiperSlide
    }
    ,
    methods : {
      changeList(yIndex){
        let _this = this;
        _this.honorList.forEach((item,index) =>{
          if(yIndex == index){
            item.checked = true
          }else {
            item.checked = false
          }
        })
      },
      changeType(url,e,index){
        this.swiper.slideTo(index, 1000, false)
        this.lightIndex = index
      },
      findResponsiblity(){
        var _this = this
        _this.$fetch('/data/article/article',{id : 13}).then((response) => {
          _this.planInfo  = response.status == 1 ? response.data.content : ''
        }).catch((err) => {
        })
      },findHonor(){
        let _this = this;
        _this.$fetch('/data/honor/honorlist').then((response) => {
          if(response && response.data) {
            var myDate = new Date();
            _this.year = myDate.getFullYear()
            response.data.forEach((item) => {
              if (item.year == myDate.getFullYear()) {
                item.checked = true
              } else {
                item.checked = false
              }
            })
            _this.honorList = response.data
            this.findResponsiblity();
          }
        }).catch((err) => {
        })
      }
    },
    created() {
      this.lightIndex = 0;
      setTimeout(()=>{
        this.findHonor();
      },1000)

    },
    updated() {
      if (this.abouticonList[1].info != '') {
        this.swiper.init();
      }
    },
    computed:{
      swiperOptions(){
        let $this = this;
        return {
          loop : false,
          centeredSlides: true,
          slidesPerView: "auto",
          initialSlide: 0,
          on: { slideChangeTransitionEnd: function(){
              $this.lightIndex = this.activeIndex;
            }
          }
        }
      },
      swiper() {
        return this.$refs.mySwiper.swiper;
      }
    }
  }
</script>

<style>
  .tac_left {
    position: fixed;
    top:0;
  }
  .tac-right {
    margin-left:22.5%;
  }
  #duty .content-main {
    height:100%;
    box-sizing: border-box;
    padding-top:2.5rem;
    padding-bottom:1rem;
  }
  #duty .duty-child-view {
    width: 100%;
    height: 100%;
    transition: all .5s cubic-bezier(.55,0,.1,1);
    overflow-y: auto;
    overflow-x: hidden;
  }
  #duty .slide-left-enter, .slide-right-leave-active {
    opacity: 0;
    -webkit-transform: translate(30px, 0);
    transform: translate(30px, 0);
  }
  #duty .slide-left-leave-active, .slide-right-enter {
    opacity: 0;
    -webkit-transform: translate(-30px, 0);
    transform: translate(-30px, 0);
  }
  #duty #contact {
    bottom:1.1rem;
  }
  #duty .swiper-container {
    width: 100%;
    height: 100%;
  }
  #duty .content-main-info {
    min-height: calc(100% + 1px);
  }

  #duty .tac {
    display:flex;
    align-items: center;
  }
  #duty .el-menu-item.is-active {
    color:#fff;
  }
  #duty .el-menu {
    border-right:none;
    background-color:#6dbdb0;
  }
  #duty .el-menu-item {
    height:0.5rem;
    line-height:0.55rem;
    padding-left:0;
    border-radius:0 0.5rem 0.5rem 0;
    text-align: right;
    padding-right:0.15rem;
    padding-left:0 !important;
    margin-bottom:0.35rem;
    color:#fff;
    font-size:0.24rem;
    font-weight: bolder;
    font-family: NexaDemo-Light;
  }
  #duty .el-menu-item:after {
    content : '';
    width:0.15rem;
    height:0.15rem;
    background-color:#fff;
    position:absolute;
    left:0.15rem;
    top:50%;
    transform: translateY(-50%);
    border-radius: 50%;
  }
  #duty .el-menu-item:last-child {
    margin-bottom: 0;
  }
  #duty .el-menu-item.is-active {
    background-color:#71d6c4
  }
  #duty .el-menu-item:focus, .el-menu-item:hover {
    background-color:#71d6c4;
  }
  #duty .honor-box {
    border-radius:10px 0 0 10px;
    /*border-radius:10px;*/
    height:100%;
    margin-left:0.4rem;
    position:relative;
    min-height:8.2rem;
  }
  #honor {
    position: relative;
    left:-0.6rem;
    min-height: calc(100% + 1px);
  }
  #duty .honor-dialog {
    width:0.3rem;
    height:80%;
    margin-top:15%;
    position: absolute;
    left: -0.3rem;
    background-color:rgba(255,255,255,0.5);
    border-radius:5px 0 0 5px;
  }

  #duty .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }

  #duty .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  #duty .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  #duty .honor-type-info {
    position: relative;
    padding-left:0.5rem;
    font-size:0.25rem;
    margin:0rem 0.4rem 0.3rem 0;
    color:#8a8f95;
    text-align: justify;
  }

  #duty .honor-title {
    margin-left:0.1rem;
    margin-bottom:0.3rem;
  }
  #duty .honor-title span:nth-child(1){
    font-size: 0.32rem;
    font-weight: 800;
    position: relative;
    top:-4px;
    letter-spacing: 1px;
  }
  #duty .honor-title span {
    font-size: 0.25rem;
    color:#6dbdb0;
  }
  #duty .honor-title span:nth-child(3) {
    font-family: NexaDemo-Light;
  }
  .honor-box-content {
    padding:0.5rem 0 0.5rem 0.5rem;
    background-color:#fff;
    /*border-radius:10px 0 0 10px;*/
    border-radius: 5px;
    min-height:7.2rem;
  }
  #duty .honor-type-info:before {
    content : '';
    background-image:url('~@/assets/common/page4_20.png');
    background-position: center center;
    background-size:cover;
    width:0.25rem;
    height:0.3rem;
    display: inline-block;
    position: absolute;
    left:0;
    top:1px;
  }
  #duty .honor-type-box {
    display: flex;
    flex-direction: column;
  }
  #duty .tac-animate {
    -webkit-animation-name: fadeIn; /*动画名称*/
    -webkit-animation-duration: 0.8s; /*动画持续时间*/
    -webkit-animation-iteration-count: 1; /*动画次数*/
    -webkit-animation-delay: 0s; /*延迟时间*/
  }
  @-webkit-keyframes fadeIn {
    0% {
      opacity: 0; /*初始状态 透明度为0*/
    }
    25% {
      opacity: 0.25; /*中间状态 透明度为0*/
    }
    50% {
      opacity: 0.5; /*中间状态 透明度为0*/
    }
    100% {
      opacity: 1; /*结尾状态 透明度为1*/
    }
  }
  #duty .content-main-info {
    height:100%;
  }
  #duty .swiper-slide {
    width:100% !important;
    transform: scale(1);
  }
  #duty .content-main-info {
    width: 85%;
    margin: 0 auto;
  }
  #duty strong span {
    font-size: 0.26rem !important;
  }
  #duty strong span {
    letter-spacing: 0;
  }
  .honor-type-box:nth-child(1) .honor-type-info:last-child {
    margin-bottom:0 !important;
  }
  .honor-top {
    margin-top:0.5rem;
  }
  #duty .honor-type {
    letter-spacing: 1px;
  }
</style>
