<template>
    <div class="shopinfo">
        <el-row>
            <el-col :span="11">
                <div class="show-img">
                    <img :src="data.oImg" :alt="data.title">
                </div>
                <ul class="list-tips">
                    <li v-for="(item, idx) in data.keys" :key="idx">
                        <a href="#">{{ item }}</a>
                    </li>
                </ul>
            </el-col>
            <el-col :span="13">
                <div class="i-tit">
                    <h2>{{ data.title }}</h2>
                    <h6>{{ data.introduce }}</h6>
                </div>
                <div class="i-prc">
                    天猫：<em>{{ data.price }}</em>
                    券后：<b>{{ data.ratePrice }}</b>元
                    <i v-if="data.frank">包邮</i>
                    &nbsp;
                    月销<u>{{ data.salesNum }}</u>件
                </div>
                <div class="i-tips">先<em>领券</em>后下单，拍下自动减<em>{{ data.coupon }}</em>元！免费领券，有券赶紧抢，手慢无~</div>
                <div class="i-buy">
                    <a href="http://www.paomeili.com/go/100725" target="_blank" class="yes">
                        <i><em>¥{{ data.coupon }}</em>优惠券</i><b>领券购买»</b>
                    </a>
                </div>
                <div class="i-accept">
                    领福利啦，下单后，记得去<a href="/accept" target="_blank">领取奖励</a>哦，省钱翻倍哟，么么哒~~~
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
    props: {
        data: Object
    }
}
</script>

<style lang="less">
@import '~assets/css/detail/shopinfo.less';
</style>
