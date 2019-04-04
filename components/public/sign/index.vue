<template>
    <div class="sign_box">
        <div class="popbox">
            <button class="close" @click="closeUp"></button>
            <login v-if="$store.state.sign.isPopUp.login"/>
            <register v-else/>
        </div>
        <div class="popbg" @click="closeUp"></div>
    </div>
</template>

<script>
import Login from './login.vue'
import Register from './register.vue'
export default {
    components: {
        Login,
        Register
    },
    methods: {
        closeUp () {
            this.$store.dispatch('sign/close')
        }
    }
}
</script>

<style lang="less">
@import '~assets/css/public/sign.less';
</style>
