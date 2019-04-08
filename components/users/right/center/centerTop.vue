<template>
    <el-row>
        <el-col :span="18">
            <div class="uc_jifen">
                <h1>
                    我的泡币：<em>{{ dataInfo.ownaward }}</em>
                    正在兑换：<a href="cashlist">{{ dataInfo.awarding }}</a>
                </h1>
                <h2>
                    <a href="http://www.paomeili.com/jiang" target="_blank" class="b">快速赚泡币</a>
                    <nuxt-link to="/users/cash" class="c">泡币兑换</nuxt-link>
                    <nuxt-link to="/users/integral">总收入：{{ dataInfo.totalearn }}</nuxt-link>
                    <nuxt-link to="/users/cashlist">已兑换：{{ dataInfo.already }}({{ dataInfo.already / 10 }}元)</nuxt-link>
                </h2>
                <div class="uc_load"><label>我的等级</label>
                    <h5>
                        <i>
                            加油，马上就升到V1啦~
                            <img src="~assets/img/v1.gif">
                        </i>
                        <b :style="'width:' + ratio + '%'">{{ upRank.order }}单</b>
                    </h5>
                    <a href="level">如何快速升级？</a>
                </div>
            </div>
        </el-col>
        <el-col :span="6">
            <div class="uc_qian">
                <h2>{{ todayDate }}</h2>
                <h3 :class="{'y': $store.state.users.isPtc}" @click="ptc">{{ $store.state.users.isPtc ? '今日已签' : '签到' }}</h3>
                <h4 v-if="!$store.state.users.isPtc">
                    今天还没签到哦~<br>
                    <a href="http://www.paomeili.com/app.html" target="_blank">
                        APP签到奖励更多&gt;&gt;
                    </a>
                </h4>
                <h4 v-else>
                    恭喜，签到成功！<br>
                    <a href="http://www.paomeili.com/app.html" target="_blank">
                        APP签到奖<b>40</b>泡币&gt;&gt;
                    </a>
                </h4>
            </div>
        </el-col>
    </el-row>
</template>

<script>
export default {
    data () {
        return {
            dataInfo : {
                totalearn: 515,
                ownaward: 500,
                awarding: 0,
                already: 0
            },
            upRank: {
                order: 10,
                needOrder: 100
            }
        }
    },
    methods: {
        ptc () {
            if (this.$store.state.users.isPtc) {
                return this.$message({
                    message: '已经签到了哦~',
                    type: 'warning'
                });
            }
            this.$message({
                message: '签到成功~',
                type: 'success'
            });
            this.$store.dispatch('users/ptc')
        }
    },
    computed: {
        ratio () {
            return this.upRank.order / this.upRank.needOrder * 100
        },
        todayDate () {
            let month = new Date().getMonth() + 1;
            let day = new Date().getDate();
            if(month < 10) {
                month = '0' + month;
            }
            if(day < 10) {
                day = '0' + day;
            }
            return month + '月' + day + '日'
        }
    }
}
</script>

<style lang="less">
@import '~assets/css/users/center/centertop.less';
</style>
