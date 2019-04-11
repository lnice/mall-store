<template>
    <div class="dissert">
        <inbanner img="http://pic.paomeili.com/cat_quan.png"/>
        <div class="w1200">
            <div class="title">
                <strong>
                    优惠券专题 <small>精选最优品</small>
                </strong>
            </div>
            <el-row :gutter="0">
                <el-col :span="17">
                    <d-list :listinfo="listData"/>
                </el-col>
                <el-col :span="7">
                    <div class="wins">
                        <el-tabs type="border-card" :stretch="true">
                            <el-tab-pane >
                                <span slot="label">优惠券头条</span>
                                <ul>
                                    <li v-for="(item, idx) in topLineList" :key="idx">
                                        <art-list :info="item"/>
                                    </li>
                                </ul>
                            </el-tab-pane>
                            <el-tab-pane>
                                <span slot="label">优惠券百科</span>
                                <ul>
                                    <li v-for="(item, idx) in topLineList" :key="idx">
                                        <art-list :info="item"/>
                                    </li>
                                </ul>
                            </el-tab-pane>
                            <el-tab-pane>
                                <span slot="label">优惠券活动</span>
                                <ul>
                                    <li v-for="(item, idx) in topLineList" :key="idx">
                                        <art-list :info="item"/>
                                    </li>
                                </ul>
                            </el-tab-pane>
                        </el-tabs>
                        <div class="advict">
                            <a href="#"><img src="http://pic.paomeili.com/pic_jifen.png"></a>
                        </div>
                        <div class="tolist">
                            <to-list :data="toListData" title="今日10件" color="#2E78E4"/>
                        </div>
                        <div class="advict">
                            <a href="#"><img src="http://pic.paomeili.com/pic_chou.png"></a>
                        </div>
                        <div class="advict">
                            <a href="#"><img src="http://pic.paomeili.com/pic_qun.jpg"></a>
                        </div>
                    </div>
                </el-col>
            </el-row>
            <div class="page-center">
                <el-pagination
                    background
                    layout="prev, pager, next"
                    :total="listData.total">
                </el-pagination>
            </div>
            <br />
            <br />
        </div>
    </div>
</template>

