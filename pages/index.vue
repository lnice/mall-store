<template>
  <section class="page-index">
    <div class="banner-box">
      <el-row class="banner">
        <el-col :span="24">
          <banner />
        </el-col>
      </el-row>
      <banner-link :showLink="showLink"/>
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
          <img src="@/assets/img/index_new.jpg">
        </nuxt-link>
        <nuxt-link to="/hot" target="_blank">
          <img src="@/assets/img/index_brand.jpg">
        </nuxt-link>
        <nuxt-link to="/new" target="_blank">
          <img src="@/assets/img/index_jiu.jpg">
        </nuxt-link>
        <nuxt-link to="/new" target="_blank">
          <img src="@/assets/img/index_quan.jpg">
        </nuxt-link>
      </div>
      <div class="todayNew">
        <index-title title="今日上新" mark="NEW" :link="null">
          <div class="ring">每天<em>0:00</em>准时上新</div>
        </index-title>
        <template>
          <listshop :listinfo="(listShopInfo.data ? listShopInfo.data.goods_list : {})"/>
        </template>
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
  </section>
</template>

<script>
import banner from '@/components/index/banner.vue'
import bannerLink from '@/components/index/link.vue'
import indexTitle from '@/components/index/title.vue'
import listchoice from '@/components/list/choice.vue'
import listsmall from '@/components/list/listsmall.vue'
import listshop from '@/components/list/listshop.vue'
import axios from 'axios'


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
      pageSize: 40,
      listShopInfo: {},
      listChoiceInfo: [{
        oImg: 'http://img.alicdn.com/imgextra/i4/2973632120/O1CN01O2RKGo1RX09CqjcCg_!!2973632120.jpg_400x400.jpg',
        title: '4月4日—精选90款春夏睡衣，透气舒适好看~',
        link: '/detail/1891'
      },{
        oImg: 'http://img.alicdn.com/imgextra/i3/3496221698/O1CN01VymHpU1OPj0kzXKAB_!!3496221698.jpg_400x400.jpg',
        title: '4月3日—精选80多款时尚小白鞋，简单大方~',
        link: '/detail/1891'
      },{
        oImg: 'http://img.alicdn.com/imgextra/i3/4279712705/O1CN01E8dF5t1VqvrkgyobB_!!4279712705.jpg_400x400.jpg',
        title: '4月2日—精选100款阔腿裤，舒适透气，时尚范~',
        link: '/detail/1891'
      }],
    }
  },
  async asyncData (context) {
      // 今日必抢
      let lsi_data = await axios.post('/goodslists', {
            page: 1,
            pageSize: 6,
          });
      // 分类链接
      let col_data = await axios.get('/getCategory');
      // 今日精选
      // let choice_data = await axios.post('')
      return {
        listSmallInfo :  lsi_data.data.data.goods_list,
        showLink: col_data.data.data,
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
