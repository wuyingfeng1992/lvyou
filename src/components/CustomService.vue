<template>
  <div class="customService-box chatting">
    <Backbar title="光之蓝客服"></Backbar>
    <div class="top-space"></div>
    <!--@click.stop.prevent="isShowEmoji=false" ref="chattingContent"-->
    <div class="chatting-content" v-if="getCustomServiceHistory">

      <div class="chatting-content-item " v-for="item in getCustomServiceHistory.msgs"
           :class="{'no-reverse':!item.is_my,'reverse':item.is_my}">
        <div class="chatting-content-avatar" v-if="getUserInfo"
             :style="item.is_my?'background-image:url('+proxyapi+getUserInfo.avatar+')':''">
        </div>
        <div class="chatting-content-text">
          <div class="arrow"></div>
          {{item.msg}}
        </div>
      </div>
    </div>
    <div class="fiexH"></div>
    <div class="chatting-input">
      <textarea ref="textarea" v-model.trim="inputContent" placeholder="请输入咨询内容"></textarea>
      <!-- <div class="emoji">
         <i class="icon-emoji smile"></i>
       </div>
       <div class="emoji">
         <i class="icon-emoji add"></i>
       </div>-->
      <button style="margin-left: 0.2rem;" @click="sendMessage">发送</button>
    </div>
  </div>
</template>
<script>
  import Backbar from './small_components/Back_bar';
  import {mapGetters, mapActions} from 'vuex'
  import {setCustomServiceInfo} from '../axioser/request'
  import {proxyapi} from '../staticData/proxyapi';
var timer;
  export default {
    name: "customService",
    components: {
      Backbar,
    },
    mounted() {
      //this.getCustomServiceInfoEvt();
      this.getCustomServiceHistoryEvt();
      this.getUserInfo();
      var _this=this;
      timer=setInterval(function () {
        _this.getCustomServiceHistoryEvt();
      //  _this.getCustomServiceInfoEvt();
      },1000)
    },
    destroyed(){
      clearInterval(timer);
    },
    computed: {
      ...mapGetters([
        'getCustomServiceHistory',
        'getCustomServiceInfo',
        'getUserInfo',
      ])
    },
    methods: {
      ...mapActions([
        //'getCustomServiceInfoEvt',
        'getCustomServiceHistoryEvt',
        'getCustomServiceInfoEvt',
        'getUserInfoEvt',
      ]),
      sendMessage() {
        if (this.inputContent.trim() !== '') {
          var params={msg:this.inputContent.trim()}
          var _this=this;
            setCustomServiceInfo(params)
            .then(({data}) => {
              console.log(data);
              if (data.code === 1) {
                _this.inputContent='';
                this.getCustomServiceHistoryEvt();
              } else {
                this.$message({
                  type: 'info',
                  message: data.msg || '提交失败'
                });
              }
            })
        }
      }

    },
    data() {
      return {
        proxyapi,
        msgs: localStorage.msgs_group && JSON.parse(localStorage.msgs_group) || [{
          date: '2015-11-09 09:57:08',
          loc: '江西省南昌市',
          from: 'microzz',
          avatarUrl: `https://icdn.microzz.com/20170426_vue_chat/icon-avatar${1}.svg`,
          content: 'test',
          self: false
        }
          // { date: '2015-11-09 09:57:08', loc: '江西省南昌市', from: 'microzz', avatarUrl: `https://icdn.microzz.com/20170426_vue_chat/icon-avatar${this.random(11)}.svg`, content: 'test', self: false}
        ],
        inputContent: '',
        oContent: {},
        oTextarea: {},
        emojis: ['😂', '🙏', '😄', '😏', '😇', '😅', '😌', '😘', '😍', '🤓', '😜', '😎', '😊', '😳', '🙄', '😱', '😒', '😔', '😷', '👿', '🤗', '😩', '😤', '😣', '😰', '😴', '😬', '😭', '👻', '👍', '✌️', '👉', '👀', '🐶', '🐷', '😹', '⚡️', '🔥', '🌈', '🍏', '⚽️', '❤️', '🇨🇳'],
        isShowEmoji: false,
        isRedAI: false,
      }
    }
  }
</script>

<style lang="less">
  .chatting {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    .fiexH{
      height: 1.8rem;
    }
    .chatting-content-item {
      font-size: 0.36rem;
      display: flex;
      height: 100%;
      padding: 0.5rem 0.5rem;
      &.reverse {
        flex-direction: row-reverse;
        .chatting-content-avatar {
          margin-left: 0.5rem;
        }
        .chatting-content-text{
          right: 0.15rem;
        }
        .arrow {
          position: absolute;
          right: -0.6rem;
          top: 50%;
          margin-top: -0.3rem;
          border: 0.3rem solid #eee;
          border-left-color: #fff;
        }
      }
      .chatting-content-text {
        border: 1px solid #eee;
        background: #fff;
        border-radius: 0.3rem;
        padding: 0.3rem;
        position: relative;
      }
      .chatting-content-avatar {
        width: 1.5rem;
        height: 1.5rem;
        display: block;
        margin-right: 0.5rem;
        background-size: 100% auto;
        background-image: url("../images/icon/kefu.jpg");
        background-repeat: no-repeat;
        border-radius: 50%;
        border: 1px solid #ccc;
        flex: none;

      }
      &.no-reverse {
        .arrow {
          position: absolute;
          left: -0.6rem;
          top: 50%;
          margin-top: -0.3rem;
          border: 0.3rem solid #eee;
          border-right-color: #fff;
        }
        .chatting-content-text{
          left: 0.15rem;
        }

      }
    }

    .chatting-input {
      position: relative;
      display: flex;
      min-height: 0.8rem;
      width: 100%;
      position: fixed;
      bottom: 0;
      left: 0;
      padding: 0.3rem 0.3rem;
      background: #fff;
      box-sizing: border-box;
      align-items: center;
      .emoji-display {
        position: absolute;
        width: 100%;
        height: 210px;
        background-color: white;
        top: -210px;
        left: 0;
        overflow-y: auto;
        ul {
          display: flex;
          flex-wrap: wrap;

          li {
            padding: 2px 3px;
            font-size: 2.2rem;
          }
        }
      }
      .emoji {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 0.8rem;
        height: 0.8rem;
        padding: 0 0.05rem;
        /*background-color: rgba(0, 0, 0, .1);*/
        .icon-emoji {
          width: 0.8rem;
          height: 0.8rem;
          background-size: contain;
          background-position: center;
          background-size: 100% auto;
          &.first-child {
            margin-right: 0.2rem;
          }
          &.add {

            background-image: url('../images/icon/ic-add.png');
          }
          &.smile {
            background-image: url('../images/icon/smile.png');
          }

        }
      }

      textarea {
        flex: 1;
        resize: none;
        padding-left: 3px;
        padding-top: 7px;
        padding-bottom: 7px;
        padding-right: 3px;
        min-height: 0.6rem;

        /* height: 100%;*/
        font-size: 0.38rem;
        box-sizing: border-box;
        border-color: #eee;
      }
      button {
        width: 1rem;
        height: 0.8rem;
        background-color: #2196f3;
        color: white;
        font-size: 0.28rem;
        border: 0;
      }
    }
  }
</style>
