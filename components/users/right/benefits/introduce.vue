<template>
    <div class="introduce">
        <table width="100%" border="1" bordercolor="#eee" class="table">
            <thead>
                <tr>
                    <th>会员等级</th>
                    <th>升级条件</th>
                    <th width="356">领奖说明</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, idx) in tableData" :key="idx">
                    <td>
                        <img :src="'http://www.paomeili.com/user/images/v' + item.rank + '.gif'">
                        {{ item.rankName }}
                    </td>
                    <td v-html="item.quali"></td>
                    <td v-html="item.explain"></td>
                </tr>
            </tbody>
            <tfoot>
                <tr>
                    <th>
                        我的等级：
                        <img :src="'http://www.paomeili.com/user/images/v' + selfInfo.rank + '.gif'">
                    </th>
                    <th>
                        已领奖：{{ selfInfo.alaward }}单（不含退款）
                    </th>
                    <th>
                        当前领奖：{{ selfInfo.curaward }}泡币/单
                    </th>
                </tr>
            </tfoot>
        </table>
        <ul class="question">
            <li>
                <h5>问：什么是订单领奖？如何去领奖？</h5>
                <p>答：亲，凡是通过<em>泡美丽</em>网站/APP/公众号/QQ群/微信等，去淘宝(天猫)购物的订单，均可以领取奖励，下单后10分钟即可<a href="#">订单领奖>></a></p>
            </li>
            <li>
                <h5>问：等级怎么算？奖励怎么算？</h5>
                <p>答：亲，领奖的订单数达到等级的规定值，即可晋级。如：领奖满10单，晋级为V1会员，从第11单开始，奖励就升到150泡币/单。</p>
            </li>
            <li>
                <h5>问：订单数不正确？退款算吗？</h5>
                <p>答：亲，领奖成功后的订单，若无退款，才算有效。若发生退款或取消订单，则为无效订单，不参与会员等级计算。</p>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data () {
        return {
            selfInfo: {
                rank: 0,
                rankName: '普通会员',
                alaward: 0,
                curaward: 100
            },
            tableData: [{
                rank: 0,
                rankName: '普通会员',
                quali: '无',
                explain: '第<em>1</em>单开始，每单可领<b>100</b>泡币'
            },{
                rank: 1,
                rankName: '铜牌会员',
                quali: '领奖满<em>10</em>单',
                explain: '第<em>11</em>单开始，每单可领<b>150</b>泡币'
            },{
                rank: 2,
                rankName: '银牌会员',
                quali: '领奖满<em>50</em>单',
                explain: '第<em>51</em>单开始，每单可领<b>200</b>泡币'
            },{
                rank: 3,
                rankName: '金牌会员',
                quali: '领奖满<em>100</em>单',
                explain: '第<em>101</em>单开始，每单可领<b>250</b>泡币'
            },{
                rank: 4,
                rankName: '钻石会员',
                quali: '领奖满<em>200</em>单',
                explain: '第<em>151</em>单开始，每单可领<b>300</b>泡币'
            },{
                rank: 5,
                rankName: '尊贵会员',
                quali: '领奖满<em>400</em>单',
                explain: '第<em>201</em>单开始，每单可领<b>350</b>泡币'
            },{
                rank: 6,
                rankName: '至尊会员',
                quali: '领奖满<em>800</em>单',
                explain: '第<em>251</em>单开始，每单可领<b>400</b>泡币'
            }]
        }
    }
}
</script>

<style lang="less">
@import '~assets/css/users/benefits/introduce.less';
</style>
