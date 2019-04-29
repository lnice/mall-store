<template>
    <div class="cash usersbox">
        <list-title :list="listTitle"/>
        <br>
        <el-alert
            title="温馨提醒：申请兑换成功后，我们将在1-2个工作日内处理兑换，请注意查收！"
            type="warning">
        </el-alert>
        <br>
        <ex-change/>
    </div>
</template>

<script>
import listTitle from '@/components/users/right/listtitle.vue'
import exChange from '@/components/users/right/cash/exchange.vue'
export default {
    data () {
        return {
            listTitle: [{
                title: '申请泡币兑换',
                link: '/users/cash'
            },{
                title: '历史兑换记录',
                link: '/users/historylist'
            }]
        }
    },
    components: {
        listTitle,
        exChange
    }
}
</script>

<style lang="less">

</style>
