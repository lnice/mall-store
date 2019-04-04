<template>
    <div class="setting usersbox">
        <list-title :list="listTitle"/>
        <br />
        <bading></bading>
    </div>
</template>

<script>
import listTitle from '@/components/users/right/listtitle.vue'
import bading from '@/components/users/right/setting/bading.vue'
export default {
    layout: 'users',
    data () {
        return {
            listTitle: [{
                title: '账户设置',
                link: '/users/setting'
            }]
        }
    },
    components: {
        listTitle,
        bading
    }
}
</script>

<style lang="less">

</style>
