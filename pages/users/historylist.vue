<template>
    <div class="cash usersbox">
        <list-title :list="listTitle"/>
        <br>
        <history-table></history-table>
    </div>
</template>

<script>
import listTitle from '@/components/users/right/listtitle.vue'
import historyTable from '@/components/users/right/historylist/table.vue'
export default {
    layout: 'users',
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
        historyTable
    }
}
</script>

<style lang="less">

</style>
