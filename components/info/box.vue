<template>
    <div class="art_lbox">
        <h1>{{ data.title }}</h1>
        <h6>发布：{{ data.startTime }}<em>阅读：{{ data.quantity }}</em>最后更新：{{ data.endTime }}</h6>
        <div class="art_cont" v-html="data.cont">
        </div>
        <div class="art_link">
            泡美丽淘宝优惠券原创，转载请注明出处：<a href="#" target="_blank">http://www.paomeili.com/art/bai435.html</a>
            <span>标签：
                <a target="_blank" v-for="(item, idx) in data.taglist" :key="idx" :href="item.link" >{{ item.name }}</a>
            </span>
        </div>
    </div>
</template>


<script>
export default {
    props: ['data']
}
</script>
