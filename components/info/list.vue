<template>
    <div class="art_list">
        <div class="art_jian">
            <h2>{{ data.title }}</h2>
            <li v-for="(item, idx) in data.list" :key="idx">
                <a href="#" target="_blank">
                    <img :src="item.oImg"/>
                    <h3>{{ item.title }}</h3>
                </a>
            </li>
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
