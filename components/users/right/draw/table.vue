<template>
    <el-table
        :data="tableData">
        <el-table-column
        prop="picture"
        label="图片"
        width="78"
        align="center">
        </el-table-column>
        <el-table-column
        prop="accTime"
        label="淘宝订单/成交时间"
        align="left">
        </el-table-column>
        <el-table-column
        prop="orderNum"
        label="淘宝订单号"
        width="196"
        align="center">
        </el-table-column>
        <el-table-column
        prop="pay"
        label="付款"
        width="144"
        align="center">
        </el-table-column>
        <el-table-column
        prop="drawTime"
        label="领奖时间"
        width="157"
        align="center">
        </el-table-column>
        <el-table-column
        prop="integral"
        label="泡币"
        width="106"
        align="center">
        </el-table-column>
    </el-table>
</template>

<script>
export default {
    data () {
        return {
            tableData: [{
                picture: 'null',
                accTime: '2019-07-10 11:22:30',
                orderNum: '201907101122',
                pay: '支付宝',
                drawTime: '2019-07-10 11:22:30',
                integral: '100'
            }]
        }
    }
}
</script>

<style lang="less">
</style>
