<template>
    <ul class="list-title">
        <nuxt-link v-for="(item, idx) in list" :key="idx" :to="item.link" tag="li">
            <a>{{ item.title }}</a>
        </nuxt-link>
        <li class="alllink">
            <slot name="right"></slot>
        </li>
    </ul>
</template>

<script>
export default {
    data () {
        return {
        }
    },
    props: ['list']
}
</script>

<style lang="less">
.list-title {
    position: relative;
    border-bottom: 1px dashed #ccc;
    height: 40px;
    li {
        float: left;
        line-height: 38px;
        padding: 0 25px;
        a {
            font-size: 16px;
            color:#666;
        }
        &.nuxt-link-active {
            border-bottom: 2px solid #FF3366;
        }
        &.nuxt-link-active a {    
            color: #FF3366;
            text-decoration: none;
        }
        &.alllink {
            float: right;
            padding: 0;
            a {
                color: #2E78E4;
                font-size: 12px;
                letter-spacing: 0px;
            }
        }
    }
}
</style>
