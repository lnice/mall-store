<template>
    <ul class="listsmall">
        <li v-for="(item, idx) in listinfo" :key="idx">
            <nuxt-link :to="item.link">
                <img :src="item.oImg" alt="">
                <h5>{{ item.title }}</h5>
                <h6>
                    <i>￥</i>
                    <b>{{ item.price }}</b>
                    <span>{{ item.people }}人抢</span>
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
