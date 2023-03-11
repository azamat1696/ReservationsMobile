<template>
  <div class="q-pa-xs q-pt-sm">
  <h1></h1>
<CarouselEvents />
    <div class="q-pa-md q-pt-md-md">
<EventCategory :event-categories="eventCategories" />
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'
import CarouselEvents from "pages/Home/Components/CarouselEvents.vue";
import EventCategory from "pages/Home/Components/EventCategory.vue";
// const eventCategories = [
//   {
//     id: 1,
//     category: 'Jazz',
//     route: '/jazz',
//     image: '/icons/Jazz.jpg'
//   },
//   {
//     id: 2,
//     category: 'Bar',
//     route: '/bars',
//     image: 'https://ellemeden.com/storage/app/res_photo_3.jpg'
//   },
//   {
//     id: 3,
//     category: 'Club',
//     route: '/clubs',
//     image: '/icons/festival3.jpg'
//   },
//   {
//     id: 4,
//     category: 'Hotel',
//     route: '/hotels',
//     image: '/icons/hotels.jpg'
//   }
// ]

export default defineComponent({
  name: 'IndexPage',
  setup(){

    return {

    }
  },
  components: {
    CarouselEvents,
    EventCategory
  },
  mounted() {
    this.$store.dispatch('MainModule/getRestaurantType')
  },
  computed: {
    eventCategories(){
      return this.$store.getters['MainModule/restaurantTypes']
    }
  }

})
</script>

