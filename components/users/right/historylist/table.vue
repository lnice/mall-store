<template>
    <el-table
        :data="tableData">
        <el-table-column
        prop="applyTime"
        label="申请时间"
        width="125"
        align="center">
        </el-table-column>
        <el-table-column
        prop="exchangeName"
        label="兑换名称"
        width="188"
        align="center">
        </el-table-column>
        <el-table-column
        prop="payway"
        label="支付宝"
        width="156"
        align="center">
        </el-table-column>
        <el-table-column
        prop="name"
        label="姓名"
        width="84"
        align="center">
        </el-table-column>
        <el-table-column
        prop="integral"
        label="泡币"
        width="94"
        align="center">
        </el-table-column>
        <el-table-column
        prop="status"
        label="兑换状态"
        width="106"
        align="center">
        </el-table-column>
        <el-table-column
        prop="endTime"
        label="处理时间"
        align="center">
        </el-table-column>
    </el-table>
</template>

<script>
export default {
    data () {
        return {
            tableData: [{
                applyTime: '2019-04-04',
                exchangeName: 'name',
                payway: '9934****81@qq.com',
                name: '天晓',
                integral: '100',
                status: '处理中',
                endTime: '2019-04-04'
            }]
        }
    }
}
</script>

<style>

</style>
