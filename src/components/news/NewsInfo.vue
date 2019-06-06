<template>
  <div class="newsinfo-container">
    <h1 class="title">{{ newsinfo.title }}</h1>
    <p class="subtitle">
      <span>发表时间: {{ newsinfo.add_time | dateFormat}} </span>
      <span>点击: {{ newsinfo.click }}次</span>
    </p>
    <hr>

    <div class="content" v-html="newsinfo.content">

    </div>

    <comment-box :id="this.id"></comment-box>
  </div>
</template>

<script>
import Toast from 'mint-ui'
import comment from '../subcomponents/comment.vue'
export default {
  components: {
    'comment-box': comment
  },
  props: {},
  data() {
    return {
      id: this.$route.params.id,
      newsinfo: {}
    }
  },
  watch: {},
  computed: {},
  methods: {
    getNewsInfo() {
      this.$http.get('api/getnew/' + this.id).then(result => {
        if (result.body.status === 0) {
          this.newsinfo = result.body.message[0]
        } else {
          Toast('获取失败')
        }
      })
    }
  },
  created() {
    this.getNewsInfo()
  },
  mounted() {}
}
</script>
<style lang="scss" scoped>
.newsinfo-container {
  padding: 0 5px;
  .title {
    font-size: 16px;
    text-align: center;
    font-weight: bold;
    margin: 15px 0;
    color: #e92322;
  }
  .subtitle {
    font-size: 13px;
    display: flex;
    justify-content: space-between;
    color: #226aff;
  }
  .content {
  }
}
</style>