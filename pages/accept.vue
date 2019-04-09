<template>
    <div class="acceptbox">
        <div class="jiang_banner">
            <a href="javascript:;">
            <img src="@/assets/img/cat_jiang.jpg" alt="" width="100%" height="100%">
            </a>
        </div>
        <div class="jiang_body">
            <h1>凡是通过泡美丽去淘宝（天猫）购物的订单，都可以领奖哟，省钱到底！</h1>
            <div class="jiang_form">
                <h6 v-if="!drawSucc">
                    <input type="text" placeholder="请输入淘宝订单号" v-model="oTxtInfo">
                    <button type="submit" @click="subAccept">点击领奖</button>
                </h6>
                <h4 v-else>
                    <a href="javascript:;" @click="cnces">继续领奖>></a>
                    <a href="javascript:;">查看领奖>></a>
                    <span>
                        <a href="javascript:;" target="_blank">如何领更多泡币？</a>
                    </span>
                    <i @click="cnces"></i>
                </h4>
            </div>
            <div class="jiang_box">
                <div class="jiang_rule">
                    <h3>活动说明</h3>
                    <p>1、通过泡美丽网站/APP/QQ群/微信等去淘宝购物的订单，均可领奖。</p>
                    <p>2、订单付款后，约5-10分钟，即可输入淘宝订单号，进行领奖。</p>
                    <p>3、每笔订单可领奖1次，不能重复领取，每天领奖次数不限。</p>
                    <p>4、每笔订单最高可领500泡币，奖励与订单金额无关。</p>
                    <p>5、领奖的泡币在订单确认收货15天后可兑换。</p>
                    <p>6、若订单退款，则扣除该订单的领奖泡币。</p>
                    <p>7、泡美丽享有本次活动的最终解释权。</p>
                    <h4>领奖说明</h4>
                    <p>1、订单领奖的泡币，系统将发放到您的泡美丽账户，可随时兑换！</p>
                    <p>2、点下面按钮，分享本活动，让更多的好友，一起省钱吧！</p>
                    <h4>
                    <a href="javascript:;" target="_blank">
                        <img src="@/assets/img/jiang_qz.png" alt="">
                    </a>
                    <a href="javascript:;" target="_blank">
                        <img src="@/assets/img/jiang_wb.png" alt="">
                    </a>
                    <a href="javascript:;" target="_blank">
                        <img src="@/assets/img/jiang_tx.png" alt="">
                    </a>
                    </h4>
                </div>
                <div class="jiang_list">
                    <h3><a href="javascript:;">查看我的领奖>></a>奖励排行榜</h3>
                    <table class="table_jiang">
                    <tbody>
                        <tr>
                            <th width="10%">排名</th>
                            <th width="33%">昵称</th>
                            <th width="20%">累计奖励</th>
                            <th width="20%">泡币价值</th>
                        </tr>
                        <tr v-for="(item, idx) in rankData" :key="idx">
                            <td>{{ idx }}</td>
                            <td><a href="javascript:;" target="_blank">{{ item.name }}</a></td>
                            <td><b>{{ item.total }}</b></td>
                            <td><em>￥{{ amountFilter( item.price ) }}</em></td>
                        </tr>
                    </tbody>
                    </table>
                </div>
            </div>
            <div class="jiang_link">
                <nuxt-link to="/users/" >签到赚泡币</nuxt-link>
                <nuxt-link to="/help/service" class="q" target="_blank">加群抢红包</nuxt-link>
                <a href="/app" target="_blank" class="z">泡美丽APP</a>
                <a href="javascript:;" target="_blank" class="j">9块9包邮</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            oTxtInfo: '',
            drawSucc: false,
            rankData: [{
                name: '小丰色木每子',
                total: 719272,
                price: 1000.63
            },{
                name: '小丰色木每子2',
                total: 719272,
                price: 999.99
            }]
        }
    },
    methods: {
        amountFilter (num) {
            if(isNaN(Number(num))) return num;
            if(Number(num) < 1000) return num;
            num = Number(num);
            let arr = num.toFixed(2).split('.');
            let intPrice = arr[0].toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,');
            num = intPrice + '.' + arr[1];
            return num;
        },
        subAccept () {
            if (!this.oTxtInfo) {
                this.$message.error('订单号不能为空哦~');
            } else if (isNaN(Number(this.oTxtInfo))) {
                this.$message.error('订单号输入有误~');
            } else {
                console.log(this.oTxtInfo);
                this.$message.success('领取成功~');
                this.drawSucc = true;
            }
        },
        cnces () {
            this.oTxtInfo = '';
            this.drawSucc = false;
        }
    }
}
</script>

<style lang="less">
@import '~assets/css/accept/index.less';
</style>
