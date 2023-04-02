<template>
  <transition
    appear
    enter-active-class="animated fadeIn"
    leave-active-class="animated fadeOut"
  >
<div>
  <RestaurantCard />
</div>
  </transition>
</template>

<script>

import RestaurantCard from "pages/Places/Components/RestaurantCard.vue";
export default {
  name: "PlacesPage",
  components: {
    RestaurantCard
  },
  mounted() {
    this.$store.dispatch('MainModule/getRestaurants')
  },

}
</script>

<style lang="sass" scoped>

</style>
