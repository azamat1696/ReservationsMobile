<template>
  <div>
    <q-img  :src="Constants.FILE_URL+'/banners/'+restaurant.Banner" class="q-card--bordered" height="250px" >
      <div class="absolute-top-left bg-transparent">
        <router-link :to="{name:'places'}">
          <q-icon name="arrow_back" size="md" color="white" class="cursor-pointer"/>
        </router-link>
      </div>
      <div class="absolute-bottom">
        <div class="text-subtitle2 flex justify-between">
          <div class> <q-icon name="calendar_month" color="white" size="xs" /> 20 - 29 august, 2022</div>
          <div><q-icon name="schedule" color="white" size="xs" /> 4pm - 12pm</div>
        </div>
      </div>
    </q-img>
    <q-card class="bg-grey-3 no-box-shadow">
      <q-tabs
        v-model="tab"
        dense
        class="text-blue-grey-9"
        active-color="dark"
        indicator-color="dark"
        align="justify"
        narrow-indicator
      >
        <q-tab name="restaurantInfo" no-caps label="Etkinlik bilgileri" />
        <q-tab name="restaurantInfoLocation" no-caps label="Etkinlik konumu" />
      </q-tabs>
      <q-separator />
      <q-tab-panels v-model="tab" animated>
        <q-tab-panel name="restaurantInfo">
     {{ restaurant.Descriptions }}
        </q-tab-panel>

        <q-tab-panel name="restaurantInfoLocation">
          <div style="width: 100%;height: 300px;">
            <google-map :all-locations="locations" />

          </div>
        </q-tab-panel>
      </q-tab-panels>
    </q-card>
    <q-card-section>
      <q-btn color="grey-4" text-color="black" label="İletişime geçin " no-caps  class="full-width q-mt-lg" style="border-radius: 16px"/>
      <q-btn color="red" text-color="white" label="Rezervasyon yapın" to="/event-pages/reservation" no-caps  class="full-width q-mt-lg" style="border-radius: 16px"/>
    </q-card-section>
    <q-card>

    </q-card>
  </div>
</template>
<script>
import { ref } from "vue"
import { defineComponent } from 'vue'
import Constants from "app/Constants";
import GoogleMap from "components/GoogleMap.vue";
export default {
  name: "RestaurantProfile",
  components: { GoogleMap },
  setup() {
    return {
      tab: ref('restaurantInfo'),
      center: {lat: 51.093048, lng: 6.842120},
      Constants,
      locations: ref({})
    }
  },
  mounted() {
    this.$store.dispatch('MainModule/getRestaurants')
  },
  computed: {
    restaurant(){
      this.locations = JSON.parse(this.$store.getters['MainModule/restaurantById'](this.$route.params.id).Positions)
      return this.$store.getters['MainModule/restaurantById'](this.$route.params.id)
    }
  }

}
</script>
<style scoped>

</style>

