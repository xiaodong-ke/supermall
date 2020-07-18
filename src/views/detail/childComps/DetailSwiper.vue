<template>
  <div class="detail-swiper">
    <swiper class="swiper-style"> 
      <swiper-item v-for="item in topImages" :key="item.index" >
        <img :src="item" alt="">
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import {Swiper, SwiperItem} from 'components/common/swiper'

export default {
  name: "DetailSwiper",
  components: {
    Swiper,
    SwiperItem
  },
  props: {
    topImages: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style scoped>
.swiper-style {
  height: 300px;
  overflow: hidden;
}
</style>