<template>
  <div >
    <q-img  :src="Constants.FILE_URL+'/banners/'+restaurant.Banner" class="q-card--bordered" height="250px" >
      <div class="absolute-top-left bg-transparent">
        <router-link :to="{name:'places'}">
          <q-icon name="arrow_back" size="md" color="white" class="cursor-pointer"/>
        </router-link>
      </div>
      <div class="absolute-center text-center bg-transparent q-mt-lg" >
        <q-img  :src="Constants.FILE_URL+'/logos/'+restaurant.PlaceLogo" class="q-card--bordered" height="70px" width="70px" />
      </div>
      <div class="absolute-bottom bg-transparent">

        <div class="text-h4 text-center" style="text-shadow: 1px 1px 10px #000,1px 1px 15px #000000e6,1px 1px 20px #000c;"> {{ restaurant.PlaceName  }} </div>
<!--        <div class="text-subtitle2 flex justify-between">-->
<!--          <div class> <q-icon name="calendar_month" color="white" size="xs" /> 20 - 29 august, 2022</div>-->
<!--          <div><q-icon name="schedule" color="white" size="xs" /> 4pm - 12pm</div>-->
<!--        </div>-->
      </div>
    </q-img>
    <q-card class="bg-grey-3 no-box-shadow" >
      <q-tabs
        v-model="tab"
        dense
        class="text-blue-grey-9"
        active-color="dark"
        indicator-color="dark"
        align="justify"
        narrow-indicator
      >
        <q-tab name="restaurantInfo" no-caps label="Mekan bilgileri" />
        <q-tab name="restaurantInfoLocation" no-caps label="Mekan konumu" />
      </q-tabs>
      <q-separator />
      <q-tab-panels v-model="tab" animated>
        <q-tab-panel name="restaurantInfo" style="width: 100%;height: 300px;" :class="[this.$q.dark.isActive ? 'text-subtitle1 bg-dark text-white':'text-subtitle1  text-grey-9 bg-primary']">
            {{ restaurant.Descriptions }}
        </q-tab-panel>

        <q-tab-panel name="restaurantInfoLocation" class="no-padding">
          <div style="width: 100%;height: 300px;">
            <google-map :all-locations="locations" />
          </div>
        </q-tab-panel>
      </q-tab-panels>
      <q-card-section  :class="[this.$q.dark.isActive ? 'text-subtitle1 bg-dark text-white':'text-subtitle1  text-grey-9 bg-primary']">
        <div class="text-h6   q-pb-lg">Restoran Bilgileri</div>
        <q-list   >

          <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-icon   name="location_on" />
            </q-item-section>

            <q-item-section >{{ restaurant.PlaceAddress }}</q-item-section>
          </q-item>
          <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-icon   name="mail" />
            </q-item-section>

            <q-item-section> <a href="mailto:{{ restaurant.email }}"  style="text-decoration: none; color: #565252"> {{ restaurant.email }} </a> </q-item-section>
          </q-item>
          <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-icon   name="phone" />
            </q-item-section>

            <q-item-section > <a href="tel:{{ restaurant.phone }}" style="text-decoration: none; color: #565252" > {{ restaurant.phone }} </a></q-item-section>
          </q-item>



        </q-list>
<!--        <div class="text-h5 q-mt-sm q-mb-xs">{{  restaurant.PlaceName}}</div>-->
<!--        <table>-->
<!--          <tbody>-->
<!--          <tr>-->
<!--            <td>-->
<!--              ksdsd-->
<!--            </td>-->
<!--          </tr>-->
<!--          </tbody>-->
<!--        </table>-->
      </q-card-section>
<!--          <q-card-section>-->
<!--            <q-btn color="grey-4" text-color="black" label="İletişime geçin " no-caps  class="full-width q-mt-lg" style="border-radius: 16px"/>-->
<!--            <q-btn color="red" text-color="white" label="Rezervasyon yapın" to="/event-pages/reservation" no-caps  class="full-width q-mt-lg" style="border-radius: 16px"/>-->
<!--          </q-card-section>-->
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

