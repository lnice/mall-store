<template>
    <div class="postage">
        <inbanner :img="oDataInfo.oImg"/>
        <div class="w1200">
            <inmenu :menu="menuLinks"/>
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
import inmenu from '@/components/public/show/inmenu.vue'
import listshop from '@/components/list/listshop.vue'
import axios from 'axios'
export default {
    validate ({ params }) {
        return params.page
    },
    computed: {
        oDataInfo () {
            let page = this.$router.history.current.params.page;
            let data = {};
            switch(page){
                case 'new': 
                    data.oImg = 'http://pic.paomeili.com/cat_new.jpg'
                    break;
                case 'hot':
                    data.oImg = 'http://pic.paomeili.com/cat_hot.jpg'
                    break;
                case 'lady':
                    data.oImg = 'http://pic.paomeili.com/cid_lady.jpg'
                    break;
                default:
                    data.oImg = 'http://pic.paomeili.com/cat_new.jpg'
                    break;
            }
            return data
        }
    },
    data () {
        return {
            menuLinks:[{
                title: '上新',
                link: '/item/new'
            },{
                title: '最热',
                link: '/item/hot'
            },{
                title: '女装',
                link: '/item/lady'
            },{
                title: '鞋子',
                link: '/item/shoe'
            },{
                title: '包包',
                link: '/item/bag'
            },{
                title: '配饰',
                link: '/item/orna'
            },{
                title: '美妆',
                link: '/item/beauty'
            },{
                title: '内衣',
                link: '/item/waist'
            },{
                title: '居家',
                link: '/item/livehome'
            },{
                title: '母婴',
                link: '/item/mbaby'
            },{
                title: '美食',
                link: '/item/food'
            },{
                title: '数码',
                link: '/item/rical'
            },],
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
        listshop,
        inmenu
    }
}
</script>

<style lang="less">
</style>
