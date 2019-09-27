<template>
  <div id="functions" v-cloak>
    <div class="content-main-info">
      <div class="info-detail-box">
        <div class="info-detail" v-if="boxshow" v-cloak>
          <div class="info-main" v-for="item in contentList" :key="item.id" v-html="item.content"></div>
        </div>
      </div>

    </div>

    <ContactReturnIn></ContactReturnIn>
  </div>
</template>

<script>
  export default {
    name: "functions",
    data(){
      return {
        boxshow : false,
        Content : '',
        show :false,
        contentList : ''
      }
    },
    components: {
      ContactReturnIn : () => import('components/ContactReturnIn.vue')
    },
    methods : {

    },
    mounted() {
      this.$nextTick(() => {
        this.boxshow = true;
      })
    },
    created() {
      var _this = this
      let head = 'http://wgw.zoina.cn/zhongnan/public/index.php'
      // let head = 'https://game.flyh5.cn/game/wuhui/h5/zhongnan/public'
      var xhr = new XMLHttpRequest();
      var form = new FormData();
      form.append('id', '4,18,5,6,7');
      xhr.open('POST', head + '/data/article/article',true);
      xhr.onreadystatechange = function(res) {
        if(xhr.readyState === 4){
          if(xhr.status == 200){
            var object = eval("("+xhr.responseText+")");
            _this.contentList = object.data
          }
        }
      }
      xhr.send(form);
    },
    destroyed() {
      localStorage.setItem('showInnovation',true)
    }
  }
</script>

<style>
  #functions p strong span {
    color:#000;
  }
  #functions .info-main {
    margin-bottom:0.4rem;
  }
   #functions .info-main p:nth-child(1) {
      color:#8a8f95;
      font-weight: 600;
      font-size: 0.32rem;
    }
  #functions .info-main:nth-child(1) p:nth-child(1) {
    color:#6bbbb0;
    font-weight: 500;
    font-size: 0.35rem;
  }
  #functions .info-main:nth-child(1) p:nth-child(1) strong {
    font-weight: 600;
  }
  #functions .info-main:nth-child(3) p:last-child {
    text-align: right;
  }
  #functions .info-main:nth-child(5) p:last-child {
    text-align: right;
  }
  #functions .info-main:nth-child(1) p:nth-child(5) {
    font-weight: 600 !important;
    color:#8a8f95 !important;
    letter-spacing: 2px !important;
    font-size:0.32rem;
    font-family: 'Microsoft JhengHei';
  }
</style>
