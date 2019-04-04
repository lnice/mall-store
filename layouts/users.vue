<template>
  <el-container class="layout-default">
    <el-header height="174px">
      <my-header/>
    </el-header>
    <el-main>
        <div class="userscenter w1200">
            <el-row>
                <el-col :span="5">
                    <left-nav-bar/>
                </el-col>
                <el-col :span="19">
                    <nuxt/>
                </el-col>
            </el-row>
        </div>
    </el-main>
    <el-footer>
      <my-footer/>
    </el-footer>
  </el-container>
</template>

<script>
import MyHeader from '@/components/public/header/index.vue'
import MyFooter from '@/components/public/footer/index.vue'
import leftNavBar from '@/components/users/left/index.vue'
export default {
  middleware: 'userAuth',
  components: {
    MyHeader,
    MyFooter,
    leftNavBar
  }
}
</script>


<style lang="less">
@import '~assets/css/users/index.less';
</style>
