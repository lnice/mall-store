<template>
    <div class="text-center">
        <br><br>
        <br><br>
        {{ id }}
        <br><br>
        <br><br>
    </div>
</template>

<script>
export default {
    validate ({ params }) {
        // 必须是number类型
        return /^\d+$/.test(params.id)
    },
    computed: {
        id () {
            return this.$router.history.current.params.id
        }
    }
}
</script>

<style lang="less">

</style>
