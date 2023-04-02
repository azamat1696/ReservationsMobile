<template>
  <transition
    appear
    enter-active-class="animated fadeIn"
    leave-active-class="animated fadeOut"
  >
  <div class="q-pa-xs q-pt-sm">
<CarouselEvents />
    <div class="q-pa-md q-pt-md-md">
<EventCategory :event-categories="eventCategories" />
    </div>
  </div>
    </transition>
</template>

<script>
import { defineComponent } from 'vue'
import CarouselEvents from "pages/Home/Components/CarouselEvents.vue";
import EventCategory from "pages/Home/Components/EventCategory.vue";
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

