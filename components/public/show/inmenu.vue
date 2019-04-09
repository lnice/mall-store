<template>
    <div class="cat_memu">
        <nuxt-link :to="item.link" v-for="(item, idx) in menu" :key="idx">{{ item.title }}</nuxt-link>
    </div>
</template>

<script>
export default {
    props:{
        menu: Array
    }
}
</script>

<style lang="less">
.cat_memu {
    margin: 20px -13px;
    overflow: hidden;
    a {
        display: block;
        float: left;
        margin: 0px 13px;
        width: 75px;
        height: 75px;
        line-height: 75px;
        text-align: center;
        border-radius: 50px;
        background: #d5d5d5;
        font-size: 17px;
        letter-spacing: 2px;
        color: #555;
        text-decoration: none;
        &:hover,&.nuxt-link-active {
            background: #FD4C5F;
            color: #FFF;
        }
        
    }
}
</style>
