<template>
    <div class="userscenter w1200">
        <el-row>
            <el-col :span="5">
                <left-nav-bar :userinfo="userinfo"/>
            </el-col>
            <el-col :span="19">
                <nuxt/>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import leftNavBar from '@/components/users/left/index.vue'
import axios from 'axios'
import Cookie from 'js-cookie'
export default {
    middleware: 'userAuth',
    async asyncData ({ app, store, params }) {
        let { data } = store.state.authUser;
        return {
            userinfo: {
                name: data.nickname,
                phone: data.mobile,
                rank: 0,
                headImg: data.head || 'http://thirdqq.qlogo.cn/g?b=oidb&k=5UxCXeZudCJfnfYyUrosjQ&s=100'
            }
        }
    },
    components: {
        leftNavBar
    },
}
</script>

<style lang="less">
@import '~assets/css/users/index.less';
</style>
