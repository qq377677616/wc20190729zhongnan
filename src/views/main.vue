<template>
    <div id="main-index">
      <el-row class="row-top" v-show="showMain">
        <el-col class="img1" :span="24" @click.native="changeShow('index',$event,0)">
          <div class="logo-img logo-img1"></div>
          <div class="info-img">
            <div><span>关于中南</span></div>
            <div>ABOUT US</div>
          </div>
          <div class="grid-content bg-purple-dark">
        </div></el-col>
      </el-row>
      <el-row class="row-center" v-show="showMain">
        <el-col class="img2" :span="12" @click.native="changeShow('index',$event,1)">
              <div class="logo-img logo-img2"></div>
              <div class="info-img">
                <div><span>创新产品</span></div>
                <div>INNOVATIVE PRODUCT</div>
              </div>
        </el-col>
        <el-col class="img3" :span="12" @click.native="changeShow('index',$event,4)">
           <div class="logo-img logo-img3"></div>
          <div class="info-img">
            <div><span>愿景与规划</span></div>
            <div>MISSION <span class="font-and">&</span> PLANNING</div>
          </div>
        </el-col>
      </el-row>
      <el-row class="row-bottom" v-show="showMain">
        <el-col class="img4 row-bottom-left" :span="10" @click.native="changeShow('index',$event,3)">
          <div class="logo-img logo-img4"></div>
          <div class="info-img">
            <div><span>荣誉与责任</span></div>
            <div>HONOR <span class="font-and">&</span><br> RESPONSIBILITY</div>
          </div>
        </el-col>
        <el-col class="row-bottom-right"  :span="14"><div class="grid-content bg-purple-light">
          <div class="img5 strength row-bottom-right-top" @click="changeShow('index',$event,2)">
            <div class="logo-img logo-img5"></div>
            <div class="info-img">
              <div><span>综合实力</span></div>
              <div>COMPREHENSIVE STRENGTH</div>
            </div>
          </div>
          <div class="img6 contact row-bottom-right-bottom" @click="changeShow('contact',$event,0)">
            <div class="logo-img logo-img6"></div>
            <div class="info-img">
              <div><span>联系我们</span></div>
              <div>CONTACT US</div>
            </div>
          </div>
        </div></el-col>
      </el-row>

      <transition :name="transitionName">
        <router-view v-show="!showMain" class="child-view"></router-view>
      </transition>

    </div>
</template>

<script>
    export default {
        name: "main-index",
        data(){
          return {
            showMain : true,
            currentSrc : '',
            transitionName: ''
          }
        },
        watch:{
          $route(now,old){     //监控路由变换，控制返回按钮的显示
            if(now.path=="/"){
              this.showMain=true;
            } else{
              this.showMain=false;
            }
            if(now.path.length < old.path.length){
              this.transitionName = 'slide-left';
            }else{
              this.transitionName = 'slide-right';
            }
          }
        },
        methods : {
          changeShow (linkrouter,e,index){
              localStorage.setItem('selectIndex',index)
              this.currentSrc = linkrouter
              this.showMain = false;
              this.$router.replace({name:this.currentSrc})
          }
        }
    }
</script>

