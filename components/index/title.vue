<template>
    <el-row class="index-title">
        <el-col :span="12">
            <span class="tag">{{ mark }}</span>
            <strong>{{ title }}</strong>
        </el-col>
        <el-col :span="12" class="right">
            <a v-for="(item, idx) in link" :key="idx" :href="item.link" target="_blank">{{ item.name }}</a>
            <slot></slot>
        </el-col>
    </el-row>
</template>

<script>
export default {
    props: ['title', 'mark', 'link']
}
</script>

<style lang="less">
@import '~assets/css/index/title.less';
</style>
