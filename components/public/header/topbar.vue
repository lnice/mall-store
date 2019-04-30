<template>
    <div class="w1200">
        <template v-if="user">
            <div class="fl">
                <nuxt-link class="name" to="/users/"><i :class="['v-ico', `vip${0}`]"></i>{{ user.nickname }}</nuxt-link>|
                <nuxt-link to="/user/footmark">我的足迹</nuxt-link>|
                <a href="#">我的领奖</a>|
                <a href="#">我的泡币</a>|
                <a href="javascript:;" @click="logout">退出</a>
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
            <nuxt-link to="/help/novice">新手帮助</nuxt-link>|
            <a href="javascript:;" @click="collect" rel="nofollow">收藏本站</a>|
            <nuxt-link to="/help/service" target="_blank" class="kf">在线客服</nuxt-link>|
            <nuxt-link to="/help/seller" target="_blank" class="red">卖家报名&gt;&gt;</nuxt-link>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
        }
    },
    methods: {
        loginPop () {
            this.$store.dispatch('sign/login')
        },
        registerPop () {
            this.$store.dispatch('sign/register')
        },
        collect () {
            let url = window.document.location.href;
            let title = document.title;
            try {
                window.external.addFavorite(url, title);
            } catch(e) {
                try {
                    window.sidebar.addPanel(url, title);
                } catch(e) {
                    alert("加入收藏失败，请使用Ctrl+D进来添加");
                }
            }
        },
        logout () {
            let { data } = this.$store.state.authUser;
            this.$store.dispatch('logout', data.id).then(() => {
                this.$router.push('/')
            });
        }
    },
    computed: {
        user () {
            let data = this.$store.state.authUser && this.$store.state.authUser.data;
            return data
        }
    }
}
</script>


<style lang="less">

</style>
