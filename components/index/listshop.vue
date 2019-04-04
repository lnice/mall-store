<template>
    <ul class="listshop">
        <li v-for="(item, idx) in listinfo" :key="idx">
            <div class="atop">
                <nuxt-link :to="item.link" target="_blank">
                    <div :class="[item.tag, 'tag']"></div>
                    <img v-lazy="item.oImg" alt="">
                    <h5>
                        <i :class="[item.source]"></i>
                        {{ item.title }}
                    </h5>
                    <h6>
                        <span class="fl">
                            <font>¥<strong>{{ item.costPrice }}</strong></font>
                            券后
                            <em>{{ item.ratePrice }}</em>
                            元
                        </span>
                        <span class="fr">售{{ item.market }}件</span>
                    </h6>
                </nuxt-link>
            </div>
            <div class="abtn">
                <a :href="item.rateLink">
                    领取{{ item.coupon }}元优惠券
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
    props: {
        listinfo: Array
    }
}
</script>

<style lang="less">
@import '~assets/css/index/listshop.less';
</style>
