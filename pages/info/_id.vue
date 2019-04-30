<template>
    <div class="w1200">
        <el-row class="art_main">
            <el-col :span="16">
                <i-box :data="iboxInfo"/>
                <i-foot :data="ifootData"/>
            </el-col>
            <el-col :span="8">
                <i-list :data="ilistData"/>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import iBox from '@/components/info/box.vue';
import iFoot from '@/components/info/foot.vue';
import iList from '@/components/info/list.vue';
export default {
    validate ({ params }) {
        // 必须是number类型
        return /^\d+$/.test(params.id)
    },
    data () {
        return {
            iboxInfo: {
                title: '新手必看：手机上如何用淘口令领淘宝优惠券下单？',
                startTime: '2019-04-30 12:00',
                endTime: '2019-04-30',
                cont: '<p>新手必看：手机上如何用淘口令领淘宝优惠券下单？新手必看：手机上如何用淘口令领淘宝优惠券下单？新手必看：手机上如何用淘口令领淘宝优惠券下单？</p>',
                quantity: 9999,
                taglist: [{
                    name: '淘口令',
                    link: '#'
                }]
            },
            ifootData: {
                title: '大家正在看',
                list: [{
                    name: '淘宝优惠券代理的骗局，卧槽，吓死宝宝了！！',
                    link: '#'
                },{
                    name: '淘宝优惠券代理的骗局，卧槽，吓死宝宝了！！',
                    link: '#'
                }],
                next: {
                    name: '斐讯路由器免单，拍下再赚50元，送32g优盘',
                    link: '#'
                },
                prev: {
                    name: '5月23日：0点秒杀单汇总，好商品超多，先抢券',
                    link: '#'
                }
            },
            ilistData: {
                title: '24小时热文',
                list: [{
                    oImg: '',
                    title: '淘宝优惠券代理的骗局，卧槽，吓死宝宝了！！',
                    link: '#'
                }]
            },
        }
    },
    components: {
        iBox,
        iFoot,
        iList
    }
}
</script>

<style lang="less">
@import '~assets/css/info/index.less';
</style>
