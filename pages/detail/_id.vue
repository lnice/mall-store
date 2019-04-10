<template>
    <div class="w1200">
        <local :data="localData"/>
        <el-row :gutter="16">
            <el-col :span="18">
                <shop-info :data="infoData"/>
            </el-col>
            <el-col :span="6">
                <detail-hot :data="hotList" title="今日最热" :num="5"/>
            </el-col>
        </el-row>
        <detail-list title="大家还看了" :data="listData"/>
    </div>
</template>

<script>
import local from '@/components/detail/local.vue'
import shopInfo from '@/components/detail/shopinfo.vue'
import detailHot from '@/components/detail/hot.vue'
import detailList from '@/components/detail/list.vue'
export default {
    validate ({ params }) {
        // 必须是number类型
        return /^\d+$/.test(params.id)
    },
    computed: {
        id () {
            return this.$router.history.current.params.id
        }
    },
    data () {
        return {
            localData: {
                type: '居家百货',
                page: '【飞利浦】2.5w节能led灯泡'
            },
            infoData: {
                title: '【包邮】【飞利浦】2.5w节能led灯泡',
                introduce: '【飞利浦灯泡，一颗寿命长达3年】飞利浦知名国际大品牌，品质保证，即开即亮，节能更省电，抗雷击设计，使用寿命更长，多种规格可选',
                price: 2.5,
                ratePrice: 1.5,
                salesNum: 56029,
                coupon: 1,
                frank: true,
                oImg: 'http://img.alicdn.com/imgextra/i4/704720228/O1CN011DYSkrdshrTS7XH_!!704720228.jpg_400x400.jpg',
                keys: ['飞碟', '螺口', '飞利浦', '小球', '电灯']
            },
            hotList: [{
                link: '/item/123',
                oImg: 'http://img.alicdn.com/imgextra/i1/2041105374/O1CN01VqxL3H1pZKxS49FMB_!!2041105374.jpg_60x60.jpg',
                title: '【皎洁】四件套3液+1器电热器1111',
                price: 9.9,
                salesNum: 698511
            },{
                link: '/item/123',
                oImg: 'http://img.alicdn.com/imgextra/i4/2219509495/O1CN012K0l6OljsiyCs2a_!!2219509495.jpg_60x60.jpg',
                title: '【皎洁】四件套3液+1器电热器1111',
                price: 9.9,
                salesNum: 698511
            },{
                link: '/item/123',
                oImg: 'http://img.alicdn.com/imgextra/i1/2041105374/O1CN01VqxL3H1pZKxS49FMB_!!2041105374.jpg_60x60.jpg',
                title: '【皎洁】四件套3液+1器电热器1111',
                price: 9.9,
                salesNum: 698511
            },{
                link: '/item/123',
                oImg: 'http://img.alicdn.com/imgextra/i4/2219509495/O1CN012K0l6OljsiyCs2a_!!2219509495.jpg_60x60.jpg',
                title: '【皎洁】四件套3液+1器电热器1111',
                price: 9.9,
                salesNum: 698511
            },{
                link: '/item/123',
                oImg: 'http://img.alicdn.com/imgextra/i1/2041105374/O1CN01VqxL3H1pZKxS49FMB_!!2041105374.jpg_60x60.jpg',
                title: '【皎洁】四件套3液+1器电热器1111',
                price: 9.9,
                salesNum: 698511
            },{
                link: '/item/123',
                oImg: 'http://img.alicdn.com/imgextra/i1/2041105374/O1CN01VqxL3H1pZKxS49FMB_!!2041105374.jpg_60x60.jpg',
                title: '【皎洁】四件套3液+1器电热器1111',
                price: 9.9,
                salesNum: 698511
            }],
            listData: [{
                link: '/detail/123',
                tag: 'brand',
                oImg: 'http://img.alicdn.com/imgextra/i2/849441921/O1CN011Q3rJmyGonlhB7t_!!849441921.jpg_300x300.jpg',
                source: 'tm',
                title: '【2瓶装】小白鞋清洁剂+送鞋擦',
                costPrice: 9.9,
                ratePrice: 6.9,
                market: 45293,
                rateLink: '/detail/321',
                coupon: 3
            },{
                link: '/detail/123',
                tag: 'new',
                oImg: 'http://img.alicdn.com/imgextra/i2/849441921/O1CN011Q3rJmyGonlhB7t_!!849441921.jpg_300x300.jpg',
                source: 'tb',
                title: '【2瓶装】小白鞋清洁剂+送鞋擦',
                costPrice: 9.9,
                ratePrice: 6.9,
                market: 45293,
                rateLink: '/detail/321',
                coupon: 3
            }]
        }
    },
    components: {
        local,
        shopInfo,
        detailHot,
        detailList
    }
}
</script>

<style lang="less">

</style>
