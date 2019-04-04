<template>
  <section class="page-index">
    <el-row class="banner">
      <el-col :span="24">
        <banner />
      </el-col>
    </el-row>
    <banner-link/>
  </section>
</template>

<script>
import banner from '@/components/index/banner.vue'
import bannerLink from '@/components/index/link.vue'
export default {
  data () {
    return {
    }
  },
  components: {
    banner,
    bannerLink
  }
}
</script>

<style lang="less">
@import '~assets/css/index/index.less';
</style>
