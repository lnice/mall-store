<template>
    <div class="app">
        <div class="header">
            <div class="app_nav">
                <a href="/" class="app_logo">
                <img src="@/assets/img/app_logo.png" alt="">
                </a>
                <a href="javascript:;" target="_blank">手机网页版</a>
                <a href="javascript:;" target="_blank">iPhone</a>
                <a href="javascript:;" target="_blank">Android</a>
            </div>
        </div>
        <div class="app_main">
            <div class="app_img">
                <img src="@/assets/img/left.png" alt="">
            </div>
            <div class="app_txt">
                <h1>手机泡美丽</h1>
                <h2>APP仅3M，还没1张照片大，不占内存~</h2>
                <div class="app_box">
                <img src="@/assets/img/ma.png" alt="">
                <h3>手机扫描二维码下载</h3>
                <a href="javascript:;" target="_blank" class="A">Android下载</a>
                <a href="javascript:;" target="_blank" class="P">iPhone下载</a>
                <a href="javascript:;" target="_blank">手机网页版</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    layout: 'blank'
}
</script>

<style lang="less">
@import '~assets/css/app/index.less';
</style>
