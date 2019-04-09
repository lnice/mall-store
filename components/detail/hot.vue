<template>
    <div class="detail-hot">
        <h3>今日最热</h3>
        <ul class="list">
            <li v-for="(item, idx) in data.slice(0, 5)" :key="idx">
                <a href="#">
                    <img :src="item.oImg">
                    <div class="info">
                        <h5>{{ item.title }}</h5>
                        <p>¥<b>{{ item.price }}</b><span>已售{{ item.salesNum }}件</span></p>
                    </div>
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props: {
        data: Array
    }
}
</script>

<style lang="less">
@import '~assets/css/detail/hot.less';
</style>
