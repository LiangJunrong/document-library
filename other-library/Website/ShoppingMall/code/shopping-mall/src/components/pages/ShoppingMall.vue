<template>
  <div>
      <van-row>
        <!-- 不推荐通过下面的方式直接引用 assets 图片 -->
        <van-col span="8"><img src="../../assets/img/emoticon_happy.png" alt="表情包"></van-col>
        <van-col span="8"><img :src="icon1" alt="表情包"></van-col>
        <van-col span="8"><img :src="icon2" alt="表情包"></van-col>
      </van-row>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        icon1: require('../../assets/img/emoticon_cool.png'), // 引用 assets 下的图片
        icon2: '/static/img/emoticon_cute.png' // 引用 static 下的图片
      }
    }
  }
</script>

<style scoped>

</style>