<template>
    <ul class="listchoice">
        <li v-for="(item, idx) in listinfo" :key="idx">
            <nuxt-link :to="item.link">
                <img :src="item.oImg" alt="">
                <h6>{{ item.title }}</h6>
            </nuxt-link>
        </li>
    </ul>
</template>

<script>
export default {
    props: {
        listinfo: Array
    }
}
</script>

<style lang="less">
@import '~assets/css/index/listchoice.less';
</style>
