<template>
    <el-table
    :data="tableData">
        <el-table-column
            label="操作时间"
            prop="ratime"
            align="center"
            width="222">
        </el-table-column>
        <el-table-column
            prop="select"
            align="center">
            <template slot="header">
                <select @change="select" v-model="value">
                    <option :value="item.value" v-for="item in options" :key="item.value">--{{ item.label }}--</option>
                </select>
            </template>
        </el-table-column>
        <el-table-column
            label="备注说明"
            prop="bakExplain"
            align="center"
            width="297">
        </el-table-column>
        <el-table-column
            label="泡币变动"
            prop="interChange"
            align="center"
            width="223">
        </el-table-column>
    </el-table>
</template>

<script>
  export default {
    data() {
      return {
        tableData: [{
            ratime: '2019-07-10 11:22:30',
            select: '签到',
            bakExplain: '绑定手机奖励',
            interChange: '+5'
        }],
        options: [{
            value: 0,
            label: '全部',
            change () {
                console.log(1)
            }
        },{
            value: 1,
            label: '系统'
        },{
            value: 2,
            label: '客服'
        },{
            value: 3,
            label: '兑换'
        },{
            value: 4,
            label: '签到'
        },{
            value: 5,
            label: '领奖'
        },{
            value: 6,
            label: '抽奖'
        }],
        value: 0
      }
    },
    methods: {
        select () {
            console.log(this.value)
        }
    }
  }
</script>

<style lang="less">

</style>
