<template>
    <div class="m-header">
        <el-row :gutter="0" class="topbar">
            <el-col :span="24">
                <top-bar/>
            </el-col>
        </el-row>
        <el-row :gutter="0" class="searchbar">
            <el-col>
                <search-bar/>
            </el-col>
        </el-row>
        <el-row :gutter="0" class="navbar">
            <el-col>
                <nav-bar/>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import topBar from './topbar.vue'
import searchBar from './searchbar.vue'
import navBar from './navbar.vue'
export default {
    components: {
        topBar,
        searchBar,
        navBar
    }
}
</script>

<style lang="less">
@import '~assets/css/public/header.less';
</style>
