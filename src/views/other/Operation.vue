<template>
  <div id="operation" v-cloak>
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
    name: "operation",
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
      _this.$fetch('/data/article/article',{id : 17}).then((response) => {
        _this.Content = response.status == 1 ? response.data.content : ''
      }).catch((err) => {
      })
    }
  }
</script>

<style>
  #operation .content-main-info {
    min-height: calc(100% + 1px);
    padding-top:0.5rem;
  }
  #operation p {
    color:#8a8f95 !important;
    display: flex;
    align-items: center;
  }
  #operation span {
    color:#8a8f95 !important;
  }
  #operation p:nth-child(1) {
    color: #6bbbb0 !important;
  }
  #operation p:nth-child(2) {
    font-weight: 600 !important;
    color:#8a8f95 !important;
    letter-spacing: 2px !important;
    font-size: 0.28rem;
  }
  #operation .info-detail-box {
    padding: 0.5rem 0.5rem 1.5rem !important;
  }
  #operation .cate_icon+span {
    float: right;
    max-width: 75%;
    display: block;
    text-overflow: initial;
    white-space: initial;
    font-size: 0.24rem !important;
    font-weight: 500 !important;
  }
  #operation .cate_icon {
    width: 25% !important;
    padding-right:0.2rem;
    top:0;
  }
  #operation .cate_icon+span strong{
    font-weight: 500;
  }

  #operation em {
    letter-spacing: 0.3px !important;
    color:#8a8f95!important;
  }
  /*#operation strong {*/
    /*font-weight: initial;*/
  /*}*/
  .operation-p img {
    width:30% !important;
  }
</style>
