<template>
  <div class="photoinfo-container">
    <h3>{{ photoinfo.title }} </h3>
    <p class="subtitle">
      <span>发表时间:{{ photoinfo.add_time | dateFormat }} </span>
      <span>点击:{{ photoinfo.click}} 次</span>
    </p>
    <hr>

    <!-- 缩略图 -->

    <!-- 图片内容区域 -->
    <div class="content" v-html="photoinfo.content"></div>

    <!-- 评论 -->
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      id: this.$route.params.id,
      photoinfo: {}
    }
  },
  watch: {},
  computed: {},
  methods: {
    getPhotoInfo() {
      this.$http.get('api/getimageInfo/' + this.id).then(result => {
        if (result.body.status === 0) {
          this.photoinfo = result.body.message[0]
        }
      })
    }
  },
  created() {
    this.getPhotoInfo()
  },
  mounted() {}
}
</script>
<style lang="scss" scoped>
.photoinfo-container {
  padding: 3px;
  h3 {
    color: #26a2ff;
    font-size: 15px;
    text-align: center;
    margin: 15px 0;
  }
  .subtitle {
    display: flex;
    justify-content: space-between;
    font-size: 13px;
  }
  .content {
    font-size: 13px;
    line-height: 30px;
  }
}
</style>