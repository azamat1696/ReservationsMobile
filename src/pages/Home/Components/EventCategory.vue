<template>

<div v-for="(item,i) in eventCategories" :key="i">

  <q-img class="q-mt-sm"
         :src="Constants.FILE_URL+'/restTypeBanners/'+item.Banner"
         spinner-color="white"
         style="height: 120px; min-width: 100%;border-radius: 10px"
         @click="onSubmit(item)"
  >
    <div class="absolute-bottom-left  text-h5 text-center q-pa-xs text-shadow bg-transparent">
      {{ item.RestName }}
    </div>
  </q-img>
</div>


</template>

<script>
import Constants from "app/Constants";
export default {
  name: "EventCategory",
  props: ['eventCategories'],
  setup(){
    return {
      Constants
    }
  },
  methods: {
    onSubmit(item){
       localStorage.setItem('itemId',item.id)
       this.$router.push({name: 'places'})
    }
  }
}
</script>

<style scoped>
.text-shadow {
  text-shadow: 1px 1px 10px #000,1px 1px 15px #000000e6,1px 1px 20px #000c;
}
</style>
