<template>
  <div class="product-box-online" v-if="data">
    <Backbar title="提交订单"></Backbar>
    <div class="top-space"></div>
    <div class="product-address">
      <div class="product-address-item desc">
        <div class="product-desc">{{data.title}}</div>
      </div>

      <div class="product-address-item address">
        <div class="name">
          出发地点
        </div>
        <div class="list">
          <div class="list-item" @click="addDressSel(index)" v-for="(index,item) in data.origin"
               :class="{'selected':index==getAddDressSel}">{{index}}
          </div>
        </div>
      </div>
      <div class="product-address-item data">
        <div class="name">
          出发日期
        </div>
        <div class="list">
          <div class="list-item noselect selected">
            <div class="text1" v-if="data.currentDay">
              {{data.currentDay.split('-')[1]+'-'+data.currentDay.split('-')[2]}}
            </div>
            <div class="text2" v-if="data.price">￥{{data.price.adult_price}}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="product-address">
      <div class="product-address-item person" >
        <div class="name">
          购&nbsp;&nbsp;&nbsp;买&nbsp;&nbsp;&nbsp;人:
        </div>
        <div class="phone">
          <el-input v-model="buyer_name" placeholder="购买人姓名"></el-input>
        </div>
      </div>
      <div class="product-address-item person" >
        <div class="name">
          购买人电话:
        </div>
        <div class="phone">
          <el-input v-model="buyer_phone" placeholder="购买人电话"></el-input>
        </div>
      </div>
    </div>
    <div class="product-address">
      <div class="product-address-item add">

        <div class="product-add" @click="dialogVisible  = true">
          <div class="icon"></div>
          <div class="text">添加/修改游客</div>
        </div>
      </div>
      <div class="product-address-item person" v-for="item in getContactUser.tusers" v-if="item.check">
        <div class="name" style="width:20%;">
          {{item.name}}
        </div>
        <div class="phone">
          {{item.phone}}
        </div>
        <div class="iconWrap" @click="removeContactSel(item.tuid)">
          <div class="delete"></div>
        </div>
      </div>
    </div>
    <div class="product-address" v-if="parseInt(data.policy)!==0">
      <div class="product-address-item">
        <div class="name">
          出行保险
        </div>
      </div>
      <div class="product-address-item bao">
        <div class="product-bao">
          <span>保</span>
        </div>
        <div class="product-bao2">
          ￥{{data.policy}}/人x1份
        </div>
        <div class="product-bao-desc">
          （意外事故10万，社保内医疗1万）
        </div>
        <div class="product-bao-checkBox selected">
          <el-input-number v-model="num1" @change="handleChange" :min="0" :max="getMaxNum"
                           label="描述文字"></el-input-number>
        </div>
      </div>
    </div>
    <!-- 撑开Fixednav挡住的位置 -->
    <div class="space"></div>
    <!-- 固定导航栏 -->
    <FixedButton :btnText="btnText" calcMoney="true" :allmoney="allmoney" @orderSubmit="orderSubmit"></FixedButton>
    <Fixedkefu></Fixedkefu>


    <!--:before-close="handleClose"-->
    <el-dialog
      title="选择出游同伴"
      :visible.sync="dialogVisible"
      width="90%"
    >
      <div class="associalSel">
        <div class="list-associates">
          <div class="some_bar" v-for="item in getContactUser.tusers">
            <span class="v-md">{{item.name}}</span>
            <span class="v-mc">{{item.phone}}</span>
            <el-checkbox v-model="item.check"></el-checkbox>
          </div>
          <!--<div class="some_bar">
              <span class="v-md">黎明</span>
              <span class="v-mc">18533264595</span>
              <el-checkbox ></el-checkbox>
              &lt;!&ndash;<span class="v-all">查看全部订单></span>&ndash;&gt;
          </div>
          <div class="some_bar">
              <span class="v-md">黎明2</span>
              <span class="v-mc">18533264595</span>
              <el-checkbox></el-checkbox>
              &lt;!&ndash;<span class="v-all">查看全部订单></span>&ndash;&gt;
          </div>-->
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
        <router-link to="/associates">
      <span class="toAssociatesButton">常用联系人</span>
    </router-link>
    <el-button @click="dialogVisible = false">取 消</el-button>

    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
  </span>
    </el-dialog>
  </div>
</template>

