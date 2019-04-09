<template>
    <el-breadcrumb separator-class="el-icon-arrow-right" class="local-style">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/home' }">{{ data.type }}</el-breadcrumb-item>
        <template v-if="Array.isArray(data.page)">
            <el-breadcrumb-item v-for="(item, idx) in data.page" :key="idx">{{ item }}</el-breadcrumb-item>
        </template>
        <template v-else>
            <el-breadcrumb-item>{{ data.page }}</el-breadcrumb-item>
        </template>
    </el-breadcrumb>
</template>

<script>
export default {
    props: {
        data: Object
    }
}
</script>

<style lang="less">
.local-style {
    margin: 20px 0;
    .el-breadcrumb__inner a:hover, .el-breadcrumb__inner.is-link:hover {
        color: #FF3535;
    }
}
</style>
