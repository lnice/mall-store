<template>
    <div class="usercenter">
        <el-row>
            <el-col :span="24">
                <center-top/>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="24">
                <center-table/>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import centerTop from '@/components/users/right/center/centerTop.vue'
import centerTable from '@/components/users/right/center/table.vue'
export default {
    layout: 'users',
    components: {
        centerTop,
        centerTable
    }
}
</script>

<style lang="less">

</style>
