<template>
  <div id="vision" class="common-box" ref="child" v-cloak>
    <div class="about-top">
      <el-row :gutter="24" class="about-top-main mg-lr-0">
        <el-col :span="8" class="top-el" v-for="(aboutItem,aboutIndex) in abouticonList" :key="aboutItem.id"  @click.native="changeType(aboutItem.urlname,$event,aboutIndex)">
          <div :class="{'grid-content':true, 'bg-purple':true, 'size-12':true,'about-top-active':lightIndex == aboutIndex}">
            <div class="about-top-box">
              <el-image class="about-top-img" :src="aboutItem.iconimg" ></el-image>
            </div>
            <span v-text="aboutItem.name"></span>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="content info-content">
      <swiper :options="swiperOptions" ref="mySwiper" v-if="abouticonList[1].info != null">
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
    name: "vision",
    data(){
      return {
        show :false,
        transitionName : '',
        Content : '',
        abouticonList :[
          {
            id:1,
            iconimg:require('../assets/common/page6_4.png'),
            name : '我们的愿景',
            urlname : 'mission',
            info : null
          },
          {
            id:2,
            iconimg: require('../assets/common/page6_5.png'),
            name : '战略规划',
            urlname : 'planning',
            info : null
          }],
        lightIndex : 0,
        historyIndex : 0
      }
    },
    components: {
      ContactBox:() => import('@/components/ContactBox.vue'),
      swiper,
      swiperSlide
    }
    ,
    updated() {
      if (this.abouticonList.length>1) {
        this.swiper.init();
      }
    },
    methods : {
      changeType(url,e,index){
        if(this.lightIndex != index){
          if(this.historyIndex <= 2 ){
            if(index == 0){
              this.swiper.slideTo(2, 1000, false)
            }else if(index == 1){
              this.swiper.slideTo(1, 1000, false)
            }
          }else {
            if(index == 0){
              this.swiper.slideTo(4, 1000, false)
            }else if(index == 1){
              this.swiper.slideTo(3, 1000, false)
            }
          }
        }
        this.lightIndex = index
      },
      findMission(){
        let _this = this;
        _this.$fetch('/data/article/article',{id : 12}).then((response) => {
          _this.abouticonList[0].info = response.status == 1 ? response.data.content : ''
          this.findResponibility();
        }).catch(() => {

        })
      },
      findResponibility(){
        let _this = this;
        _this.$fetch('/data/article/article',{id : 14}).then((response) => {
          _this.abouticonList[1].info  = response.status == 1 ? response.data.content : ''

        }).catch(() => {

        })
      }
    },
    computed : {
      swiperOptions(){
        let $this = this;
        return {
          loop : true,
          centeredSlides: true,
          slidesPerView: "auto",
          initialSlide: 0,
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
    created() {
      setTimeout(()=>{
        this.findMission();
      },500)
    }
  }
</script>

<style>
  #vision .vision-child-view {
    padding-top:2.5rem;
    padding-bottom:1rem;
    width: 100%;
    height: 100%;
    transition: all .5s cubic-bezier(.55,0,.1,1);
    overflow-y: auto;
    overflow-x: hidden;
  }
  #vision .slide-left-enter, .slide-right-leave-active {
    opacity: 0;
    -webkit-transform: translate(30px, 0);
    transform: translate(30px, 0);
  }
  #vision .slide-left-leave-active, .slide-right-enter {
    opacity: 0;
    -webkit-transform: translate(-30px, 0);
    transform: translate(-30px, 0);
  }
  #vision .about-top {
    display: flex;
    justify-content: center;
  }
  #vision .swiper-container {
    width: 100%;
    height: 100%;
  }

  #vision .swiper-slide {
    width: 80% !important;
    transform-origin:bottom;
    transform: scaleX(0.9) scale(0.95);
    transition: 0.5s;
    overflow: scroll;
  }

  #vision .swiper-slide-active {
    transform: scale(1);
    transition: 0.5s;
  }
  #vision strong > span {
    font-size: 0.26rem !important;
  }
  #vision span strong > span {
    font-size: 0.26rem !important;
  }
  #vision .contact {
    bottom:2rem !important;
  }
</style>
