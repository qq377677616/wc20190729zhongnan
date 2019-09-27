<template>
  <div id="about" class="common-box" ref="about-child">
    <div class="about-top">
      <el-row :gutter="24" class="about-top-main mg-lr-0">
        <el-col :span="8" class="top-el " v-for="(aboutItem,aboutIndex) in abouticonList" :key="aboutItem.id"  @click.native="changeType(aboutItem.urlname,$event,aboutIndex)">
          <!--<router-link  :to="{name : aboutItem.urlname}" >-->
          <div :class="{'grid-content':true, 'bg-purple':true, 'size-12':true,'about-top-active' : lightIndex == aboutIndex}">
              <div class="about-top-box">
              <el-image class="about-top-img" :src="aboutItem.iconimg" ></el-image>
            </div>
            <span v-text="aboutItem.name"></span>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="content info-content">
        <swiper :options="swiperOptions" ref="mySwiper" v-if="abouticonList[1].info != null" >
          <swiper-slide v-for="(picitem,index) in abouticonList" :index="index" :key="index">
              <div class="content-main" v-if='index==index'>
                <div class="info-detail-box">
                  <div class="info-detail" v-html="picitem.info"  v-cloak>
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
    name: "about",
    data(){
      return {
        show :false,
        transitionName : '',
        abouticonList :[
          {
            id:1,
            iconimg:require('@/assets/common/page1_13.png'),
            name : '中南置地',
            urlname : 'land',
            info : null
          },
          {
            id:2,
            iconimg:require('@/assets/common/page1_14.png'),
            name : '中南商业',
            urlname : 'bussiness',
            info : null
          },
          {
            id:3,
            iconimg:require('@/assets/common/page1_8.png'),
            name : '中南集团',
            urlname : 'group',
            info : null
          }],
        lightIndex : 1,
        historyIndex : 0,
        historyIndex1 : 0
      }
    },
    computed:{
      swiperOptions(){
        let $this = this;
        return {
          loop : true,
          centeredSlides: true,
          slidesPerView: "auto",
          initialSlide: 1,
          on: { slideChangeTransitionEnd: function(){
              $this.historyIndex = this.activeIndex;
              $this.lightIndex = this.$el.find('.swiper-slide-duplicate-active').attr('index');
            }
          }
        }
      },
      swiper() {
        return this.$refs.mySwiper.swiper;
      }
    },
    updated() {
      if (this.abouticonList[1].info != '') {
        this.swiper.init();
      }
    },
    components: {
      ContactBox:() => import('components/ContactBox.vue'),
      swiper,
      swiperSlide
    },
    methods : {
      changeType(url,e,index){
          if(this.lightIndex != index){
              if(this.historyIndex < 4 ){
                  if(index == 0){
                      this.swiper.slideTo(3, 1000, false)
                  }else if(index == 1){
                      this.swiper.slideTo(4, 1000, false)
                  }else if(index == 2){
                      this.swiper.slideTo(2, 1000, false)
                  }
              }else {
                  if(index == 0){
                      this.swiper.slideTo(6, 1000, false)
                  }else if(index == 1){
                      this.swiper.slideTo(4, 1000, false)
                  }else if(index == 2){
                      this.swiper.slideTo(5, 1000, false)
                  }
              }
              this.lightIndex = index
          }
      },
      findBussiness(){
        let _this = this;
        _this.$fetch('/data/article/article',{id : 1}).then((response) => {
          _this.abouticonList[1].info = response.status == 1 ? response.data.content : ''
        }).catch((err) => {

        })
      },
      findLand(){
        let _this = this;
        _this.$fetch('/data/article/article',{id : 2}).then((response) => {
          _this.abouticonList[0].info = response.status == 1 ? response.data.content : ''
          this.findGroup();
        }).catch((err) => {

        })
      },
      findGroup(){
        let _this = this;
        _this.$fetch('/data/article/article',{id : 3}).then((response) => {
          _this.abouticonList[2].info  = response.status == 1 ? response.data.content : ''
          this.findBussiness();
        }).catch((err) => {

        })
      }
    },
    created() {
      setTimeout(()=>{
        this.findLand();
      },500)

    },mounted() {

    }
  }
</script>

<style>
  #about .about-child-view {
    padding-top: 2.5rem;
    padding-bottom:1rem;
    width: 100%;
    height: 100%;
    transition: all .5s cubic-bezier(.55,0,.1,1);
    overflow-y: auto;
    overflow-x: hidden;
  }
  #about .slide-left-enter, .slide-right-leave-active {
    opacity: 0;
    -webkit-transform: translate(30px, 0);
    transform: translate(30px, 0);
  }
  #about .slide-left-leave-active, .slide-right-enter {
    opacity: 0;
    -webkit-transform: translate(-30px, 0);
    transform: translate(-30px, 0);
  }

  #about .swiper-container {
      width: 100%;
      height: 100%;
  }
  #about .swiper-slide {
      width: 85% !important;
      transform-origin:bottom;
      transform: scaleX(0.9) scaleY(0.95);
      transition: 0.5s;
      overflow: scroll;
      -webkit-overflow-scrolling: touch;
  }

  #about .swiper-slide-active {
      transform: scale(1);
      transition: 0.5s;
  }
  #about strong > span {
      font-size: 0.26rem !important;
  }
  #about .sub-title strong span {
      font-size: 0.26rem !important;
  }
  #about span strong > span {
      font-size: 0.26rem !important;
  }
    .icon-p span strong {
        letter-spacing: 0px;
        font-weight: 500;
        display: inline-block;
        width: 130%;
        position: absolute;
        transform: scale(0.76);
        transform-origin: left;
        margin-left:16px;
    }
    .icon-p {
        transform-origin: left;
        position: relative;
    }
  .icon-p-land {
      transform: scale(0.83);
      transform-origin: left top;
      position: relative;
      left:8px;
  }
    .icon_battle {
        height:0.4rem !important;
        position: relative;
        top:-5px;
    }
    .icon-four-type img {
        width: 70% !important;
    }
    .icon-group {
        position: relative;
        left:-2px;
    }
</style>
