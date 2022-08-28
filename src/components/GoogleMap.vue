<template>
  <GMapMap
    :center="center"
    :zoom="9"
    map-type-id="terrain"
    style="width: 100%;height: 300px!important;"
    :disableDefaultUI="true"
  >
    <GMapCluster>
      <GMapMarker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        :clickable="false"
        :draggable="false"
        @click="center=m.position"
      />
    </GMapCluster>
  </GMapMap>
</template>

<script>
import { ref } from 'vue'


export default {
  name: "GoogleMap",
  props: ['allLocations'],
  setup(){

    return {
      center: ref({lat: 35.1937, lng: 33.357}),
      markers: ref([{
        position: {
          lat: 35.1937, lng: 33.357
        },
      }]),
      map : ref(null),
    }
  },
  mounted() {
    this.setPlace(this.allLocations)
  },
  methods: {

    setPlace(e) {
      this.setMarker(e.lat,e.lng)
    },
    setMarker(lat,lng) {

      this.center = {lat:lat, lng: lng}
      this.markers = [
        {
          position: {
            lat: lat, lng: lng
          },
        }
      ]
    },
  }
}
</script>

<style scoped>

</style>
