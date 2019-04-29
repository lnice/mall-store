<template>
    <div class="setting usersbox">
        <list-title :list="listTitle"/>
        <br />
        <el-alert
            :closable="false"
            type="warning"
            class="drawtips">
            <b><strong>好消息：</strong>凡是通过<em>泡美丽</em>去淘宝(天猫)购物的订单，都可以领奖，<em>领的越多，奖励越多</em>，如下表所示：</b>
        </el-alert>
        <br />
        <introduce/>
    </div>
</template>

<script>
import listTitle from '@/components/users/right/listtitle.vue'
import introduce from '@/components/users/right/benefits/introduce.vue'
export default {
    data () {
        return {
            listTitle: [{
                title: '会员福利',
                link: '/users/benefits'
            }]
        }
    },
    components: {
        listTitle,
        introduce
    }
}
</script>

<style lang="less">

</style>
