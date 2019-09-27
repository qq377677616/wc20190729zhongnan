<template>
  <div id="commercail" v-cloak>
    <div class="content-main-info">
      <div class="info-detail-box">
        <div class="info-detail" v-html="Content" v-if="boxshow" v-cloak>

        </div>
      </div>
      <ContactReturn></ContactReturn>
    </div>
  </div>
</template>

<script>
  export default {
    name: "commercail",
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
      backPageTop() {
        document.body.scrollTop = 0
        document.documentElement.scrollTop = 0
      }
    },
    mounted() {
      this.$nextTick(() => {
        this.boxshow = true;
      })

    },
    created() {
      var _this = this
      _this.$fetch('/data/article/article',{id : 15}).then((response) => {
        _this.Content = response.status == 1 ? response.data.content : ''
      }).catch((err) => {
      })
      _this.backPageTop()
    }
  }
</script>

<style>
  #commercail .content-main-info {
    min-height: calc(100% + 1px);
    padding-top:0.5rem;
  }
  #commercail p:nth-child(2) {
    font-weight: 600 !important;
    color:#8a8f95;
    letter-spacing: 2px;
    font-size: 0.28rem !important;
  }
  .img_title_c {
    max-width: 50%;
  }

  #commercail .cate_icon+span {
    font-size: 0.26rem !important;
  }
  #commercail  p strong > span {
    font-size: 0.3rem !important;
    color:#000;
    letter-spacing: 1px;
  }
  #commercail  p span strong > span {
    font-size: 0.3rem !important;
    color:#000;
    letter-spacing: 1px;
  }
  #commercail p span {
    font-size: 0.26rem !important;
    color:#000;
    font-weight: 600;
  }
</style>
