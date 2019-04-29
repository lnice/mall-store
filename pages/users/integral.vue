<template>
    <div class="integral usersbox">
        <list-title :list="listTitle"/>
        <br />
        <integral-table/>
    </div>
</template>

<script>
import listTitle from '@/components/users/right/listtitle.vue'
import integralTable from '@/components/users/right/integral/table.vue'
export default {
    data () {
        return {
            listTitle: [{
                title: '泡币收支明细',
                link: '/users/integral'
            }]
        }
    },
    components: {
        listTitle,
        integralTable
    }
}
</script>

<style lang="less">

</style>
