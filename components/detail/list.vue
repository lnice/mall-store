<template>
    <div class="detail-look">
        <h2>{{ title }}</h2>
        <list-shop :listinfo="data"/>
    </div>
</template>

<script>
import listShop from '@/components/list/listshop.vue'
export default {
    props:{
        title: String,
        data: Array
    },
    components: {
        listShop
    }
}
</script>

<style lang="less">
@import '~assets/css/detail/list.less';
</style>
