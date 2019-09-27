<template>
  <div id="resource" v-cloak>
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
    name: "resource",
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
      this.$nextTick(() => {
        this.boxshow = true;
      })

    },
    created() {
      var _this = this
      _this.$fetch('/data/article/article',{id : 16}).then((response) => {
        _this.Content = response.status == 1 ? response.data.content : ''
      }).catch((err) => {
      })
    }
  }
</script>

<style>
  #resource .content-main-info {
    min-height: calc(100% + 1px);
    padding-top:0.5rem;
  }
  #resource p:nth-child(2) {
    font-weight: 600 !important;
    color:#8a8f95;
    letter-spacing: 2px;
    font-size: 0.28rem !important;
  }
  .info-detail-box {
    background-color:#fff;
  }
  #resource .info-detail-box {
    padding: 0.5rem 0.5rem 1.8rem !important;
  }

</style>
