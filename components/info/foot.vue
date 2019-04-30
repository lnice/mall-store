<template>
    <div class="art_foot">
        <div class="art_same">
            <h2>{{ data.title }}</h2>
            <li v-for="(item, idx) in data.list" :key="idx"><a :href="item.link" target="_blank">{{ item.name }}</a></li>
        </div>
        <div class="art_next">
                上一篇：
                <a :href="data.prev.link">{{ data.prev.name }}</a>
            <span>
                下一篇：
                <a :href="data.next.link">{{ data.next.name }}</a>
            </span>
        </div>
    </div>
</template>

<script>
export default {
    props: ['data']
}
</script>

<style>

</style>
