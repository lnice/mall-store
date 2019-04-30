<template>
    <ul class="listshop">
        <li v-for="(item, idx) in listinfo" :key="idx">
            <div class="atop">
                <a :href="item.click_url" target="_blank">
                    <div :class="[(item.tag || 'new'), 'tag']"></div>
                    <img v-lazy="item.pic_url" alt="">
                    <h5>
                        <i :class="[source(item.laiyuan)]"></i>
                        {{ item.title }}
                    </h5>
                    <h6>
                        <span class="fl">
                            <font>¥<strong>{{ item.price }}</strong></font>
                            券后
                            <em>{{ item.coupon_discount_price }}</em>
                            元
                        </span>
                        <span class="fr">售{{ item.volume }}件</span>
                    </h6>
                </a>
            </div>
            <div class="abtn">
                <a :href="item.click_url">
                    领取{{ item.coupon_price }}元优惠券
                </a>
            </div>
        </li>
    </ul>
</template>

<script>
import VueLazyload from 'vue-lazyload'
import Vue from 'vue'
Vue.use(VueLazyload)
export default {
    props: ['listinfo'],
    computed: {
        source () {
            return function (id){
                let sCn = ['tb', 'tm', 'jd', 'pdd'];
                return sCn[id];
            };
        }
    }
}
</script>

<style lang="less">
@import '~assets/css/index/listshop.less';
</style>
