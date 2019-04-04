<template>
  <div class="block text-center">
    <el-carousel trigger="click" height="300px" arrow="never">
      <el-carousel-item v-for="item in 2" :key="item" :style="'background-color:#FE8134'">
          <nuxt-link to="/"><img src="@/assets/img/banner1.jpg" alt=""></nuxt-link>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
    data () {
        return {
            
        }
    }
}
</script>


<style>
.banner img {
  margin-left: 60px;
}
.banner .el-carousel__indicators {
  margin-left: 30px;
}
</style>