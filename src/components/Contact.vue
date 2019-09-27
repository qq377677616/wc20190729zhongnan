<template>
  <div id="contact" class="contact">
    <div class="contact-wrapper">
      <div class="contact-name">在线留言</div>
      <div class="contact-box">
        <div class="info">
          <el-input
            placeholder="姓名"
            v-model="name"
            clearable>
          </el-input>
          <el-input
            placeholder="邮箱"
            v-model="email_address"
            clearable>
          </el-input>
        </div>
        <div class="phone">
          <el-input
            placeholder="手机"
            v-model="phone"
            @keydown.native="limitNumber($event)"
            clearable>
          </el-input>
        </div>
        <div class="saying">
          <el-input
            type="textarea"
            :rows="6"
            placeholder="留言"
            v-model="saying">
          </el-input>
        </div>
        <div class="submit">
          <el-button type="primary" @click.native="submit">确定</el-button>
        </div>
        <div class="dialog-modal-box">
          <div class="dialog-modal" v-show="infosuccess">
            <div class="bg-success"></div>
            <div class="bg-close" @click="changeDialogshow"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-dialog" v-show="dialogshow"></div>
    <!--<Footer></Footer>-->
  </div>
</template>

<script>
  export default {
    name: "contact",
    data(){
      return {
          email_address:'',
          phone : '',
          name : '',
          saying : '',
          infosuccess : false,
          dialogTableVisible : false,
          dialogshow : false
      }
    },
    components: {
    },
    methods : {
      back(){
        this.$router.go(-1);
      },
      limitNumber (e) {
        let num = e.target.value || ''
        let code = e.which || e.keyCode
        let str = (e.key && e.key != 'Unidentified') ? e.key : num.substr(num.length - 1)
        //无论任何情况，皆可执行
        if(code == '8') {
          return true
        }
        //没有满足任何一种情况，中断执行
        if(!(/[\d.]/.test(str) || code == '190')) {
          e.returnValue = false
          return false
        }
        if(num.length > 11 ||
          (num.indexOf('.') >= 0 && code == '190') ||
          ((num.indexOf('.') == num.length - 3) && num.length > 3) ||
          (num.length == 0 && code == '190')) {
          e.returnValue = false
          return false
        }
        return true
      },
      changeVisible(){
        this.dialogshow = true;
        console.log(123)
      },
      changeDialogshow(){
        this.dialogshow = false;
        this.infosuccess = false;
      },
      submit(){
        this.dialogshow = true;
        this.infosuccess = true;
      }
    },

  }
</script>

<style scoped>
    .contact {
      background-image:url('../assets/common/info_1.png');
      background-position: center center;
      background-size:100% 100%;
      background-repeat:no-repeat;
      height: 100%;
    }
    .contact-wrapper {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-top: 1rem;
    }
    .contact-name {
      font-size:0.5rem;
      color:#fff;
      width:70%;
      text-align: center;
      padding:0rem 0.5rem;
    }
    .contact-box {
      width:70%;
      padding:0.5rem 0.5rem;
      background:rgba(255,255,255,0.4);
      margin-top: 0.2rem;
      border-radius:5px;
    }
    .submit {
      text-align: center;
      margin-top: 0.6rem;
    }
    .info,.phone,.saying {
      margin-bottom:0.25rem;
      position: relative;
    }
    .info:after,.phone:after,.saying:after {
      content :'*';
      font-size: 0.5rem;
      position:absolute;
      color:#fff;
      top:0;
      left:-0.3rem;
      line-height: 40px;
    }
    .info .el-input:nth-child(1) {
      margin-bottom: 0.25rem;
    }
    .submit .el-button {
      width:70%;
      background-color:#6dbdB0;
      color:#fff;
      border-color:#6dbdb0;
    }
  .bg-success {
    background-image:url('../assets/common/pop_2.png');
    background-size:cover;
    background-position:center center;
    background-repeat:no-repeat;
    height:100%;
    border-radius:5px;
    }
  .dialog-modal-box {
    width:60%;
    height:30vh;
    position:absolute;
    top:50%;
    left:50%;
    transform: translate(-50%,-50%);
    z-index:9999999;
    margin-top:-0.5em;
  }
    .bg-close {
      background-image:url('../assets/common/pop_3.png');
      background-size:cover;
      background-position:center center;
      background-repeat:no-repeat;
      position: absolute;
      width:0.8rem;
      height:0.8rem;
      left:50%;
      transform: translate(-50%);
      bottom:-1.2rem;
    }
  .el-dialog .el-dialog__header {
    display:none;
  }
  .dialog-modal {
    height:100%;
    width:100%;
    animation:  scaleDraw 0.2s ease-in-out forwards;
  }
    @keyframes scaleDraw {  /*定义关键帧、scaleDrew是需要绑定到选择器的关键帧名称*/
      0%{
        transform: scale(0.1);  /*开始为原始大小*/
      }
      25%{
        transform: scale(0.25); /*放大1.1倍*/
      }
      50%{
        transform: scale(0.5);
      }
      75%{
        transform: scale(0.75);
      }
      100%{
        transform: scale(1);
      }
    }
  .bg-dialog {
    position: absolute;
    top: 0;
    z-index:999999;
    width: 100%;
    height:100%;
    background-color:rgba(0,0,0,0.5);
  }
    @keyframes action_skew{
      0%{transform: skew(-40deg);opacity: 0;}
      50%{ transform: skew(40deg);opacity: 0.2;}
      100%{ transform: skew(0deg);opacity: 1;}
    }

</style>
