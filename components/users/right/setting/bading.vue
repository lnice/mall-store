<template>
    <div class="bading">
        <div class="bd-info">
            <el-row>
                <el-col :span="3">
                    <img src="@/assets/img/ico_nick.png" class="iconice">
                </el-col>
                <el-col :span="16">
                    <div class="txt">
                        <strong>昵称：</strong>
                        <el-input placeholder="请输入您的昵称" v-model="badingData.name"></el-input>
                    </div>
                    <div class="txt">
                        <strong>QQ：</strong>
                        <el-input placeholder="请输入您的QQ" v-model="badingData.showQQ"></el-input>
                    </div>
                    <div class="txt">
                        <strong>性别：</strong>
                        <el-radio v-model="badingData.sex" label="1">女</el-radio>
                        <el-radio v-model="badingData.sex" label="2">男</el-radio>
                    </div>
                </el-col>
                <el-col :span="4">
                    <el-button type="primary">保存资料</el-button>
                </el-col>
            </el-row>
        </div>
        <div class="bd-phone">
            <el-row>
                <el-col :span="3">
                    <img src="@/assets/img/ico_tel.png" class="iconice">
                </el-col>
                <el-col :span="16" class="mts">
                    <h6>手机：<em>{{ badingData.phone || '未绑定' }}</em></h6>
                    <p>手机可以登录，非常重要，建议及时更新</p>
                </el-col>
                <el-col :span="4">
                    <el-button type="primary" v-if="badingData.phone" @click="editPhone">修改手机</el-button>
                    <el-button type="primary" v-else @click="editPhone">立即绑定</el-button>
                </el-col>
            </el-row>
        </div>
        <div class="bd-QQ">
            <el-row>
                <el-col :span="3">
                    <img src="@/assets/img/ico_QQ.png" class="iconice">
                </el-col>
                <el-col :span="16" class="mts">
                    <h6>QQ登录：<em>{{ badingData.QQ || '未绑定' }}</em></h6>
                    <p>绑定后可使用QQ快速登录泡美丽，无须输入密码</p>
                </el-col>
                <el-col :span="4">
                    <el-button type="primary" v-if="badingData.QQ">修改绑定</el-button>
                    <el-button type="primary" v-else>立即绑定</el-button>
                </el-col>
            </el-row>
        </div>
        <div class="bd-sina">
            <el-row>
                <el-col :span="3">
                    <img src="@/assets/img/ico_sina.png" class="iconice">
                </el-col>
                <el-col :span="16" class="mts">
                    <h6>微博登录：<em>{{ badingData.sina || '未绑定' }}</em></h6>
                    <p>绑定后可使用新浪微博登录泡美丽，无须输入密码</p>
                </el-col>
                <el-col :span="4">
                    <el-button type="primary" v-if="badingData.QQ">修改绑定</el-button>
                    <el-button type="primary" v-else>立即绑定</el-button>
                </el-col>
            </el-row>
        </div>
        <el-dialog title="验证手机号" :visible.sync="validatePhone" class="bdings">
            <el-form :model="bdphone" :rules="rules" ref="rulePhone">
                <el-form-item prop="phone">
                    <el-input v-model="bdphone.phone" autocomplete="off" placeholder="请输入手机号"></el-input>
                </el-form-item>
                <el-form-item class="code-btn" prop="code">
                    <el-input v-model="bdphone.code" autocomplete="off" placeholder="请输入验证码"></el-input>
                    <el-button @click="getCode('rulePhone')">获取验证码</el-button>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="validatePhone = false">取 消</el-button>
                <el-button type="primary" @click="submitForm('rulePhone')">保存</el-button>
            </div>
        </el-dialog>

    </div>
</template>

<script>
export default {
    data () {
        return {
            badingData: {
                name: '',
                showQQ: '',
                QQ: '',
                sex: '',
                phone: 16600000000,
                sina: ''
            },
            validatePhone: false,
            bdphone: {
                phone: '',
                code: ''
            },
            rules: {
                phone:  [
                    { required: true, message: '请输入手机号', trigger: 'blur' },
                    { min: 11, max: 11, message: '请输入正确的手机号', trigger: 'blur' }
                ],
                code: [{
                    min: 4,
                    max: 4,
                    required: true,
                    message: '请输入正确的验证码',
                    trigger: 'blur'
                }]
            }
        }
    },
    methods: {
        editPhone () {
            this.validatePhone = true;
        },
        getCode (formName) {
            this.$refs[formName].validateField('phone', (valid) => {
                if(!valid) {
                    console.log(this.bdphone.phone)
                } else {
                    return false;
                }
            })
        },
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
            if (valid) {
                console.log(this.bdphone)
                alert('submit!');
            } else {
                console.log('error submit!!');
                return false;
            }
            });
        },
    }
}
</script>

<style lang="less">
@import '~assets/css/users/setting/bading.less';
</style>
