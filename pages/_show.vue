<template>
    <div class="postage">
        <inbanner :img="oDataInfo.oImg"/>
        <div class="w1200 mt-5">
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
import listShop from '@/components/list/listshop.vue'
export default {
    validate ({ params }) {
        return params.show === 'brand' || params.show === 'postage'
    },
    computed: {
        oDataInfo () {
            let page = this.$router.history.current.params.show;
            let data = {};
            switch(page){
                case 'brand': 
                    data.oImg = 'http://pic.paomeili.com/cat_brand.jpg'
                    break;
                case 'postage':
                    data.oImg = 'http://pic.paomeili.com/cat_jiu.png'
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
        }
    },
    components: {
        inbanner,
        listShop
    }
}
</script>

<style lang="less">
</style>
