<template>
  <div id="development" v-cloak>
    <div class="content-main-info">
      <div class="info-detail-box">
        <div class="info-detail" v-html="Content" v-if="boxshow" v-cloak>

        </div>
        <!--<div class="info-box-left"></div>-->
        <!--<div class="info-box-right"></div>-->
      </div>
    </div>
    <ContactReturn></ContactReturn>
  </div>
</template>

<script>
  export default {
    name: "development",
    data(){
      return {
        boxshow : false,
        Content : '',
        show :false
      }
    },
    components: {
      ContactReturn : () => import('components/ContactReturn.vue')
    },
    methods : {

    },
    mounted() {

    },
    created() {
      var _this = this
      _this.$fetch('/data/article/article',{id : 10}).then((response) => {
        _this.Content = response.status == 1 ? response.data.content : '';
        _this.$nextTick(()=>{
          _this.boxshow = true;
        })
      }).catch((err) => {
      })
    }
  }
</script>

<style>

  #development p:nth-child(2) span strong{
    font-size: 0.28rem ;
    font-weight: 600;
    letter-spacing: 2px;
  }
  #development p:nth-child(3) {
    margin:0.2rem 0 0;
  }
  #development p:nth-child(3) span {
    font-size:0.3rem !important;
    letter-spacing: 2px;
    font-weight: 600;
  }
  #development .info-detail-box {
    padding: 0.5rem 0.5rem 1.5rem !important;
  }
</style>
