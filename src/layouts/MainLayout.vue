<template>
  <q-layout view="hHh lpR fFf">
<header-layout />
    <q-page-container>
        <router-view />
    </q-page-container>

    <q-footer bordered style="border-radius: 20px 20px 0px 0px" class="shadow-1">
    <q-tabs
    v-model="mainTabs"
    class="text-blue-grey-9"
    >
 <q-route-tab no-caps name="home" icon="home" :to="{name: 'root'}" exact label="Anasayfa" class="text-blue-grey-9"/>
 <q-route-tab no-caps name="events" icon="event" :to="{ name: 'events' }" exact  label="Etkinlik" class="text-blue-grey-9"/>
 <q-route-tab no-caps name="reservations" :to="{ name: 'Reservations' }" icon="book_online" label="Reservasyon" class="text-blue-grey-9"/>
 <q-route-tab no-caps name="profile" :to="{ name: 'Profile'}" icon="person" label="Profil" class="text-blue-grey-9"/>
    </q-tabs>
    </q-footer>
  </q-layout>
</template>
<script>

import {ref} from "vue";
import HeaderLayout from "components/HeaderLayout.vue";
export default {
  name: 'MainLayout',
  components: {
    HeaderLayout
  },
  setup(){

    return {
      mainTabs: ref('home'),
    }
  },
  mounted() {
      this.$q.iconSet.arrow.dropdown = ""
  }
}
</script>
<style>
.q-field__control {
  color: #929eab;
}
.field__control:hover::before {
  border-color: transparent;
}
</style>
