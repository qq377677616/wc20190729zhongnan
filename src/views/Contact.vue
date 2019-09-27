<template>
  <div id="contact-input" class="contact-input">
    <div class="contact-wrapper">
      <div class="contact-name">在线留言</div>
      <div class="contact-box">
        <div class="info">
          <el-input
            placeholder="姓名"
            v-model="name"
            @focus="showFooter"
            @blur="backPageTop"
            clearable>
          </el-input>
          <el-input
            placeholder="邮箱"
            v-model="email"
            @focus="showFooter"
            @blur="backPageTop"
            clearable>
          </el-input>
        </div>
        <div class="phone">
          <el-input
                  type="tel"
            placeholder="手机"
            @focus="showFooter"
            @blur="backPageTop"
            v-model="mobile"
            maxlength="11"
            clearable>
          </el-input>
        </div>
        <div class="saying">
          <el-input
            type="textarea"
            :rows="6"
            placeholder="留言"
            @focus="showFooter"
            @blur="backPageTop"
            v-model="content">
          </el-input>
        </div>
        <div class="submit">
          <el-button type="primary" @click.native="submit">确定</el-button>
        </div>
        <div class="dialog-modal-box" v-show="infosuccess">
          <div class="dialog-modal">
            <div class="bg-success"></div>
            <div class="bg-close" @click="changeDialogshow"></div>
          </div>
        </div>
      </div>
      <div class="contact" id="contact">
        <el-row :gutter="24" class="contact-row mg-lr-0 pd-lr-0">
          <el-col class="pd-lr-0" :span="24" @click.native="backtoRouter('/')"><div class="grid-content bg-purple size-12 font-z-n" ><div class="contact-row-box"><el-image class="contact-row-img" :src="toMainIcon"></el-image></div>返回首页</div></el-col>
        </el-row>
      </div>
    </div>
    <div class="bg-dialog" v-show="dialogshow"></div>

  </div>
</template>

<script>
  import 'common/resize'
  export default {
    name: "contact",
    data(){
      return {
          email:'',
          mobile : '',
          name : '',
          content : '',
          infosuccess : false,
          dialogTableVisible : false,
          dialogshow : false,
          toMainIcon : require('../assets/common/page1_11.png')
      }
    },
    components: {

    },
    methods : {
      Toast(msg,duration){
    duration=isNaN(duration)?3000:duration;
    var m = document.createElement('div');
    m.innerHTML = msg;
    m.style.cssText="max-width:60%;min-width: 150px;padding:0 14px;height: 40px;color: rgb(255, 255, 255);line-height: 40px;text-align: center;border-radius: 4px;position: fixed;top: 50%;left: 50%;transform: translate(-50%, -50%);z-index: 999999;background: rgba(0, 0, 0,.7);font-size: 16px;";
    document.body.appendChild(m);
    setTimeout(function() {
      var d = 0.5;
      m.style.webkitTransition = '-webkit-transform ' + d + 's ease-in, opacity ' + d + 's ease-in';
      m.style.opacity = '0';
      setTimeout(function() { document.body.removeChild(m) }, d * 1000);
    }, duration);
  },
      showFooter () {
        window.scroll(0,0)
      },
      backtoRouter(url){
        this.$router.replace({path:url})
      },
      backPageTop() {
        window.scroll(0,0)
      },
      changeVisible(){
        this.dialogshow = true;
      },
      changeDialogshow(){
        this.dialogshow = false;
        this.infosuccess = false;
      },
      submit(){
        let _this = this;
        if(_this.name == ''){
          _this.Toast('姓名不能为空!',1000);
          return;
        }
        if(_this.email != ''){
          if(!(/^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/.test(_this.email))){
            _this.Toast('邮箱格式有误!',1000);
            return false;
          }
        }
        if(_this.mobile == ''){
          _this.Toast('电话不能为空!',1000);
          return;
        }
        if(!(/^1(3|4|5|6|7|8|9)\d{9}$/.test(_this.mobile))){
          _this.Toast('手机号码有误!',1000);
          return false;
        }
        if(_this.content == ''){
          _this.Toast('留言不能为空!',1000);
          return;
        }
        _this.$post('/data/message/addMessage',{
          name : _this.name,
                    email : _this.email,
                    mobile : _this.mobile,
                    content : _this.content}).then((response) => {

        }).catch(() => {

        })
        let head = 'http://wgw.zoina.cn/zhongnan/public/index.php'
        // let head = 'https://game.flyh5.cn/game/wuhui/h5/zhongnan/public'
        var xhr = new XMLHttpRequest();
        var form = new FormData();
        form.append('name', _this.name);
        form.append('email',_this.email);
        form.append('mobile',_this.mobile);
        form.append('content',_this.content);
        xhr.open('POST', head + '/data/message/addMessage',true);
        xhr.onreadystatechange = function() {
          if(xhr.readyState === 4){
            if(xhr.status == 200){
              //
              // var object = eval("("+xhr.responseText+")");
              // _this.contentList = object.data
              _this.dialogshow = true;
              _this.infosuccess = true;
              _this.content = '';
              _this.name = '';
              _this.email = '';
              _this.mobile = '';
            }
          }
        }
        xhr.send(form);
      }
    },

  }
</script>

<style scoped>
    .contact-input {
      background-image:url('~@/assets/common/info_1.png');
      background-position: center center;
      background-size:100% 100%;
      background-repeat:no-repeat;
      height: 100%;
      box-sizing: border-box;
      padding-bottom:1rem;
      display: flex;
      align-items: center;
      overflow-y: scroll;
      overflow-x: hidden;
      -webkit-overflow-scrolling: touch;
    }
    .contact-wrapper {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      position: relative;
    }
    .pd-top {
      padding-top:7.5rem;
    }
    .contact-name {
      font-size:0.45rem;
      color:#fff;
      width:70%;
      text-align: center;
      padding:0rem 0rem 0.5rem;
      letter-spacing: 1px;
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
      font-family: 'HELVETICA';
    }
  .bg-success {
    background-image:url('~@/assets/common/pop_2.png');
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
    transform: translate(-50%,-75%);
    z-index:9999999;
    margin-top:-0.5em;
  }
    .bg-close {
      background-image:url('~@/assets/common/pop_3.png');
      background-size:cover;
      background-position:center center;
      background-repeat:no-repeat;
      position: absolute;
      width:0.8rem;
      height:0.8rem;
      left:50%;
      transform: translate(-50%);
      bottom:-1.2rem
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
    .contact {
      position:fixed;
      bottom:2rem;
      right:0;
      background-color:#fff;
      border-radius:5px;
      box-shadow: 0px 0px 2.5rem -1.5em;
      display: flex;
      justify-content: space-around;
      flex-direction: column;
      align-items: center;
    }
    .contact-row-box {
      display:flex;
      justify-content: center;
    }
    .contact-row {
      height:100%;
    }
    .contact-row > div {
      height:50%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .contact-row-img {
      width:45%;
      margin-bottom:0.25rem;
    }
    .grid-content {
      padding:0.15rem 0;
      margin:0 0.05rem;
    }
    .contact .grid-content {
      color:#6ebdaf;
      transform: scale(0.90);
      -webkit-transform-origin-x: 50%;
      -webkit-transform: scale(0.90);
    }
    #contact .contact .grid-content {
      border:none;
    }
    .font-z-n {
      font-size: 0.216rem;
    }
</style>
