<template>
    <div class="exchange">
        <h3>泡币兑换手机话费</h3>
        <p>账　户：<b>520</b>泡币</p>
        <div class="txt">金　额：
            <el-select v-model="value" placeholder="请选择">
                <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
                </el-option>
            </el-select>
        </div>
        <p>价　格：<strong>4990</strong>泡币</p>
        <div class="txt">
            手机号：
            <el-input v-model="phone" label="手机号：" placeholder="请输入内容"></el-input>
        </div>
        <div class="btn">
            <el-button type="danger">提交兑换</el-button>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            options: [{
                value: 10,
                label: '10元'
            },{
                value: 20,
                label: '20元'
            },{
                value: 50,
                label: '50元'
            },{
                value: 100,
                label: '100元'
            }],
            value: 10,
            phone: 16600000000
        }
    }
}
</script>

<style lang="less">
@import '~assets/css/users/cash/exchange.less';
</style>
