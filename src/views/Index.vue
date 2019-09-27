<template>
  <div id="index" class="common-bg">
    <div class="index-content">
      <!--<v-touch v-on:swipeleft="onSwipeLeft" v-on:swiperight="onSwipeRight"  tag="div">-->
      <transition :name="transitionName">
         <router-view class="child-view"></router-view>
      </transition>
      <!--</v-touch>-->
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
export default {
  name: "index",
  data(){
    return {
      transitionName : '',
      bgWhite :false,
      bgGreen : false,
    }
  },
  components : {
    Footer:() => import('@/components/Footer.vue')
  },
  watch : {
    '$route' (to, from) {
     //    console.log('现在路由:',to.path.split('/')[1],'来自路由:',from.path.split('/')[1],'现在的动画:',this.transitionName)
       const toDepth = to.path.split('/').length
       const fromDepth = from.path.split('/').length
              if(to.name == 'innovation' || to.name == 'contact'){
                  this.bgWhite = true
                if(to.name == 'functions' || to.name == 'space'){
                  this.bgGreen = true
                  this.bgWhite = false
                }
              }else {
                this.bgWhite = false
              }
      this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
      }
     }
  ,
  methods : {
  }
}
</script>

<style scoped>
  .child-view {
    width: 100%;
    height: 100%;
    transition: all .5s cubic-bezier(.55,0,.1,1);
    overflow-y: auto;
    overflow-x: hidden;
    -webkit-overflow-scrolling: touch;
  }
  .slide-left-enter, .slide-right-leave-active {
    opacity: 0;
    -webkit-transform: translate(30px, 0);
    transform: translate(30px, 0);
    transition: 0.3s;
  }
  .slide-left-leave-active, .slide-right-enter {
    opacity: 0;
    -webkit-transform: translate(-30px, 0);
    transform: translate(-30px, 0);
    transition: 0.3s;
  }
  .index-content{
    position: relative;
  }
  .bg-green {
    background-color:#6dbdbf;
  }
</style>
