<template>
    <div class="jump_box">
        <h1><a href="#">淘宝优惠券网站</a></h1>
        <h3><span>您将成为泡美丽第851,152位省钱达人</span></h3>
        <h4><a href="#" target="_blank" class="qq">QQ一键注册</a></h4>
        <h4><a href="#" target="_blank" class="wb">微博一键注册</a></h4>
        <h5>
            <input type="checkbox" checked=""><label>同意泡美丽《<a href="#" target="_blank">服务协议</a>》</label>
            <i @click="loginPop">已有账号？登录</i>
        </h5>
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
    }
  }
}
</script>


<style lang="less">
</style>
