<template>
  <div class="associates-box">
    <Backbar :title="getTitle"></Backbar>
    <div class="top-space"></div>
    <!-- label-width="100px"-->
    <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" class="demo-ruleForm" >

      <el-form-item label="姓名" prop="name">
        <div class="v-md" slot="label">姓&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;名 :</div>
        <el-input class="v-right" type="text" v-model="ruleForm2.name" auto-complete="off"></el-input>
      </el-form-item>
      <!--<el-form-item label="性别" prop="sex">
        <div class="v-md" slot="label">姓&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;别 :</div>
        <el-select v-model="ruleForm2.sex" placeholder="请选择" class="v-right">
          <el-option
            v-for="item in ruleForm2.sexOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>-->
      <el-form-item label="身份证号" prop="idcard">
        <div class="v-md" slot="label">身份证号 :</div>
        <el-input class="v-right" type="text" v-model="ruleForm2.idcard" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="护照" prop="passport">
        <div class="v-md" slot="label">护&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;照 :</div>
        <el-input class="v-right" type="text" v-model="ruleForm2.passport" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="手机号码" prop="phone">
        <div class="v-md" slot="label">手机号码 :</div>
        <el-input class="v-right" type="text" v-model="ruleForm2.phone" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item class="submit-content">
        <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
        <el-button @click="resetForm('ruleForm2')">重置</el-button>
      </el-form-item>
    </el-form>
    <Fixedkefu></Fixedkefu>
  </div>
</template>
<script>
  import Backbar from './small_components/Back_bar';
  import Fixedkefu from './small_components/Fixed_kefu';
  import {editContactUser,insertContactUser} from '../axioser/request'

  export default {
    name: "associates",
    components: {
      Backbar,
      Fixedkefu,
    },
    data() {
     /* var validateSex = (rule, value, callback) => {
        debugger
        if (value === '') {
          callback(new Error('请选择性别'));
        } else {
          callback();
        }
      };*/
      var validateName = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入姓名'));
        }else{
          callback();
        }
      };
      var validateIdcard = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入省份证号'));
        }else{
          callback();
        }
      };
      var validatePassport = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入护照号'));
        }else{
          callback();
        }
      };
      var validatePhone = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入手机号码'));
        } else {
          var reg = /^[1][3,4,5,7,8][0-9]{9}$/;
          if (!reg.test(value)) {
            callback(new Error('请输入正确的手机号码'));
          } else {
            callback();
          }
        }
      };
      return {
        userData:'',
        ruleForm2: {
          phone: '',
          name: '',
          idcard: '',
          passport: '',
         /* sex: '',
          sexOptions: [{
            value: 'male',
            label: '男'
          }, {
            value: 'female',
            label: '女'
          }],*/
        },
        rules2: {
          phone: [
            {validator: validatePhone, trigger: 'blur'}
          ],
          name: [
            {validator: validateName, trigger: 'blur'}
          ],
          idcard: [
            {validator: validateIdcard, trigger: 'blur'}
          ],
          passport: [
            {validator: validatePassport, trigger: 'blur'}
          ]
          /* sex: [
            {validator: validateSex, trigger: 'blur'}
          ],*/
        },
      };
    },
    created: function(){
      var data=this.$store.state.contactUser.tusers?this.$store.state.contactUser.tusers:this.$store.getters.getCurrentContactUser;
      this.$store.commit("SET_CURRENT_CONTACT_USER", data);
      var id=this.$route.params.id;
      for(var i=0;i<data.length;i++){
        if(data[i].tuid==id){
          this.ruleForm2=data[i];
          break;
        }
      }
    },
    computed: {
      getTitle(){
        if(this.$route.path.indexOf('/insert')==-1){
          return '编辑联系人'
        }else{
          return '新增联系人'
        }
      }
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            var that = this;
            var data=JSON.parse(JSON.stringify(this.ruleForm2));
            console.log(data,this.$route.path,'ssssssssssssssssssssssssssssssss')
            if(this.$route.path.indexOf('/insert')==-1){
              //修改
              editContactUser(data)
                .then(({data}) => {
                  console.log(data,'sssssgggggggggggggggggggggggggg拜拜拜拜拜拜拜拜')
                  if (data.code===1) {
                    this.$message({
                      type: 'success',
                      message: '修改成功'
                    });
                  } else {
                    this.$message({
                      type: 'info',
                      message: data.msg||'修改失败'
                    });
                  }
                })

            }else{
              //新增
              insertContactUser(data)
                .then(({data}) => {
                  if (data.code===1) {
                    this.$message({
                      type: 'success',
                      message: '新增成功'
                    });
                  } else {
                    this.$message({
                      type: 'info',
                      message: data.msg||'新增失败'
                    });
                  }
                })

            }

          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>

<style lang="less">
  .el-scrollbar{
    .el-select-dropdown__item{
      font-size: .36rem;
      line-height: 0.8rem;
      height: 0.8rem;
    }
  }
  .associates-box {
    .el-form-item__label {
      font-size: .36rem;
      width: 25%;
      color: #000;
      flex: none;
    }


    .el-form-item {
      background: #fff;
      display: flex;
      line-height: 0.9rem;
      height: 0.9rem;
    }
    .el-form-item__label{
      line-height: 100%;
      .v-md{
        line-height:  0.9rem;
        height:  0.9rem;
      }
    }
    .v-right {
      flex: 1;
      width: 100%;
      line-height:  0.9rem;
      height:  0.9rem;
    }
    .el-form-item__content {
      flex: 1;
      width: 80%;

    }
    .el-input__inner {
      line-height:  0.9rem;
      height:  0.9rem;
      border: 0;
      font-size: .36rem;
    }
    .el-form-item {
      margin-bottom: 0;
      margin-top:20px;
    }
    .submit-content {
      .el-form-item__content {
        display: flex;
        justify-content: center;
        background: #eee;

      }
      .el-button {
        &:first-child{
          margin-right: 0.3rem;
        }
        padding: 0.20rem 0.4rem;
        font-size: 0.34rem;
        margin-top: 0.2rem;
      }

    }

  }


</style>
