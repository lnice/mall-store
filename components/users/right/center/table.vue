<template>
    <div class="center-table">
        <list-title :list="listTitle">
            <nuxt-link slot="right" to="/users/integral">
                查看全部明细&gt;&gt;
            </nuxt-link>
        </list-title>
        <br>
        <el-table :data="tableData" stripe max-height="385px">
            <el-table-column
                prop="time"
                label="时间"
                width="180"
                align="center">
            </el-table-column>
            <el-table-column
                prop="type"
                label="类型"
                width="180"
                align="center">
            </el-table-column>
            <el-table-column
                prop="bak"
                label="备注"
                align="center">
            </el-table-column>
            <el-table-column
                prop="integral"
                label="泡币"
                align="center">
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
import listTitle from '../listtitle.vue'
export default {
    data () {
        return {
            listTitle: [{
                title: '最近泡币明细',
                link: '/users/'
            }],
            tableData: [{
                time: '2019-04-03 11:28',
                type: '签到',
                bak: '连签1天(PC)',
                integral: '+500'
            },{
                time: '2019-04-03 11:28',
                type: '签到',
                bak: '连签1天(PC)',
                integral: '+500'
            }]
        }
    },
    components: {
        listTitle
    }
}
</script>

<style lang="less">
@import '~assets/css/users/center/table.less';

</style>
