<template>
    <div class="leftnav">
        <ul class="u_avatar">
          <li class="avt"><a href="#"><img :src="userinfo.headImg"></a></li>
          <li class="name"><a href="#">{{ userinfo.name }}<i :class="['v-ico',`vip${userinfo.rank}`]"></i></a></li>
          <li class="name"><a href="#">{{ userinfo.phone }}</a></li>
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
import axios from 'axios'
export default {
  name: 'leftnav',
  data () {
    return {
    }
  },
  props: {
    userinfo: Object
  },
  computed: {
  }
}
</script>

<style lang="less">
@import '~assets/css/users/left/index.less';
</style>
