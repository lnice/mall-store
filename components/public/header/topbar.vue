<template>
    <div class="w1200">
        <template v-if="user">
            <div class="fl">
                <nuxt-link class="name" to="/user/"><img src="@/assets/img/v0.gif">{{ user }}</nuxt-link>|
                <nuxt-link to="/user/footmark">我的足迹</nuxt-link>|
                <a href="#">我的领奖</a>|
                <a href="#">我的泡币</a>|
                <nuxt-link to="/exit">退出</nuxt-link>
            </div>
        </template>
        <template v-else>
            <div class="fl">
                <a href="#" class="sj" target="_blank">泡美丽APP</a>|
                <a href="#" target="_blank">QQ登录</a>|
                <a href="javascript:;" rel="nofollow" @click="loginPop">登录</a>|
                <a href="javascript:;" class="red" @click="registerPop">免费注册</a>
            </div>
        </template>
        <div class="fr">
            <a href="#">新手帮助</a>|
            <a href="#" rel="nofollow">收藏本站</a>|
            <a href="#" target="_blank" class="kf">在线客服</a>|
            <a href="#" target="_blank" class="red">卖家报名&gt;&gt;</a>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            user: ''
        }
    },
    methods: {
        loginPop () {
            this.$store.dispatch('sign/login')
        },
        registerPop () {
            this.$store.dispatch('sign/register')
        }
    }
}
</script>


<style lang="less">

</style>
