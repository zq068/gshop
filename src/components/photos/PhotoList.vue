<template>
  <div>

    <!-- 顶部滑动块 -->
    <div id="slider" class="mui-slider">
      <div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
        <div class="mui-scroll">
          <a :class="['mui-control-item',item.id == 0 ? 'mui-active':'']" href="#item1mobile" data-wid="tab-top-subpage-1.html" v-for="item in cates" :key="item.id" @click="getPhotoList(item.id)">
            {{ item.title }}
          </a>
        </div>
      </div>

    </div>

    <!-- 内容区域 -->
    <ul class="photo-list">
      <router-link v-for="item in imgList" :key="item.id " :to="'/home/photoinfo/'+item.id" tag='li'>
        <img v-lazy="item.img_url">
        <div class="info">
          <h1 class="info-title">{{ item.title }}</h1>
          <div class="info-body">{{ item.zhaiyao }}</div>
        </div>
      </router-link>
    </ul>

  </div>
</template>

<script>
import mui from '../../lib/js/mui.min.js'

export default {
  components: {},
  props: {},
  data() {
    return {
      cates: [],
      imgList: []
    }
  },
  watch: {},
  computed: {},
  methods: {
    getAllCategory() {
      this.$http.get('api/getimgcategory').then(result => {
        if (result.body.status === 0) {
          result.body.message.unshift({ title: '全部', id: 0 })
          this.cates = result.body.message
        }
      })
    },
    getPhotoList(cateId) {
      this.$http.get('api/getimages/' + cateId).then(result => {
        if (result.body.status === 0) {
          this.imgList = result.body.message
        }
      })
    }
  },
  created() {
    this.getAllCategory()
    this.getPhotoList(0)
  },
  mounted() {
    mui('.mui-scroll-wrapper').scroll({
      deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    })
  }
}
</script>
<style lang="scss" scoped>
* {
  touch-action: pan-y;
}

.photo-list {
  padding: 10px;
  padding-bottom: 0;

  li {
    background-color: #ccc;
    text-align: center;
    margin-bottom: 10px;
    box-shadow: 0 0 9px #999;
    position: relative;
    img {
      width: 100%;
      vertical-align: middle;
    }
    image[lazy='loading'] {
      width: 40px;
      height: 300px;
      margin: auto;
    }
  }
  .info {
    color: white;
    max-height: 80px;
    text-align: left;
    background-color: rgba(0, 0, 0, 0.3);
    position: absolute;
    bottom: 0px;
    .info-title {
      font-size: 14px;
    }
    .info-body {
      font-size: 13px;
    }
  }
}
</style>