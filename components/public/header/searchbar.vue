<template>
    <div class="w1200">
        <el-row>
            <el-col :span="5" class="logo" tag="a" href="/">
                <img src="@/assets/img/head_logo.png" alt="">
            </el-col>
            <el-col :span="12" class="search">
                <div class="searchbox">
                    <label>搜优惠券</label>
                    <input type="text" 
                        placeholder="800万优惠券，一键搜索~"
                        autocomplete="off"
                        :class="{'act': (isFocus || search)}"
                        v-model="search" 
                        @focus="focus" 
                        @blur="blur"
                        @keyup="input" />
                    <button type="submit"></button>
                </div>
                <transition name="el-zoom-in-top">
                    <div class="hot" v-show="isFocus">
                        <div v-if="!this.search">
                            <a href="#" class="t">请输入<em>关键字</em>或粘贴<em>淘宝商品标题</em>，即可搜券！大家正在搜：</a>
                            <a :href="item.link" v-for="(item, idx) in hotData" :key="idx">{{item.title}}</a>
                        </div>
                        <div v-else>
                            <h4>相关热搜：</h4>
                            <ul class="hotshowlist" v-if="showData.length > 0">
                                <li v-for="(item, idx) in showData" :key="idx" @click="seTed(item)">
                                    <a href="javascript:;">{{ item[0] }}</a>
                                </li>
                            </ul>
                            <div class="vhotnone" v-else>
                                暂无相关热门词
                            </div>
                        </div>
                    </div>
                </transition>
            </el-col>
            <el-col :span="7" class="right">
                <img src="@/assets/img/head_hao.png" alt="">
            </el-col>
        </el-row>
    </div>
</template>

<script>
import jsonp from 'jsonp'
export default {
  data () {
    return {
        isFocus: false,
        search: '',
        hotData: [
            { title: '耳机', link: '#'},
            { title: '零食', link: '#'},
            { title: '面膜', link: '#'},
        ],
        showData: []
    }
  },
  methods: {
      focus () {
          this.isFocus = true;
      },
      blur () {
          setTimeout(() => {
            this.isFocus = false;
          }, 100);
      },
      input () {
            jsonp(`https://suggest.taobao.com/sug?area=etao&code=utf-8&callback=data&q=${this.search}`, (err, data) => {
                if(!err) this.showData = data.result;
            })
      },
      seTed (item) {
          this.search = item[0];
      }
  },
  computed: {
      
  }
}
</script>

<style>

</style>