<style scoped>
   #main-index {
     display: flex;
     height:100%;
     flex-direction: column;
   }
   .child-view {
     overflow-y :hidden;
   }
    .el-image {
      display: block;
      background: aquamarine;
    }
    .innovation,.vision {
      display: inline-block;
      padding:0;
    }
    .row-top{
      padding:0 0.2rem;
      /*margin:0.2rem 0;*/
      flex:3;

    }
    .row-top .el-col {
      height:100%;
      background-image:url('../assets/common/about.png');
      border-radius:0.1rem;
      background-position: center center;
      background-size:100% 100%;
      background-repeat: no-repeat;
      position: relative;
    }
    .row-center > .el-col:nth-child(1) {
      background-image:url('../assets/common/innovation.png');
      border-radius:0.1rem;
      background-position: center center;
      background-size:100% 100%;
      background-repeat: no-repeat;
    }
   .row-center > .el-col:nth-child(2) {
     background-image:url('../assets/common/vision.png');
     border-radius:0.1rem;
     background-position: center center;
     background-size:100% 100%;
     background-repeat: no-repeat;
   }
   .row-bottom > .el-col:nth-child(1){
     background-image:url('../assets/common/duty.png');
     border-radius:0.1rem;
     background-position: center center;
     background-size:100% 100%;
     background-repeat: no-repeat;
   }
   .row-bottom  .strength {
     background-image:url('../assets/common/strength.png');
     border-radius:0.1rem;
     background-position: center center;
     background-size:100% 100%;
     background-repeat: no-repeat;
   }
   .row-bottom  .contact{
     background-image:url('../assets/common/contact.png');
     border-radius:0.1rem;
     background-position: center center;
     background-size:100% 100%;
     background-repeat: no-repeat;
   }
   .row-top,.row-center,.row-bottom {
     padding:0 0.2rem;
   }
    .row-center {
      flex:2;

    }
   .el-image  {
     border-radius:0.1rem;
     overflow: hidden;
   }
   .row-bottom {
     flex:4;
     padding:0 0.2rem;
   }
  .row-center {
    display: flex;
    justify-content: space-between;
  }
  .row-bottom {
    display: flex;
    justify-content: space-between;
  }
   .grid-content
  {
    height: 100%;
     display: flex;
     flex-direction: column;
     justify-content: space-between;
  }
   .row-bottom-right .grid-content > div {
       height:50%;
   }
    .duty,.innovation,.vision {
      height: 100%;
    }
   .strength-content .card:nth-child(2n){
    margin-bottom:0.5rem;
  }
  .img1 {
    animation:  Img1 0.5s ease-in-out forwards;
  }
   .img2 {
     animation:  Img2 0.5s ease-in-out forwards;
   }
   .img3 {
     animation:  Img3 0.5s ease-in-out forwards;
   }
   .img4 {
     animation:  Img4 0.5s ease-in-out forwards;
   }
   .img5 {
     animation:  Img5 0.5s ease-in-out forwards;
   }
   .img6 {
     animation:  Img6 0.5s ease-in-out forwards;
   }
   @keyframes Img1{
     0%{transform: translate(0,-40px);opacity: 0.2;}
     50%{ transform: translate(0,-20px);opacity: 0.5;}
     100%{ transform: translate(0,0px);opacity: 1;}
   }
   @keyframes Img2{
     0%{transform: translate(-40px,0);opacity: 0.2;}
     50%{ transform: translate(-20px,0);opacity: 0.5;}
     100%{ transform: translate(0px,0);opacity: 1;}
   }
   @keyframes Img3{
     0%{transform: translate(40px,0);opacity: 0.2;}
     50%{ transform: translate(20px,0);opacity:  0.5;}
     100%{ transform: translate(0px,0);opacity: 1;}
   }
   @keyframes Img4{
     0%{transform: translate(0,40px);opacity: 0.2;}
     50%{ transform: translate(0,20px);opacity: 0.5;}
     100%{ transform: translate(0,0);opacity: 1;}
   }
   @keyframes Img5{
     0%{transform: translate(40px,0);opacity: 0;}
     50%{ transform: translate(20px,0);opacity: 0.5;}
     100%{ transform: translate(0,0);opacity: 1;}
   }
   @keyframes Img6{
     0%{transform: translate(0,40px);opacity: 0;}
     50%{ transform: translate(0,20px);opacity: 0.2;}
     100%{ transform: translate(0,0);opacity: 1;}
   }
  .logo-img {
    position: absolute;
    top:0.3rem;
    left:0.35rem;
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
  }
   .info-img {
     position: absolute;
     bottom:0.5rem;
     left:0.4rem;
     color:#fff;
   }
  #main-index .info-img div:nth-child(1) {
    font-size: 0.32rem;
    font-weight: 600;
    letter-spacing: 1.5px;
    color: #fff;
    margin-bottom:0.1rem;
    text-align: left;
  }
   #main-index .info-img div:nth-child(2) {
     font-size: 0.24rem;
     font-family: NexaDemo-Light;
     color: #fff;
   }
  #main-index .logo-img {
    display: inline-block;
    width:0.5rem;
    height:0.5rem;
  }
  #main-index span {
    color:#fff !important;
  }
  .logo-img1 {
    background-image:url("~@/assets/common/logo-img1.png");
    top:0.6rem;
  }
   .logo-img2 {
     background-image:url("~@/assets/common/logo-img2.png");
   }
   .logo-img3 {
     background-image:url("~@/assets/common/logo-img3.png");
   }
   .logo-img4 {
     background-image:url("~@/assets/common/logo-img4.png");
   }
   .logo-img5 {
     background-image:url("~@/assets/common/logo-img5.png");
   }
   .logo-img6 {
     background-image:url("~@/assets/common/logo-img6.png");
   }
   .font-and {
     font-family: helveticaneueltpro;
     font-weight: 500;
   }

</style>
