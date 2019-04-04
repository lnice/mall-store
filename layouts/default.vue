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
  </el-container>
</template>

<script>
import MyHeader from '@/components/public/header/index.vue'
import MyFooter from '@/components/public/footer/index.vue'
import SignIn from '@/components/public/sign/index.vue'
export default {
  components: {
    MyHeader,
    MyFooter,
    SignIn
  },
  computed: {
    
  }
}
</script>


<style>
</style>
