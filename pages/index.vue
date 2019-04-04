<template>
  <section class="page-index">
    <div class="banner-box">
      <el-row class="banner">
        <el-col :span="24">
          <banner />
        </el-col>
      </el-row>
      <banner-link/>
    </div>
    <div class="w1200">
      <div>
        <index-title title="今日必抢" mark="HOT" :link="imstLink"></index-title>
        <template>
          <listsmall :listinfo="listSmallInfo"/>
        </template>
      </div>
      <div>
        <index-title title="今日精选" mark="HOT" :link="imstLink"></index-title>
        <template>
          <listchoice :listinfo="listChoiceInfo"/>
        </template>
      </div>
      <div class="index_cat">
        <nuxt-link to="/new" target="_blank">
          <img src="http://www.paomeili.com/upload/webpic/index_new.jpg">
        </nuxt-link>
        <nuxt-link to="/hot" target="_blank">
          <img src="http://www.paomeili.com/upload/webpic/index_hot.jpg">
        </nuxt-link>
        <nuxt-link to="/new" target="_blank">
          <img src="http://www.paomeili.com/upload/webpic/index_jiu.jpg">
        </nuxt-link>
        <nuxt-link to="/new" target="_blank">
          <img src="http://www.paomeili.com/upload/webpic/index_quan.jpg">
        </nuxt-link>
      </div>
      <div class="todayNew">
        <index-title title="今日上新" mark="NEW" :link="null">
          <div class="ring">每天<em>0:00</em>准时上新</div>
        </index-title>
        <template>
          <listshop :listinfo="listShop.data"/>
        </template>
        <div class="page-center">
          <el-pagination
          background
          layout="prev, pager, next"
          :total="listShop.total">
          </el-pagination>
          <br />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import banner from '@/components/index/banner.vue'
import bannerLink from '@/components/index/link.vue'
import indexTitle from '@/components/index/title.vue'
import listsmall from '@/components/index/listsmall.vue'
import listchoice from '@/components/index/choice.vue'
import listshop from '@/components/index/listshop.vue'
export default {
  data () {
    return {
      imstLink: [{
        name: '今日上新',
        link: '/new'
      },{
        name: '超值优惠券',
        link: '/hot'
      },{
        name: '品牌优惠券',
        link: '/brand'
      }],
      choiceLink: [{
        name: '优惠专题',
        link: '/new'
      },{
        name: '优惠券头条',
        link: '/hot'
      },{
        name: '优惠券百科',
        link: '/brand'
      }],
      listSmallInfo: [{
        oImg: 'http://img.alicdn.com/imgextra/i1/2041105374/O1CN01VqxL3H1pZKxS49FMB_!!2041105374.jpg_300x300.jpg',
        link: '/item/44739',
        title: '【皎洁】四件套电热蚊香液3液+1器蚊香',
        price: '6.9',
        people: '366055'
      },{
        oImg: 'http://img.alicdn.com/imgextra/i2/3036670797/O1CN01krf98i1Hl4AdD7AlS_!!3036670797.jpg_300x300.jpg',
        link: '/item/44739',
        title: '【皎洁】四件套电热蚊香液3液+1器蚊香',
        price: '6.9',
        people: '366055'
      }],
      listChoiceInfo: [{
        oImg: 'http://img.alicdn.com/imgextra/i4/2973632120/O1CN01O2RKGo1RX09CqjcCg_!!2973632120.jpg_400x400.jpg',
        title: '4月4日—精选90款春夏睡衣，透气舒适好看~',
        link: '/item/1891'
      },{
        oImg: 'http://img.alicdn.com/imgextra/i3/3496221698/O1CN01VymHpU1OPj0kzXKAB_!!3496221698.jpg_400x400.jpg',
        title: '4月3日—精选80多款时尚小白鞋，简单大方~',
        link: '/item/1891'
      },{
        oImg: 'http://img.alicdn.com/imgextra/i3/4279712705/O1CN01E8dF5t1VqvrkgyobB_!!4279712705.jpg_400x400.jpg',
        title: '4月2日—精选100款阔腿裤，舒适透气，时尚范~',
        link: '/item/1891'
      }],
      listShop: {
        total: 100,
        data: [{
          oImg: 'http://img.alicdn.com/imgextra/i3/2024058652/TB2fb1fdMfH8KJjy1zcXXcTzpXa_!!2024058652.jpg_300x300.jpg',
          title: '苹果通用弯头数据线1.2m*2条装',
          link: '/item/54116',
          rateLink: '/item/5111',
          costPrice: 24,
          ratePrice: 14,
          market: 207114,
          coupon: 10,
          source: 'tm',
          tag: 'new'
        },{
          oImg: 'http://img.alicdn.com/imgextra/i2/1063264201/TB2QJW5opkoBKNjSZFEXXbrEVXa_!!1063264201.jpg_300x300.jpg',
          title: '妃琳卡  持久保湿口红5支礼盒装',
          link: '/item/54116',
          rateLink: '/item/5111',
          costPrice: 56,
          ratePrice: 55,
          market: 207114,
          coupon: 5,
          source: 'tb',
          tag: 'brand'
        }]
      }
    }
  },
  components: {
    banner,
    bannerLink,
    indexTitle,
    listsmall,
    listchoice,
    listshop
  }
}
</script>

<style lang="less">
@import '~assets/css/index/index.less';
</style>
