<template>
    <el-row class="show-info">
      <el-col class="show-link">
        <div v-for="(item, idx) in showLink" :key="idx" class="b_listrow">
          <a :href="item.link" target="_blank"><b>{{ item.title }}</b></a>
          <a :href="item.link" v-for="(item, idx) in item.child" :key="idx" target="_blank">{{ item.title }}</a>
        </div>
      </el-col>
      <el-col class="show-advert">
        <div class="showAing">
          <a href="#" target="_blank" class="new">
            <p><b>{{showAdvert.time}}</b>上新</p>今日新券<em>{{showAdvert.new}}</em>款
          </a>
          <a href="#" target="_blank" class="jiu">
            <p>抢<b>9.9</b>包邮</p>低价精选<em>{{showAdvert.low}}</em>款
          </a>
          <a href="#" target="_blank" class="pai">
            <p>品牌优惠券</p>热卖品牌<em>{{showAdvert.hot}}</em>款
          </a>
        </div>
      </el-col>
    </el-row>
</template>

<script>
export default {
    data () {
        return {
            showLink: [{
                title: '女装',
                link: '#',
                child: [{
                title: 'T恤',
                link: '#'
                },{
                title: '连衣裙',
                link: '#'
                },{
                title: '阔腿裤',
                link: '#'
                },{
                title: '妈妈装',
                link: '#'
                }]
            },{
                title: '鞋子',
                link: '#',
                child: [{
                title: '小白鞋',
                link: '#'
                },{
                title: '运动鞋',
                link: '#'
                },{
                title: '男鞋',
                link: '#'
                },{
                title: '女鞋',
                link: '#'
                }]
            },{
                title: '包包',
                link: '#',
                child: [{
                title: '行李箱',
                link: '#'
                },{
                title: '斜挎包',
                link: '#'
                },{
                title: '双肩包',
                link: '#'
                },{
                title: '钱包',
                link: '#'
                }]
            }],
            showAdvert: {
                time: '0:00',
                new: 516,
                low: 1923,
                hot: 1606
            }
        }
    }
}
</script>

<style>

</style>