<script>
import inbanner from '@/components/public/show/inbanner.vue'
import dList from '@/components/list/dissertlist.vue'
import toList from '@/components/detail/hot.vue'
import artList from '@/components/list/artlist.vue'
export default {
    data () {
        return {
            listData: {
                total: 100,
                data: [{
                    title: '4月10日—精选100款精美配饰，出去玩，美呀~',
                    link: '/topic/123',
                    oImg: 'http://img.alicdn.com/imgextra/i4/772461325/O1CN01Wv2VEZ1LetI0KPoOz_!!772461325.jpg_200x200.jpg',
                    intro: '马上就要5.1了，出去玩当然离不开小饰品了~~今天小美给大家精选了100多款时尚小饰品，今年时尚新款，棒球帽，太阳帽，耳钉，太阳镜，手表，小首饰等，自带'
                },{
                    title: '4月10日—精选100款精美配饰，出去玩，美呀~',
                    link: '/topic/123',
                    oImg: 'http://img.alicdn.com/imgextra/i4/772461325/O1CN01Wv2VEZ1LetI0KPoOz_!!772461325.jpg_200x200.jpg',
                    intro: '马上就要5.1了，出去玩当然离不开小饰品了~~今天小美给大家精选了100多款时尚小饰品，今年时尚新款，棒球帽，太阳帽，耳钉，太阳镜，手表，小首饰等，自带'
                },{
                    title: '4月10日—精选100款精美配饰，出去玩，美呀~',
                    link: '/topic/123',
                    oImg: 'http://img.alicdn.com/imgextra/i4/772461325/O1CN01Wv2VEZ1LetI0KPoOz_!!772461325.jpg_200x200.jpg',
                    intro: '马上就要5.1了，出去玩当然离不开小饰品了~~今天小美给大家精选了100多款时尚小饰品，今年时尚新款，棒球帽，太阳帽，耳钉，太阳镜，手表，小首饰等，自带'
                },{
                    title: '4月10日—精选100款精美配饰，出去玩，美呀~',
                    link: '/topic/123',
                    oImg: 'http://img.alicdn.com/imgextra/i4/772461325/O1CN01Wv2VEZ1LetI0KPoOz_!!772461325.jpg_200x200.jpg',
                    intro: '马上就要5.1了，出去玩当然离不开小饰品了~~今天小美给大家精选了100多款时尚小饰品，今年时尚新款，棒球帽，太阳帽，耳钉，太阳镜，手表，小首饰等，自带'
                },{
                    title: '4月10日—精选100款精美配饰，出去玩，美呀~',
                    link: '/topic/123',
                    oImg: 'http://img.alicdn.com/imgextra/i4/772461325/O1CN01Wv2VEZ1LetI0KPoOz_!!772461325.jpg_200x200.jpg',
                    intro: '马上就要5.1了，出去玩当然离不开小饰品了~~今天小美给大家精选了100多款时尚小饰品，今年时尚新款，棒球帽，太阳帽，耳钉，太阳镜，手表，小首饰等，自带'
                },{
                    title: '4月10日—精选100款精美配饰，出去玩，美呀~',
                    link: '/topic/123',
                    oImg: 'http://img.alicdn.com/imgextra/i4/772461325/O1CN01Wv2VEZ1LetI0KPoOz_!!772461325.jpg_200x200.jpg',
                    intro: '马上就要5.1了，出去玩当然离不开小饰品了~~今天小美给大家精选了100多款时尚小饰品，今年时尚新款，棒球帽，太阳帽，耳钉，太阳镜，手表，小首饰等，自带'
                },{
                    title: '4月10日—精选100款精美配饰，出去玩，美呀~',
                    link: '/topic/123',
                    oImg: 'http://img.alicdn.com/imgextra/i4/772461325/O1CN01Wv2VEZ1LetI0KPoOz_!!772461325.jpg_200x200.jpg',
                    intro: '马上就要5.1了，出去玩当然离不开小饰品了~~今天小美给大家精选了100多款时尚小饰品，今年时尚新款，棒球帽，太阳帽，耳钉，太阳镜，手表，小首饰等，自带'
                }]
            },
            topLineList: [{
                oImg: 'http://img.paomeili.com/artsuo/art_728.jpg',
                title: '想要生活过得好：学会断舍离，定期扔东西',
                link: '/item/123'
            },{
                oImg: 'http://img.paomeili.com/artsuo/art_723.jpg',
                title: '论一条好内裤的重要性，带你了解内裤知识，必读！',
                link: '/item/123'
            },{
                oImg: 'http://img.paomeili.com/artsuo/art_721.jpg',
                title: '每天被拉进各种淘宝优惠券微信qq群，很烦怎么办？',
                link: '/item/123'
            }],
            toListData: [{
                link: '/item/123',
                oImg: 'http://img.alicdn.com/imgextra/i3/1603372607/O1CN01vtlttL1V832rEEJCl_!!1603372607.jpg_70x70.jpg',
                title: '【皎洁】四件套3液+1器电热器1111',
                price: 9.9,
                salesNum: 698231
            },{
                link: '/item/123',
                oImg: 'http://img.alicdn.com/bao/uploaded/TB1fpXSk3HqK1RjSZFEXXcGMXXa.png_70x70.jpg',
                title: '【皎洁】四件套3液+1器电热器1111',
                price: 9.9,
                salesNum: 698231
            },{
                link: '/item/123',
                oImg: 'http://img.alicdn.com/imgextra/i3/2454117151/O1CN01Xdery722hCmPbY2oZ_!!2454117151.jpg_70x70.jpg',
                title: '【皎洁】四件套3液+1器电热器1111',
                price: 9.9,
                salesNum: 698231
            }]
        }
    },
    components: {
        inbanner,
        dList,
        artList,
        toList
    }
}
</script>

<style lang="less">
@import '~assets/css/dissert/index.less';
</style>
