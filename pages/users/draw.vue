<template>
    <div class="draw usersbox">
        <list-title :list="listTitle"/>
        <br/>
        <el-alert
            :closable="false"
            type="warning"
            class="drawtips">
            <b><strong>好消息：每笔订单都可以<em>领奖</em>哦，领的越多，奖励越多，很刺激~~</strong></b>
            <nuxt-link to="/users/benefits">
                点此查看详情&gt;&gt;
            </nuxt-link>
        </el-alert>
        <br/>
        <draw-table></draw-table>
    </div>
</template>

<script>
import listTitle from '@/components/users/right/listtitle.vue'
import drawTable from '@/components/users/right/draw/table.vue'
export default {
    data () {
        return {
            listTitle: [{
                title: '订单领奖记录',
                link: '/users/draw'
            },{
                title: '立即去领奖>>',
                link: '/accept',
                target: '_blank'
            }]
        }
    },
    components: {
        listTitle,
        drawTable
    }
}
</script>

<style lang="less">

</style>
