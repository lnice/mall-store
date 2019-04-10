<template>
    <div class="artlist">
        <a :href="info.link">
            <img :src="info.oImg" alt="">
            <span>{{ info.title }}</span>
        </a>
    </div>
</template>

<script>
export default {
    props: {
        info: Object
    }
}
</script>

<style lang="less">
.artlist {
    position: relative;
    background: #fff;
    padding: 13px 5px 12px;
    border-bottom: 1px solid #f5f5f5;
    overflow: hidden;
    img {
        float: left;
        width: 83px;
        height: 55px;
    }
    span {
        float: right;
        width: 172px;
        height: 50px;
        line-height: 24px;
        margin-top: 2px;
        color: #666;
        font-size: 15px;
    }
    &:hover {
        background-color: #f5f5f5;
        span {
            color: #FF4A86;
        }
    }
}
</style>
