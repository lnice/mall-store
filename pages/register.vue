<template>
  <div class="Register">
    <div class="reg_box">
      <h1>
        <img src="@/assets/img/log_mob.png">
        <img src="@/assets/img/log_link.png" class="s">
        <img src="@/assets/img/log_pml.png">
      </h1>
      <h2>亲，欢迎注册泡美丽~~</h2>
      <h3>用户注册！</h3>
      <el-form :model="register" :rules="rules" ref="register" class="demo-register">
        <el-form-item class="txt-mobile" prop="mobile">
          <el-input v-model="register.mobile" autocomplete="off" placeholder="请输入手机号"></el-input>
        </el-form-item>
        <el-form-item class="txt-password" prop="password">
          <el-input v-model="register.password" autocomplete="off" placeholder="请输入密码" show-password></el-input>
        </el-form-item>
        <el-form-item class="txt-repass" prop="repass">
          <el-input v-model="register.repass" autocomplete="off" placeholder="再次输入密码" show-password></el-input>
        </el-form-item>
        <el-form-item class="txt-invite">
          <el-input v-model="register.invite_code" autocomplete="off" placeholder="邀请码（没有可不填）" ></el-input>
        </el-form-item>
        <el-form-item class="txt-code" prop="code">
          <el-input v-model="register.code" style="width:55%" autocomplete="off" placeholder="验证码"></el-input>
          <el-button v-if="!codeBtn.isSend" @click="getCode('register')" type="primary">获取验证码</el-button>
          <el-button class="n" :disabled="true" v-else>重新发送(<i>{{ codeBtn.countTime }}</i>)</el-button>
        </el-form-item>
        <el-form-item class="submit-box">
          <el-button @click="submitForm('register')">注册</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    layout: 'blank',
    data () {
        return {
          register: {
            mobile: '11111111111',
            password: '123456',
            repass: '123456',
            code: '1234',
            invite_code: ''
          },
          rules: {
            mobile: [
              { required: true, message: '请输入手机号', trigger: 'blur' },
              { min: 11, max: 11, message: '手机号填写有误', trigger: 'blur' },
              {
                validator: (rule, value, callback) => {
                  if(true) {
                    callback();
                  }else {
                    callback(new Error());
                  }
                },
                message: '手机号填写有误'
              }
            ],
            password: [
              { required: true, message: '请输入密码', trigger: 'blur' },
              { min: 6, max: 99, message: '密码输入太短', trigger: 'blur' },
            ],
            repass: [
              {
                validator: (rule, value, callback) => {
                  if(this.register.password === value) {
                    callback();
                  }else {
                    callback(new Error());
                  }
                },
                message: '两次密码输入不一样'
              }
            ],
            code: [
              { required: true, message: '请输入验证码', trigger: 'blur' },
              { min: 4, max: 4, message: '验证码输入有误', trigger: 'blur' },
              {
                validator: (rule, value, callback) => {
                  if(true) {
                    callback();
                  }else {
                    callback(new Error());
                  }
                },
                message: '验证码不正确',
                trigger: 'blur'
              }
            ]
          },
          codeBtn: {
            isSend: false,
            countTime: 60,
            timer: null
          }
        }
    },
    methods: {
      getCode (formName) {
        this.$refs[formName].validateField(['mobile'],(valid) => {
          console.log(1)
          if(!valid) {
            this.$message({
              message: '验证码发送成功',
              type: 'success'
            });
            this.codeBtn.isSend = true;
            this.codeBtn.timer = setInterval(() => {
              if (this.codeBtn.countTime > 1) {
                this.codeBtn.countTime --;
              } else {
                clearInterval(this.codeBtn.timer);
                this.codeBtn.isSend = false;
                this.codeBtn.countTime = 60;
              }
            }, 1000)
          }
        });
      },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            axios({
              method: 'post',
              url: '/userRegister',
              data: {
                mobile: this.register.mobile,
                password: this.register.password,
                code: this.register.code,
                invite_code: this.register.invite_code,
                type: 0
              }
            })
            .then(({ data }) => {
              if(data.code > 0) {
                this.$message.success(data.msg);
                console.log(data)
              } else {
                this.$message.error(data.msg);
              }
            })
            .catch((err) => {
              console.log(err)
            })
          } else {
            console.log('error')
            return false;
          }
        });
      },
    }
}
</script>

<style lang="less">
  @import '~assets/css/login/index.less';
</style>
