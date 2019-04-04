<template>
    <div class="leftnav">
        <ul class="u_avatar">
          <li class="avt"><a href="#"><img :src="userinfo.headImg"></a></li>
          <li class="name"><a href="#">{{userinfo.name}}<img :src="imgRank"></a></li>
          <li class="name"><a href="#">{{userinfo.phone}}</a></li>
          <li class="view"><a href="#" target="_blank">★我看过的宝贝★</a></li>
        </ul>
        <ul class="uleft_nav">
          <nuxt-link to="/users/" tag="li" exact><a href="#">我的账户</a></nuxt-link>
          <nuxt-link to="/users/draw" tag="li" exact><a href="#">我的领奖</a></nuxt-link>
          <nuxt-link to="/users/integral" tag="li" exact><a href="#">我的泡币</a></nuxt-link>
          <nuxt-link to="/users/cash" tag="li" exact><a href="#">泡币兑换</a></nuxt-link>
          <nuxt-link to="/users/setting" tag="li" exact><a href="#">账户设置</a></nuxt-link>
          <nuxt-link to="/users/benefits" tag="li" exact><a href="#">会员福利</a></nuxt-link>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'leftnav',
  data () {
    return {
      userinfo: {
        name: 'Mine40267',
        phone: '166****4217',
        rank: 0,
        headImg: 'http://thirdqq.qlogo.cn/g?b=oidb&k=5UxCXeZudCJfnfYyUrosjQ&s=100'
      }
    }
  },
  computed: {
    imgRank () {
      return `http://www.paomeili.com/user/images/v${this.userinfo.rank}.gif`;
    }
  }
}
</script>

<style lang="less">
@import '~assets/css/users/left/index.less';
</style>
