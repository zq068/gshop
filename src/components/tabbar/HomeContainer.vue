<template>
  <div>

    <!-- 轮播图 -->
    <mt-swipe :auto="2000" class="lunbotu" :speed='300'>
      <mt-swipe-item v-for="item in lunbotuList" :key="item.img">
        <img :src="item.img" alt="">
      </mt-swipe-item>
    </mt-swipe>

    <!-- 六宫格 -->
    <ul class="mui-table-view mui-grid-view mui-grid-9 ul">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/newslist">
          <!-- <span class="mui-icon mui-icon-home"></span> -->
          <img src="../../images/menu1.png" alt="">

          <div class="mui-media-body">新闻资讯</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/photolist">
          <!-- <span class="mui-icon mui-icon-email"><span class="mui-badge">5</span></span> -->
          <img src="../../images/menu2.png" alt="">

          <div class="mui-media-body">图片分享</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
          <!-- <span class="mui-icon mui-icon-chatbubble"></span>
           -->
          <img src="../../images/menu3.png" alt="">

          <div class="mui-media-body">商品购买</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
          <!-- <span class="mui-icon mui-icon-location"></span> -->
          <img src="../../images/menu4.png" alt="">

          <div class="mui-media-body">留言反馈</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
          <!-- <span class="mui-icon mui-icon-search"></span> -->
          <img src="../../images/menu5.png" alt="">

          <div class="mui-media-body">视频专区</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
          <!-- <span class="mui-icon mui-icon-phone"></span> -->
          <img src="../../images/menu6.png" alt="">

          <div class="mui-media-body">联系我们</div>
        </a>
      </li>
    </ul>

  </div>
</template>

<script>
import { Toast } from 'mint-ui'

export default {
  components: {},
  props: {},
  data() {
    return {
      lunbotuList: []
    }
  },
  watch: {},
  computed: {},
  methods: {
    getLunbotu() {
      //获取轮播图数据
      this.$http.get('api/getlunbo').then(result => {
        if (result.body.status === 0) {
          this.lunbotuList = result.body.message
        } else {
          Toast('加载失败')
        }
      })
    }
  },
  created() {
    this.getLunbotu()
  },
  mounted() {}
}
</script>
<style lang="scss" scoped>
.mint-swipe {
  height: 150px;
  .mint-swipe-item {
    img {
      width: 100%;
      height: 100%;
    }
    &:nth-child(1) {
      background-color: red;
    }
    &:nth-child(2) {
      background-color: blue;
    }
    &:nth-child(3) {
      background-color: black;
    }
  }
}
.mui-grid-view.mui-grid-9 {
  background-color: #fff;
  border: none;
  li {
    border: none;
  }
  img {
    // background-size: 50%;
    height: 60px;
    width: 60px;
  }
  .mui-media-body {
    font-size: 13px;
  }
}
</style>