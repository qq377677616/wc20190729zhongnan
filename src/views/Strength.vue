<template>
  <div id="strength" :class="{'bg-white': !show}">
    <div class="strength-box" :class="{'mg-bt-1':show}">

      <el-row :gutter="24" class="strength-content mg-lr-0 pd-lr-0" v-show="!show">
        <el-col class="card" :span="24" v-for="(imageItem) in imageList" :key="imageItem.id" @click.native="changeType(imageItem.urlname)">
          <el-image :src="imageItem.imageSrc"></el-image>
        </el-col>
      </el-row>

<!--      <transition :name="transitionName" v-show="show">-->
<!--        <router-view :class="{'strength-child-view':true}"></router-view>-->
<!--      </transition>-->

    </div>
    <ContactBox></ContactBox>
  </div>
</template>

<script>
  export default {
    name: "strength",
    data() {
      return {
        show : false,
        showbt : true,
        imageList : [{
          imageSrc : require('@/assets/common/page7_5.png'),
          urlname : 'development'
        },{
          imageSrc : require('@/assets/common/page7_4.png'),
          urlname : 'commercail'
        },{
          imageSrc : require('@//assets/common/page7_3.png'),
          urlname : 'resource'
        },
          {
            imageSrc : require('@/assets/common/page7_2.png'),
            urlname : 'operation'
          }
          ],
        transitionName : ''
      }
    },
    watch : {
      $route(from,to){     //监控路由变换，控制返回按钮的显示
        if(from.name=="strength"){
          this.show=false;
        } else{
          this.show=true;
        }
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
      }
    },
    mounted() {
      this.$nextTick(() => {
        this.show = false
      });
    }
  }
</script>

<style scoped>
    #strength {
      height:100%;
      overflow-y: auto;
      overflow-x: hidden;
      /*-webkit-overflow-scrolling: touch;*/
    }
    .bg-white {
      background: #fff;
    }
    .strength-box {
      display:flex;
      justify-content: center;
      align-items:center;
      padding-top: 0.5rem;
      /*min-height: calc(100% + 1px);*/
    }
    .mg-bt-1 {
      margin-bottom:1rem !important;
    }
    .strength-content {
      display: block;
      width: 90%;
      margin-bottom:1.8rem;
    }
    .card {
      margin-bottom: 0rem;
      position:relative;
    }
    .card:nth-child(2n+2) {
      margin-bottom:0.5rem;
    }
    .card:last-child{
      margin-bottom: 0px;
    }
  .en-title {
    text-transform:Uppercase;
    text-align: center;
    font-family: "Adobe 繁黑體 Std B";
    font-size:0.2rem;
    color:#86c9c0;
    margin-top:0.02rem;
  }
  .descript {
    width:45%;
    position:absolute;
    z-index:999;
    background-color:#fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding:0 0.5rem;
  }
  .descript,.img-card,.title-icon {
    border-radius: 15px;
  }
  .img-card {
    width:90%;
    height:90%;
    position: absolute;
    z-index:90;
  }
  .img-card.card1 {
    right:-25px;
    bottom:-15px;
  }
    .img-card.card2 {
      left:-25px;
      top:0px;
    }
  .radius-15 {
    border-radius:0.16rem;
  }
  .title-icon {
    width:50%;
    height:50%;
    padding:0.4rem 0.4rem;
  }
  .el-image {
    width:100%;
    height:100%;
  }
  .title-icon  {
    width: 0.8rem;
    height:0.8rem;
  }
  .cn-title {
    font-family: "Adobe 繁黑體 Std B";
    font-weight:600;
    font-size:0.4rem;
    color:#86c9c0;
    margin: 0.2rem 0;
    text-align: center;
  }
  .descript.card1 {
    left:0.6rem;
    right:0;
    bottom:-0.6rem;
  }
    .descript.card2 {
      right:0.6rem;
      top:-0.6rem;
    }
    .descript,.img-card,card  {
      box-shadow: 0px 0px 10px #85c9c0;
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
    .strength-child-view  {
      padding-top:0.5rem;
      width: 100%;
      height: 100%;
      transition: all .5s cubic-bezier(.55,0,.1,1);
    }
    #strength #contact {
      bottom : 2.5rem;
    }
</style>