<script>
  import Fixedkefu from './small_components/Fixed_kefu';
  import FixedButton from './small_components/Fixed_button';
  import Backbar from './small_components/Back_bar';
  import {mapGetters, mapActions} from 'vuex'
  import {submitShopBuy} from '../axioser/request'
  var getAge=function (identityCard) {
    var len = (identityCard + "").length;
    if (len == 0) {
      return 0;
    } else {
      if ((len != 15) && (len != 18))//身份证号码只能为15位或18位其它不合法
      {
        return 0;
      }
    }
    var strBirthday = "";
    if (len == 18)//处理18位的身份证号码从号码中得到生日和性别代码
    {
      strBirthday = identityCard.substr(6, 4) + "/" + identityCard.substr(10, 2) + "/" + identityCard.substr(12, 2);
    }
    if (len == 15) {
      strBirthday = "19" + identityCard.substr(6, 2) + "/" + identityCard.substr(8, 2) + "/" + identityCard.substr(10, 2);
    }
    //时间字符串里，必须是“/”
    var birthDate = new Date(strBirthday);
    var nowDateTime = new Date();
    var age = nowDateTime.getFullYear() - birthDate.getFullYear();
    //再考虑月、天的因素;.getMonth()获取的是从0开始的，这里进行比较，不需要加1
    if (nowDateTime.getMonth() < birthDate.getMonth() || (nowDateTime.getMonth() == birthDate.getMonth() && nowDateTime.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }
  export default {
    name: 'product',
    data() {
      return {
        btnText: '提交订单',
        associalShow: false,
        num1: 0,
        dialogVisible: false,
       /* data: '',*/
        addSel: '',
        maxNum: 0,
        checked1: '',
        buyer_phone: '',
        buyer_name: '',
        singlePrice: 10
      };
    },
    created: function () {
      var data = this.$store.getters.getCurrentCurrentProductInfo;
      var id = this.$route.params.id;
      if(!data.child_age) data=JSON.parse(window.localStorage.getItem('currentProductInfo'))
     this.data = data
    },
    mounted() {
      this.getContactUserEvt();
    },
    computed: {
     /* ...mapGetters({
        data: 'getCurrentCurrentProductInfo'
      }),*/

      getMaxNum() {
        var maxnum=0
        if (!this.getContactUser.tusers) return
        for (var i = 0; i < this.getContactUser.tusers.length; i++) {
          var item = this.getContactUser.tusers[i];
          // debugger
          if (item.check) {
            maxnum++;
          }
        }
        this.maxNum=maxnum ;
        this.num1 = maxnum
        return maxnum
      },

      getAddDressSel() {
        console.log(this.addSel);
        return this.addSel;
      },
      ...mapGetters([
        'getContactUser',
      ]),
      allmoney(){

        if(!this.getContactUser.tusers) return 0;
        var policyPrice=this.num1*parseFloat(this.data.policy);
        var allmoney=policyPrice;
        var childAge=this.data.child_age;
        var adult_price=this.data.price.adult_price;
        var child_price=this.data.price.child_price;
        for (var i = 0; i < this.getContactUser.tusers.length; i++) {

          var item = this.getContactUser.tusers[i];
          if(!item.check) continue
          var idcard=item.idcard;
          var age=getAge(idcard);
          if(age<=childAge){
            allmoney+=parseFloat(child_price)
          }else{
            allmoney+=parseFloat(adult_price)
          }
        }
        console.log(allmoney)
        return allmoney;

      }

    },
    beforeDestroy: function () {

    },
    methods: {
      ...mapActions(['getContactUserEvt']),
      addDressSel(val) {
        console.log(val)
        this.addSel = val;
      },
      orderSubmit() {
        debugger
        if (!this.addSel ) {
          this.$message({
            type: 'info',
            message: '请选择地址'
          });
          return
        }
        var tusers = []
        for (var i = 0; i < this.getContactUser.tusers.length; i++) {
          var item = this.getContactUser.tusers[i];
          // debugger
          if (item.check) {
            tusers.push(item.tuid)
          }

        }
        if (tusers.length == 0) {
          this.$message({
            type: 'info',
            message: '请选择出行人员'
          });
          return
        }
        if (this.buyer_name=='') {
          this.$message({
            type: 'info',
            message: '请输入购买人'
          });
          return
        }
        if (this.buyer_phone=='' ) {
          this.$message({
            type: 'info',
            message: '请输入购买人电话'
          });
          return
        }

        var price_id = this.data.dayDate.id;
        if (!price_id) {
          this.$message({
            type: 'info',
            message: `没有${this.data.currentDay}的价格信息！`
          });
          return
        }

        var params = {
          goods_id: this.data.id,
          addr: this.addSel,
          tusers: tusers,
          policys: this.num1,
          price_id: price_id,
          buyer_phone: this.buyer_phone,
          buyer_name:this.buyer_name,
        }
        submitShopBuy(params)
          .then(({data}) => {
            console.log(data,'dd')
            if (data.code === 1) {
              window.location.href=data.url
              /*this.$message({
                type: 'success',
                message: '订单提交成功'
              });*/
            } else {
              this.$message({
                type: 'info',
                message: data.msg || '订单提交失败'
              });
            }
          })

      },
      handleChange(value) {
        console.log(value,'不不不')
      },
      removeContactSel(id) {
        for (var i = 0; i < this.getContactUser.tusers.length; i++) {
          var item = this.getContactUser.tusers[i];
          // debugger
          if (item.tuid == id) {
            item.check = false;
            break;
          }
        }
      },
    },
    components: {
      FixedButton,
      Fixedkefu,
      Backbar,
    }
  };
</script>

<style lang="less">
  .product-address{
    img{
      width: 100% !important;
      display: inline-block;
    }
  }

  .product-box-online {
    .el-message.el-message--info{
      font-size: 0.42rem;
    }
    .toAssociatesButton{
      color: #696969;
      display: inline-block;
      font-size: 0.32rem;
      padding: 0.2rem 0.3rem;
      border-radius: 4px;
      line-height: 1;
      box-sizing: border-box;
      border: 1px solid #dcdfe6;
    }
    width: 100%;
    .phone{
      display: flex;
      .el-input{
        height: 0.6rem;
       line-height: 0.6rem;
      }
      .el-input__inner{
        height: 100%;
        font-size: 0.30rem;
      }
    }
    .el-dialog__headerbtn {
      width: 0.4rem;
      height: 0.4rem;
      font-size: 0.38rem;
    }
    .el-dialog__wrapper {
      .el-dialog {
        border-radius: 5px;
      }
      .el-dialog__body {
        padding: 0 0.3rem;
      }
      div.some_bar {
        font-size: .32rem;
        padding: 0;
        display: flex;
        line-height: 0.8rem;
        .el-checkbox {
          margin-right: 0.3rem;
          margin-left: auto;
        }
      }

    }
    .el-dialog__header {
      height: 1.2rem;
      line-height: 1.2rem;
      font-size: 0.28rem;
      padding: 0 10px;
      padding: 0 0.4rem;
      .el-dialog__title {
        font-size: 0.32rem;
        color: #000;
      }
    }
    .el-checkbox {
      font-size: 0.32rem;
      .el-checkbox__inner {
        width: 0.38rem;
        height: 0.38rem;
        border: 1px solid #ccc;
      }
      .el-checkbox__inner::after {
        width: 0.09rem;
        height: 0.3rem;
        top: -0.05rem;
        border: 0.05rem solid #fff;
        border-left: 0;
        border-top: 0;
      }
    }
    .el-button {
      font-size: 0.32rem;
      padding: 0.2rem 0.3rem;
    }
    .product-address {
      padding: 0 0.3rem;
      background: #fff;
      font-size: 0.32rem;
      color: #696969;
      margin-bottom: 8px;
      .name {
        color: #000;
        padding: 0.25rem 0;

      }
      .phone {
        color: #1c1a16;
        margin-right: 0.3rem;
      }
      .product-desc {
        color: #000;
        font-size: 0.40rem;
        font-weight: bold;
      }
      .product-add {
        color: #000;
        font-weight: bold;
        text-align: center;
        padding-top: 0.3rem;
        padding-bottom: 0.1rem;
        display: flex;
        justify-content: center;
        align-items: center;
        .icon {
          width: 0.5rem;
          height: 0.5rem;
          display: inline-block;
          background-image: url("../images/icon/add.png");
          background-size: 100% auto;
          margin-right: 0.1rem;
          cursor: pointer;
          vertical-align: center;

        }
      }

      .product-address-item {
        display: flex;

        /*  flex-direction: column;*/
        &.address {
          display: flex;
          flex-direction: row;
          align-items: center;
          .name {
            padding-right: 0.25rem;
            position: relative;
            top: 0.05rem;
          }
          .list {
            display: flex;
            .list-item {
              padding: 0.1rem 0.20rem 0 0.2rem;
            }
          }
          &:not(.noselect) .list-item .selected::after, &:not(.noselect) .list-item:hover:after {
            content: '';
            border: 1px solid #00a0e9;
            width: 100%;
            height: 100%;
            position: absolute;
            left: 0;
            top: 0;
            height: 100%;
            cursor: pointer;
          }
          &:not(.noselect) .list-item .selected::before, &:not(.noselect) .list-item:hover:before {
            content: '';
            width: 8px;
            height: 6px;
            position: absolute;
            right: -1px;
            bottom: -1px;
            background-size: 100% 100%;
            background-repeat: no-repeat;
            background-image: url("../images/icon/selected.png");
          }
        }
        &.add {
          text-align: center;
          justify-content: center;
        }
        &.bao {
          flex-direction: row;
          align-items: center;
          height: 0.9rem;

          .product-bao {
            background: #03a4ea;
            padding: 0.02rem 0.07rem 0.02rem 0.05rem;
            text-align: center;
            color: #fff;
          }
          .product-bao2 {
            font-size: 0.26rem;
            color: #000;
            margin-left: 0.2rem;
          }
          .product-bao-desc {
            font-size: 0.24rem;
          }
          .product-bao-checkBox {
            margin-left: auto;
            margin-right: 0.2rem;
            /*  width: 0.25rem;
              height: 0.25rem;
             border-radius: 50%;
              border: 1px solid #7f7f7f;
              cursor: pointer;
              &.selected{
                background: #03a4ea;
                border: none;
              }*/
            .el-input-number {
              width: 1.8rem;
              line-height: 0.6rem;
              font-size: 0.26rem;
              .el-input {
                height: 100%;
              }
              .el-input__inner {
                height: 100%;
                line-height: 100%;
                padding: 0;
                border-radius: 0;
                display: inline-block;
                outline: none;
                line-height: 0.6rem;
                height: 0.62rem;
                display: inline-block;
                border: 1px solid #ccc;
                border-left: none;
                border-right: none;
                font-size: 0.3rem;
              }
              .el-input-number__decrease, .el-input-number__increase {
                width: 0.4rem;
                border-radius: 0;
                font-size: 0.3rem;
                border: 1px solid #ccc;
                box-sizing: border-box;
                /* height: calc(100% - 2px);*/
                border-top: 0;
              }
              .el-input-number__increase {
                right: 0;
              }
              .el-input-number__decrease {
                left: 0;
              }

            }
          }

        }
        &.person {
          flex-direction: row;
          align-items: center;
          border-bottom: 1px solid #dcdcdc;
          &:last-child {
            border-bottom: none;
          }
          .iconWrap {
            margin-left: auto;
            margin-right: 0.2rem;
          }
          .phone {
            margin-left: 0.6rem;
          }
        }
        .checkBox {
          width: 0.45rem;
          height: 0.45rem;
          display: inline-block;
          background-image: url("../images/icon/checkbox.png");
          background-size: 100% auto;
          cursor: pointer;
          position: relative;
          top: 1px;
          &.selected {
            background-image: url("../images/icon/checkbox-select.png");
          }
        }
        .delete {
          width: 0.55rem;
          height: 0.55rem;
          display: inline-block;
          background-image: url("../images/icon/delete.png");
          background-size: 100% auto;
          cursor: pointer;
        }
        &.desc {
          line-height: 0.6rem;
          padding: 0.2rem 0;
        }
        &:first-child {
          border-bottom: 1px solid #dcdcdc;
        }
        &.data {
          padding-bottom: 0.5rem;
          .name {
            margin-right: 0.25rem;

          }
        }

        .list {
          display: flex;

          .list-item {
            padding: 0.1rem 0.2rem 0 0.2rem;
            position: relative;
            display: flex;
            flex-direction: column;
            text-align: center;
            .text2 {
              color: #ff4200;
            }
            &.selected::after {
              content: '';
              border: 1px solid #00a0e9;
              width: 100%;
              height: 100%;
              position: absolute;
              left: 0;
              top: 0;
              height: 100%;
            }
            //,&:hover:before
            &.selected::before {
              content: '';
              width: 0.35rem;
              height: 0.35rem;
              position: absolute;
              right: -2px;
              bottom: -2px;
              background-size: 100% 100%;
              background-repeat: no-repeat;
              background-image: url("../images/icon/selected.png");
            }
          }
        }
      }
    }

    .back-icon {
      width: 0.5rem;
      height: 0.5rem;
      background: red;
      display: block;
    }
    .product-price {
      height: 1.2rem;
      line-height: 1.2rem;
      overflow: hidden;
      font-size: 0.3rem;
      display: flex;
      justify-content: flex-end;
      .product-price-item {
        padding-right: 0.3rem;
        .text2 {
          font-size: 0.2rem;
          color: #ff4200;
        }
        .text3 {
          color: #ff4200;
          font-size: 0.38rem;
          font-weight: bold;
        }
      }

    }

    .product-banner-wrap {
      position: relative;
      /*height: 5.48rem;*/
      position: relative;
    }
    .product-back {
      position: absolute;
      left: 0.6rem;
      top: 0.6rem;
      width: 0.6rem;
      height: 0.6rem;
    }
    .product-banner-bottom {
      height: 0.83rem;
      line-height: 0.83rem;
      width: 100%;
      background: rgba(0, 0, 0, 0.5);
      position: absolute;
      left: 0;
      bottom: 0;
      color: #fff;
      padding: 0 0.3rem;
      font-size: 0.34rem;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .product-banner {
      height: 100%;
      width: auto;
      font-size: 0;
      img {
        width: 100%;
        height: auto;
      }
    }
  }

</style>
