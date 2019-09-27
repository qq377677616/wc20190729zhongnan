<template>
  <div id="footer-wrapper" class="footer-wrapper-box">
      <el-row :gutter="24" class="footer-wrapper" >
        <el-col class="footer-row"  :span="5" v-for="(iconItem,iconIndex) in iconlist" :key="iconItem.id" @click.native="changeIndex(iconIndex,iconItem.name)">

          <div :class="{'bg-purple':true, 'size-12':true,'footer-active':iconIndex == selectIndex}">
            <el-image class="img-bottom" v-show="iconIndex == selectIndex" :src="iconItem.selectImg" v-cloak></el-image>
            <el-image class="footer-light" :src="iconItem.img" v-show="iconIndex != selectIndex" v-cloak></el-image>
            <div class="footer-title"><span class="size-small size-footer" v-text="iconItem.title" v-cloak></span></div>
          </div>

        </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: "footer-wrapper",
    data(){
      return {
        iconlist :[{
          id:0,
          img :  require('../assets/common/v-1.png'),
          url : '/about',
          name : 'about',
          title : '关于中南',
          selectImg : require('../assets/common/manu1_15.png')
        },{
          id:1,
          img :  require('../assets/common/v-2.png'),
          url : '/innovation',
          name : 'innovation',
          title : '创新产品',
          selectImg :require('../assets/common/manu1_16.png')
        },{
          id:2,
          img :  require('../assets/common/v-3.png'),
          url : '/strength',
          name : 'strength',
          title : '综合实力',
          selectImg : require('../assets/common/manu1_17.png')
        },{
          id:3,
          img :  require('../assets/common/v-4.png'),
          url : '/duty',
          name : 'duty',
          title : '荣誉责任',
          selectImg : require('../assets/common/manu1_18.png')
        },{
          id:4,
          img :  require('../assets/common/v-5.png'),
          url : '/vision',
          name : 'vision',
          title : '愿景规划',
          selectImg : require('../assets/common/manu1_19.png')
        }
        ],
        selectIndex : 0
      }
    },
    created() {
      this.selectIndex = localStorage.getItem('selectIndex')
    },
    methods : {
      changeIndex(id,name){
        localStorage.setItem('selectIndex',id)
        this.selectIndex = localStorage.getItem('selectIndex')
        this.$router.replace({name:name})

      }
    }
  }
</script>

<style scoped>
  .footer-wrapper-box {
    display: flex;
    flex-direction: row;
    justify-content: center;
    height:1rem;
    line-height: 0.5rem;
    text-align: center;
    font-size:0.4rem;
    margin-left:0 !important;
    margin-right:0 !important;
    position: fixed;
    bottom: 0;
    width: 100%;
    background-color: #fff;
    box-shadow: 0.5rem 1rem 1.8rem 0 #000;
    z-index:99999;
  }
  [v-cloak]{
    display: none
  }
  .footer-light {
    width:45%;
    height:45%;
    display: flex;
    align-items: center;
    position: relative;
    top:0.05rem;
  }
  .size-footer {
    position:relative;
    top:0.1rem;
    font-size: 0.24rem;
    color:#888f97;
  }
  .footer-active .size-small  {
    color:#6dbdb0;
  }
</style>
