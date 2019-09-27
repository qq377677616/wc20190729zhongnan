<template>
  <div id="innovation" :class="{'bg-green':!show}">
      <div class="innovation" v-show="show">
        <div class="innovation-detail">
          <div class="functions" @click="changeType('functions')">
<!--              <div class="rightan">-->
<!--                  <el-image :src="handImg"></el-image>-->
<!--              </div>-->
              <div class="image">
                  <div class="image-shadow"></div>
              </div>
          </div>
          <div class="space" @click="changeType('space')">
<!--              <div class="rightan">-->
<!--                  <el-image :src="handImg"></el-image>-->
<!--              </div>-->
              <div class="image">
                  <div class="image-shadow-box">
                      <div class="image-shadow"></div>
                  </div>
              </div>
          </div>
        </div>
      </div>
    <ContactBox></ContactBox>
  </div>
</template>

<script>
  export default {
    name: "innovation",
    data(){
      return {
        show : true,
        transitionName : '',
          handImg:require('@/assets/common/hand.png')
      }
    },
    watch : {
      '$route' (to, from) {
        //    console.log('现在路由:',to.path.split('/')[1],'来自路由:',from.path.split('/')[1],'现在的动画:',this.transitionName)
        const toDepth = to.path.split('/').length
        const fromDepth = from.path.split('/').length
        this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
      }
    },
    components: {
      ContactBox:() => import('components/ContactBox.vue')
    },
    methods : {
      changeType(url){
        this.$router.replace({name:url})
        // this.show = false
      }
    },
    created() {
      this.show = true;
    }
  }
</script>

<style>
    #innovation {
      height: 100%;
      background: #fff;
    }
    .innovation {
      height: 97%;
      background-image:url('~@/assets/common/page1_2.png');
      background-size:100% 100%;
      background-position:center center;
      background-repeat: no-repeat;
    }
    .innovation-detail {
      width:50%;
      height:55%;
      right:0;
      position:absolute;
      top: 18%;
    }
  .functions {
    width:100%;
    height:50%;
      position: relative;
  }
    .space {
      width:100%;
      height:50%;
        position: relative;
    }
    .innovation-child-view {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      transition: all .5s cubic-bezier(.55,0,.1,1);
    }
    .slide-left-enter, .slide-right-leave-active {
      opacity: 0;
      -webkit-transform: translate(30px, 0);
      transform: translate(30px, 0);
    }
    .slide-left-leave-active, .slide-right-enter {
      opacity: 0;
      -webkit-transform: translate(-30px, 0);
      transform: translate(-30px, 0);
    }
  .bg-green {
    background-color:#6dbdB0 !important;
  }
  #innovation #contact {
    bottom : 1.2rem;
  }
    @-webkit-keyframes rightan
    {
        0%{transform:translateX(0px);opacity: 0.8}
        20%{transform:translateX(10px);opacity: 0.5}
        50%{ transform:translateX(20px);opacity: 0.8}
        75%{ transform:translateX(10px);opacity: 0.5}
        100%{ transform:translateX(0px);opacity: 0.8}
    }
    .rightan
    {
        position:relative;
        top:1rem;
        -webkit-animation: rightan 1.5s infinite linear;
        -webkit-animation-fill-mode: both;
    }

    .image {
        width:1rem;
        height:1rem;
        background-image:url('~@/assets/common/hands.png');
        background-size: cover;
        background-position: center center;
        background-repeat: no-repeat;
        animation: moonimation-5 1s ease infinite alternate;
        position: absolute;
        right:0.1rem;
        top:0.5rem;
    }
    .image-shadow {
        background:transparent;
        width:1px;
        height:1px;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
        box-shadow: 3px 3px 100px 40px #bddbd6;
        position: absolute;
        animation: moonimation-5 1s ease infinite alternate;
    }
    @keyframes moonimation-4 {
        0% {
            opacity: 1;
        }
        100% {
            opacity: 0.5;
        }
    }
    @keyframes moonimation-5 {
        0% {
            opacity: 1;
            transform: scale(1);
        }
        100% {
            opacity: 0.5;
            transform: scale(0.5);
        }
    }
</style>
