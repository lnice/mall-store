<template>
    <div class="w1200 help">
        <el-row>
            <el-col :span="5" class="help-left">
                <h3>帮助中心</h3>
                <ul>
                    <nuxt-link to="/help/novice" tag="li"><a>新手指南</a></nuxt-link>
                    <nuxt-link to="/help/plaint" tag="li"><a>常见问题</a></nuxt-link>
                    <nuxt-link to="/help/toll" tag="li"><a>在线客服</a></nuxt-link>
                    <nuxt-link to="/help/aboutus" tag="li"><a>关于泡美丽</a></nuxt-link>
                    <nuxt-link to="/help/seller" tag="li"><a>商家报名</a></nuxt-link>
                    <nuxt-link to="/help/links" tag="li"><a>友情链接</a></nuxt-link>
                    <nuxt-link to="/help/contact" tag="li"><a>联系我们</a></nuxt-link>
                    <nuxt-link to="/help/protocol" tag="li"><a>服务条款</a></nuxt-link>
                </ul>
            </el-col>
            <el-col :span="19">
                <div class="help-right">
                    <nuxt-child></nuxt-child>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="less">
@import '~assets/css/help/index.less';
</style>
