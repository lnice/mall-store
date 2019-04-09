<template>
    <div class="layoutbanner">
        <div class="banner" :style="`background:url(${img}) no-repeat center ${bgcolor || ''}; height:${height || '200px'};`">
        </div>
    </div>
</template>

<script>
export default {
    props:[ 'img', 'height', 'bgcolor']
}
</script>

<style lang="less">
</style>
