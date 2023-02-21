<template>
  <div>
    <q-banner inline-actions rounded   :class="[this.$q.dark.isActive ? 'q-card--bordered bg-primary  q-pa-none':'q-card--bordered q-pa-none  bg-primary']" style="border-radius: 0px 0px 15px  15px;">
      <q-btn to="/" flat icon="arrow_back"   :class="[this.$q.dark.isActive ? 'cursor-pointer text-blue-grey-8':'cursor-pointer  text-grey-9']"/>
      <span   :class="[this.$q.dark.isActive ? 'text-subtitle1 text-white':'text-subtitle1  text-grey-9']"></span>
    </q-banner>
    <q-card  :class="[this.$q.dark.isActive ? 'shadow-1   q-ma-sm text-grey-9 bg-grey-3':'text-grey-9 shadow-1  q-ma-sm']" v-for="(item,index) in restaurants" :key="index">
      <q-img :src="Constants.FILE_URL+'/banners/'+item.Banner" height="140px">
<!--        <div class="absolute-top-left bg-transparent">-->
<!--          <q-icon :name="favorite ? 'favorite' : 'favorite_border' " color="red" size="30px" class="favorite_card" @click="toggleFavorite"/>-->
<!--        </div>-->
      </q-img>
      <q-card-section class=" q-pa-xs">
        <q-btn
          fab-mini
          color="red-9"
          icon="add"
          class="absolute"
          style="top: 0; right: 12px; transform: translateY(-50%);"
          :to="{name:'RestaurantProfile',params: { id: item.id }}"
        />

        <div class="row no-wrap items-center">
          <div class="col text-h6 ellipsis q-pa-xs">
            {{item.PlaceName }}
          </div>
        </div>

      </q-card-section>

      <q-card-section class="q-pa-xs">
        <div class="text-caption text-grey q-pa-xs">
          {{item.Descriptions}}
        </div>
      </q-card-section>


<!--      <q-card-actions class="justify-between">-->
<!--        <q-badge outline color="blue-grey-9 bg-grey-2">-->
<!--          <q-icon name="schedule" />  10:00 AM - 23:00 PM-->
<!--        </q-badge>-->

<!--        <q-rating v-model="stars" :max="5" size="20px" color="red" />-->
<!--      </q-card-actions>-->
    </q-card>

  </div>
</template>

<script>
import { ref } from "vue";
import Constants from "app/Constants";
import { useQuasar } from "quasar";

export default {
  name: "RestaurantCard",
  setup () {
    return {
      stars: ref(4),
      favorite: ref(false),
      Constants
    }
  },
  methods: {
    toggleFavorite(){
      this.favorite ? this.favorite = false : this.favorite = true
    }
  },
  mounted() {
    this.$store.dispatch('MainModule/getRestaurants')
  },
  computed: {
    restaurants(){
      return this.$store.getters['MainModule/restaurantsById'](localStorage.getItem('itemId'))
    }
  }
}
</script>

<style lang="sass" scoped>
.favorite_card
  background: #fff
  width: 35px
  height: 35px
  border-radius: 50px

</style>
