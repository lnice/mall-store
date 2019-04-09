<template>
    <div class="postage">
        <inbanner :img="oDataInfo.oImg"/>
        <div class="w1200">
            <inmenu :menu="menuLinks"/>
            <list-shop :listinfo="oDataInfo.listShop.data"/>
            <div class="page-center">
                <el-pagination
                background
                layout="prev, pager, next"
                :total="oDataInfo.listShop.total">
                </el-pagination>
                <br />
            </div>
        </div>
    </div>
</template>

<script>
import inbanner from '@/components/public/show/inbanner.vue'
import inmenu from '@/components/public/show/inmenu.vue'
import listShop from '@/components/list/listshop.vue'
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
            data.listShop = {
                    total: 100,
                    data: [{
                        oImg: 'http://img.alicdn.com/imgextra/i3/2024058652/TB2fb1fdMfH8KJjy1zcXXcTzpXa_!!2024058652.jpg_300x300.jpg',
                        title: '苹果通用弯头数据线1.2m*2条装',
                        link: '/detail/54116',
                        rateLink: '/detail/5111',
                        costPrice: 24,
                        ratePrice: 14,
                        market: 207114,
                        coupon: 10,
                        source: 'tm',
                        tag: 'new'
                    },{
                        oImg: 'http://img.alicdn.com/imgextra/i2/1063264201/TB2QJW5opkoBKNjSZFEXXbrEVXa_!!1063264201.jpg_300x300.jpg',
                        title: '妃琳卡  持久保湿口红5支礼盒装',
                        link: '/detail/54116',
                        rateLink: '/detail/5111',
                        costPrice: 56,
                        ratePrice: 55,
                        market: 207114,
                        coupon: 5,
                        source: 'tb',
                        tag: 'brand'
                    }]
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
            },]
        }
    },
    components: {
        inbanner,
        listShop,
        inmenu
    }
}
</script>

<style lang="less">
</style>
