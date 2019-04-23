<template>
    <div class="detail-hot">
        <h3 v-if="title" :style="`color:${color || '#606266'}`">{{ title }}</h3>
        <ul class="list">
            <li v-for="(item, idx) in data.slice(0, num)" :key="idx">
                <a :href="item.link" target="_blank">
                    <img :src="item.oImg">
                    <div class="info">
                        <h5>{{ item.title }}</h5>
                        <p>¥<b>{{ item.price }}</b><span>已售{{ item.market }}件</span></p>
                    </div>
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props: {
        data: Array,
        title: String,
        color: String,
        num: Number
    }
}
</script>

<style lang="less">
@import '~assets/css/detail/hot.less';
</style>
