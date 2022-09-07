<template>
  <q-header class="q-pa-sm body--light q-card--bordered shadow-1" style="border-radius: 0px 0px 20px 20px">
    <q-toolbar  class="justify-between">
      <q-img src="/src/assets/icons/logo.png" :fit="'contain'"  height="45px" width="45px"  @click="this.$router.push('/')" class="q-mr-md"  />
<!--      <q-input-->
<!--        dense-->
<!--        outlined-->
<!--        rounded-->
<!--        placeholder="Etkinlik, Club ara..."-->
<!--        input-class=" text-subtitle2"-->
<!--        color="blue-grey-9"-->
<!--        bg-color="blue-grey-0"-->
<!--        class="q-pa-none full-width"-->
<!--      >-->
<!--        <template v-slot:append>-->
<!--          <q-icon name="search" />-->
<!--        </template>-->
<!--      </q-input>-->

<div>
  <q-btn-dropdown dropdown-icon="menu" size="lg"  flat  dense color="blue-grey-9" :content-style="{padding:'0px'}">
    <q-list>
      <q-item clickable v-close-popup dense >
        <q-item-section>
          <q-item-label>TR</q-item-label>
        </q-item-section>
      </q-item>

      <q-item clickable v-close-popup dense>
        <q-item-section>
          <q-item-label>EN</q-item-label>
        </q-item-section>
      </q-item>
      <q-item clickable v-close-popup dense>
        <q-item-section>
          <q-item-label>RU</q-item-label>
        </q-item-section>
      </q-item>
      <q-item dense>
        <q-item-section>
          <q-toggle
            v-model="fourth"
            checked-icon="light_mode"
            color="red"
            unchecked-icon="dark_mode"
            size="xl"
            dense
            @update:model-value="darkModeFunc"
          />
        </q-item-section>
      </q-item>
    </q-list>

  </q-btn-dropdown>

  <q-btn icon="account_circle"  size="lg"  flat dense color="blue-grey-9">
    <q-menu fit>
      <q-list >
        <q-item clickable v-close-popup dense v-if="checkAuth()"  @click="this.$store.dispatch('AuthModule/logout')">
          <q-item-section>
            <q-item-label class="flex flex-center">Çıkış Yapın</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable v-close-popup dense  @click="this.$router.push({name: 'login'})" v-else>
          <q-item-section >
            <q-item-label>Giriş Yapın</q-item-label>
          </q-item-section>
        </q-item>

      </q-list>
    </q-menu>
  </q-btn>
</div>
    </q-toolbar>
  </q-header>
</template>

<script>
import {ref} from "vue";

export default {
  name: "HeaderLayout",
  setup(){

    return {
      fourth: ref(true)
    }
  },
  methods: {
    checkAuth(){
      if(localStorage.hasOwnProperty("webAuthToken")){
        console.log("Item exists in localstorage");
        return  true
      }else{
        console.log("Item does not exist in localstoarge");
        return false
      }
    },
    darkModeFunc(event){
      this.$q.dark.toggle()
    }
  },
  mounted() {
    this.checkAuth()
  }
}
</script>

<style scoped>

</style>
