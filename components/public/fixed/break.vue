<template>
    <div class="fixed-break">
        <nuxt-link title="签到送钱" to="/users/"></nuxt-link>
        <nuxt-link class="k" to="/help/toll" target="_blank" title="联系客服"></nuxt-link>
        <a class="x" href="#" target="_blank" title="点击下载"></a>
        <a class="b" @click="breaktop" title="返回顶部"></a>
    </div>
</template>

<script>
export default {
    methods: {
        breaktop () {
            window.scrollTo(0,0);
        }
    }
}
</script>

<style lang="less">
.fixed-break {
    position: fixed;
    right: 0;
    bottom: 20px;
    z-index: 11;
    a {
        display: block;
        width: 40px;
        height: 40px;
        background: url(~assets/img/web_foot.png) no-repeat;
        text-align: center;
        text-decoration: none;
        margin-bottom: 10px;
        cursor: pointer;
        &.k {
            background-position: 0px -56px;
        }
        &.x {
            background-position: 0px -112px;
        }
        &.b {
            background-position: 0px -168px;
        }
    }
}
</style>
