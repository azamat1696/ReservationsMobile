<template>
<div class="row" @click="this.$router.push({name : 'EventPage',params:{ id: detail.id }})">
  <q-img  :src="Constants.FILE_URL+'/eventBanners/'+detail.Banner" class="q-card--bordered q-mt-sm" height="150px" style="border-radius: 20px">
    <div class="absolute-bottom bg-transparent cursor-pointer" >
      <div class="text-caption text-shadow">
        {{date.formatDate(detail.StartDateTime,'D')+' - '+date.formatDate(detail.EndDateTime,'D') +' '+date.formatDate(detail.StartDateTime,'MMMM')+', '+date.formatDate(detail.StartDateTime,'YYYY')}}

      </div>
      <div class="text-h5 text-shadow">
        {{detail.EventName}}

      </div>
    </div>

<!--    <div class="absolute-top-right bg-transparent cursor-pointer">-->
<!--      <q-icon :name="favorite ? 'favorite' : 'favorite_border' " color="red" size="30px" class="favorite_card cursor-pointer"  @click="toggleFavorite"/>-->
<!--    </div>-->
  </q-img>
</div>
 </template>

<script>
import {ref} from "vue";
import Constants from "app/Constants";
import { date } from "quasar"
export default {
  name: "HomePageEventBanner",
  props : ['detail'],
  setup(){
    return {
      favorite: ref(false),
      Constants,
      date
    }
  },
  methods: {
    toggleFavorite(){
      this.favorite ? this.favorite = false : this.favorite = true
    }
  }
}
</script>

<style scoped>
.text-shadow {
  text-shadow: 1px 1px 10px #000,1px 1px 15px #000000e6,1px 1px 20px #000c;
}
</style>
