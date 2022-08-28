<template>
<div>
  <RestaurantCard />
</div>
</template>

<script>

import RestaurantCard from "pages/Places/Components/RestaurantCard.vue";
export default {
  name: "Index",

  setup(){
      return {

    }
  },
  components: {
    RestaurantCard
  },
  mounted() {
    this.$store.dispatch('MainModule/getRestaurants')
  },
  computed: {

  },
  methods: {

  }

}
</script>

<style lang="sass" scoped>

</style>
