<template>
  <el-container class="layout-default">
    <el-header height="174px">
      <my-header/>
    </el-header>
    <el-main>
      <nuxt/>
    </el-main>
    <el-footer>
      <my-footer/>
    </el-footer>
    <sign-in v-if="$store.state.sign.isPopUp.basic"/>
    <fixed-break/>
  </el-container>
</template>

<script>
import MyHeader from '@/components/public/header/index.vue'
import MyFooter from '@/components/public/footer/index.vue'
import SignIn from '@/components/public/sign/index.vue'
import fixedBreak from '@/components/public/fixed/break.vue'
export default {
  components: {
    MyHeader,
    MyFooter,
    SignIn,
    fixedBreak
  },
  head () {
    return {
      title: 'head - mall title',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'mall'
        }
      ]
    }
  }
}
</script>


<style lang="less">
@import '~assets/css/public/layout.less';
</style>
