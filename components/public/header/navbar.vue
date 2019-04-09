<template>
    <nav class="head_nav">
      <ul class="w1200">
        <li class="index">
          <nuxt-link to="/" class="no" exact>最新优惠券</nuxt-link>
        </li>
        <li class="jiu">
          <nuxt-link to="/postage" class="no">9.9包邮</nuxt-link>
        </li>
        <li class="brand">
          <nuxt-link to="/brand" class="no">品牌券</nuxt-link>
        </li>
        <li class="quan"><a href="#" target="_self" class="no">优惠专题</a></li>
        <li class="new">
          <nuxt-link to="/item/new" class="no">今日新券</nuxt-link>
        </li>
        <li class="jiang">
          <nuxt-link to="/accept" class="no">订单领奖</nuxt-link>
        </li>
        <li class="app"><a href="/app" target="_blank" class="no">手机APP</a></li>
        <li class="user">
          <nuxt-link to="/users/" class="no" exact>签到有奖</nuxt-link>
        </li>
      </ul>
    </nav>
</template>

<script>
export default {

}
</script>

<style>

</style>
