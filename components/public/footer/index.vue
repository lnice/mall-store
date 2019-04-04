<template>
  <footer class="m-footer">
    <ul class="web_help w1200">
      <li>
        <a href="#" target="_blank" alt="泡美丽APP下载" title="泡美丽APP下载">
          <img src="http://www.paomeili.com/upload/webpic/ma_100.png">
        </a>
      </li>
      <li v-for="(item, idx) in quick" :key="idx">
        <p>
          {{item.title}}
        </p>
        <nuxt-link v-for="(itemChild, idx) in item.link" :to="itemChild.href" :key="idx" target="_blank" v-html="itemChild.name"></nuxt-link>
      </li>
      <li class="r">
        <a href="#" target="_blank">泡美丽在线客服<br>
        <em>{{ callTime }}</em></a>
      </li>
    </ul>
    <div class="web_flink w1200">
      友情链接：
      <a :href="item.link" target="_blank" v-for="(item, index) in friendlyLink" :key="index">{{ item.name }}</a>
    </div>
    <ul class="web_pic w1200">
      <li class="r">
        <a href="#" 
          target="_blank" rel="nofollow"><img src="http://www.paomeili.com/upload/webpic/foot_315.gif"></a>
        <a href="#" 
          target="_blank" rel="nofollow"><img src="http://www.paomeili.com/upload/webpic/foot_liang.gif"></a>
        <a href="#" 
          target="_blank" rel="nofollow"><img src="http://www.paomeili.com/upload/webpic/foot_icp.gif"></a>
        <a href="#" 
          target="_blank" rel="nofollow"><img src="http://www.paomeili.com/upload/webpic/foot_zhuce.gif"></a>
        <a href="#" 
          target="_blank" rel="nofollow"><img src="http://www.paomeili.com/upload/webpic/foot_safe.gif"></a>
      </li>
      <li>
        <p>
          泡美丽，800万<a href="#">淘宝优惠券</a>免费领取，好便宜！
        </p>
        {{ notice }}
      </li>
    </ul>
  </footer>
</template>

<script>
export default {
  data () {
    return {
        quick: [{
            title: '新手上路',
            link: [{
                name: '淘宝优惠券是什么',
                href: '#'
            },{
                name: '淘宝优惠券靠谱吗',
                href: '#'
            },{
                name: '淘宝优惠券怎么领取',
                href: '#'
            }]
        },{
            title: '优惠活动',
            link: [{
                name: '优惠券头条',
                href: '#'
            },{
                name: '优惠券百科',
                href: '#'
            },{
                name: '优惠券活动',
                href: '#'
            }]
        },{
            title: '关于我们',
            link: [{
                name: '网站地图',
                href: '#'
            },{
                name: '服务条款',
                href: '#'
            },{
                name: '关于泡美丽',
                href: '#'
            }]
        },{
            title: '商务合作',
            link: [{
                name: '<b>商家报名</b>',
                href: '#'
            },{
                name: '友情链接',
                href: '#'
            },{
                name: '联系我们',
                href: '#'
            }]
        },{
            title: '下次怎么来',
            link: [{
                name: '加入收藏',
                href: '#'
            },{
                name: '百度<b>泡美丽</b>',
                href: '#'
            },{
                name: '泡美丽公众号',
                href: '#'
            }]
        }],
        friendlyLink: [{
            name: '淘宝优惠券',
            link: '#'
        },{
            name: '找券网',
            link: '#'
        },{
            name: '粉丝福利购',
            link: '#'
        },{
            name: '淘宝优惠券',
            link: '#'
        },{
            name: '找券网',
            link: '#'
        },{
            name: '粉丝福利购',
            link: '#'
        }],
        notice: 'Copyright © PaoMeiLi.com 2015-2020 宁波久美信息科技有限公司',
        callTime: '周一至周六：09:00-23:00'
    }
  }
}
</script>


<style lang="less">
@import '~assets/css/public/footer.less';
</style>
