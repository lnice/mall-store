<template>
    <div class="postage">
        <inbanner img="http://pic.paomeili.com/cat_jiu.png"/>
        <div class="w1200 mt-5">
            <listshop :listinfo="(listShopInfo.data ? listShopInfo.data.goods_list : {})"/>
            <div class="page-center">
            <el-pagination
            background
            layout="prev, pager, next"
            :total="(listShopInfo.data ? listShopInfo.data.total_count : 1)"
            :page-size="pageSize"
            @current-change="changePage">
            </el-pagination>
            <br />
            </div>
        </div>
    </div>
</template>

<script>
import inbanner from '@/components/public/show/inbanner.vue'
import listshop from '@/components/list/listshop.vue'
import axios from 'axios'
export default {
    data () {
        return {
            pageSize: 40,
            listShopInfo: {},
        }
    },
    beforeCreate () {
        axios.post('/goodslists', {
            pageSize: this.pageSize
        }).then(({ data }) => {
            this.listShopInfo = data;
        }).catch((err) => {
            console.log(err)
        });
    },
    methods: {
        changePage (page) {
            axios.post('/goodslists', {
            page,
            pageSize: this.pageSize,
            }).then(({ data }) => {
            this.listShopInfo = data;
            }).catch((err) => {
            console.log(err)
            })
        }
    },
    components: {
        inbanner,
        listshop
    }
}
</script>

<style lang="less">
</style>
