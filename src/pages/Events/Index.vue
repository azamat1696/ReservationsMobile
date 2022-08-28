<template>
<div class="q-pa-sm">

  <home-page-event-banner v-for="(e,i) in events" :detail="e" :key="i"/>

</div>
</template>
<script>
import { ref } from "vue";
import HomePageEventBanner from "components/HomePageEventBanner.vue";

export default {
  name: "Index",
  setup () {
    // const events = [
    //   {
    //     id: 1,
    //     name : 'Serkan Kaya Konseri',
    //     date : '20 - 29 august, 2022',
    //     image : '/icons/serkan-kaya-1920x1920.jpg',
    //     action:'EventPage'
    //   },
    //   {
    //     id: 2,
    //     name : 'Ali La Deek Konseri',
    //     date : '25 - 29 august, 2022',
    //     image : '/icons/ali-la-deek-les-ambassadeurs-1920x1920.jpg',
    //     action:'EventPage'
    //   },
    //   {
    //     id: 3,
    //     name : 'Funda Arar Konseri',
    //     date : '25 - 29 august, 2022',
    //     image : '/icons/FundaArar-LesAmbassadeurs-1920x1920.jpg',
    //     action:'EventPage'
    //   },
    //   {
    //     id: 4,
    //     name : 'Haluk Levent Konseri',
    //     date : '25 - 29 august, 2022',
    //     image : '/icons/haluk-levent-les-ambassadeurs-1920x1920.jpg',
    //     action:'EventPage'
    //   }
    // ]
    return {


    }
  },
methods: {

},
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

<style lang="sass" scoped>
.favorite_card
  background: #fff
  width: 38px
  height: 38px
  border-radius: 50px
  padding: 1px

</style>
