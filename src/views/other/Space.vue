<template>
  <div id="space" v-cloak>
    <div class="content-main-info">
      <div class="info-detail-box">
        <div class="info-detail"  v-if="boxshow" v-cloak>
              <div class="info-main" v-for="item in contentList" :key="item.id" v-html="item.content"></div>
        </div>
      </div>

    </div>

    <ContactReturnIn></ContactReturnIn>
  </div>
</template>

<script>
  export default {
    name: "space",
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
      form.append('id', '9,8');
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
  #sapve .child-view {
    width: 100%;
    height: 100%;
    transition: all .5s cubic-bezier(.55,0,.1,1);
    overflow-y: auto;
    overflow-x: hidden;
    -webkit-overflow-scrolling: touch;
  }
  #sapve .content {
    min-height : calc(100% + 1px);
  }

  #space .info-main {
    margin-bottom:0.4rem;
  }
  #space .info-main:nth-child(1) p:nth-child(5) {
    font-weight: 600 !important;
    color:#000 !important;
    letter-spacing: 2px !important;
    font-size:0.35rem;
  }
  #space .info-main:nth-child(2) p:nth-child(1) {
    font-weight: 600 !important;
    color:#000 !important;
    letter-spacing: 1.5px !important;
    font-size:0.35rem;
  }
  #space p strong span {
    color:#000 !important;
  }
</style>
