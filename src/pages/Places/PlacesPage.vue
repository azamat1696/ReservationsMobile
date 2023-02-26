<template>
<div>
  <RestaurantCard />
</div>
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
