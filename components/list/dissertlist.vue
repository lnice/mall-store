<template>
    <div class="dissertlist">
        <ul class="d-list">
            <li v-for="(item, idx) in listinfo.data" :key="idx">
                <a :href="item.link">
                    <div class="left">
                        <img :src="item.oImg" alt="">
                    </div>
                    <div class="right">
                        <h2>{{ item.title }}</h2>
                        <p v-html="item.intro">
                        </p>
                    </div>
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props: {
        listinfo: Object
    }
}
</script>

<style lang="less">
@import '~assets/css/dissert/dissertlist.less';
</style>
