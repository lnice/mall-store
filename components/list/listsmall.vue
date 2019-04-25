<template>
    <ul class="listsmall">
        <li v-for="(item, idx) in listinfo" :key="idx">
            <nuxt-link :to="item.click_url">
                <img :src="item.pic_url" alt="">
                <h5>{{ item.title }}</h5>
                <h6>
                    <i>￥</i>
                    <b>{{ item.price }}</b>
                    <span>{{ item.volume }}人抢</span>
                </h6>
            </nuxt-link>
        </li>
    </ul>
</template>

<script>
export default {
    props: {
        listinfo: Array,
    }
}
</script>

<style lang="less">
@import '~assets/css/index/listsmall.less';
</style>
