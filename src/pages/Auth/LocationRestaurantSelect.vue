<template>
  <q-layout view="hHh lpR fFf">
  <div class="fullscreen flex flex-center" >
    <div>
    <header-layout />
    <div class="text-left"  style="background-repeat: no-repeat ;background-image: url('src/assets/logo/Groupbg-light.png'); min-width: 325px;min-height: 340px">
      <div class="q-mt-lg q-pl-lg q-pr-lg">
        <q-select color="dark" label-color="dark"  v-model="modelLocation" :options="locationOptions" label="Bölge Seç" input-style="padding-left:5px"  clearable   bg-color="grey-1" dense  rounded outlined  />
        <q-select color="dark" label-color="dark" v-model="modelRestaurant" :options="restaurantOptions" label="Restaurant Seç" class="q-mt-lg"  clearable  bg-color="grey-1" dense   rounded outlined  />
        <q-btn class="full-width q-mt-lg" label="Sonuçları Listele" no-caps color="red"   :to="{name:'root'}" size="15px" rounded />
      </div>
    </div>
  </div>
  </div>
</q-layout >
</template>

<script>
import {ref} from "vue";
import HeaderLayout from "components/HeaderLayout.vue";
 export default {
  name: "LocationRestaurantSelect",
  components: {
    HeaderLayout
  },
  setup(){

    return {
      fourth: ref(true),
      modelLocation: ref(null),
      modelRestaurant: ref(null),
      locationOptions: [
        'Magusa', 'Lefkoşa', 'Girne', 'Güzelyurt', 'Lefke'
      ],
      restaurantOptions: [
        'Lavaş', 'Cookies'
      ]
    }
  },
  methods: {
    darkModeFunc(event){
       this.$q.dark.toggle()
    }
  }
}
</script>

<style scoped>
</style>
