<template>
<div class="q-pa-sm">
  <home-page-event-banner v-for="(e,i) in events" :detail="e" :key="i"/>
</div>
</template>
<script>
 import HomePageEventBanner from "components/HomePageEventBanner.vue";

export default {
  name: "EventsMain",
  components : {
    HomePageEventBanner
  },
  mounted() {
    this.$store.dispatch('MainModule/getAllEvents')
  },
  computed: {
    events(){
      return this.$store.getters['MainModule/events']
    }
  }

}
</script>

<style scoped>
.favorite_card {
  background: #fff;
  width: 38px;
  height: 38px;
  border-radius: 50px;
  padding: 1px;
}
</style>
