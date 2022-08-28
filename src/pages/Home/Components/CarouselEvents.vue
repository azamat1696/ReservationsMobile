<template>
  <div class="q-pa-xs">
    <q-carousel
      animated
      v-model="slide"
      infinite
      navigation
      :autoplay="autoplay"
      swipeable
      transition-prev="slide-right"
      transition-next="slide-left"
      @mouseenter="autoplay = false"
      @mouseleave="autoplay = true"
      style="border-radius: 10px"
      height="220px"
      transition-duration="500"

    >
      <q-carousel-slide v-for="(item,i) in slides" :name="i" :img-src="Constants.FILE_URL+'/sliders/'+item.SliderImage">
        <div class="absolute-top text-center">
          <div class="text-h6 text-white text-shadow">{{item.SliderName}}</div>
        </div>
      </q-carousel-slide>
    </q-carousel>
  </div>
</template>

<script>
import { ref } from "vue";
import Constants from "app/Constants";
export default {
  name: "CarouselEvents",
  setup(){
    return {
      slide: ref(1),
      autoplay: ref(2500),
      Constants
    }
  },
  mounted() {
    this.$store.dispatch('MainModule/getAllSlides')
  },
  computed: {
    slides(){
      return this.$store.getters['MainModule/sliders']
    }
  }
}
</script>

<style scoped>
.text-shadow {
  text-shadow: 1px 1px 10px #000,1px 1px 15px #000000e6,1px 1px 20px #000c;
}
</style>
