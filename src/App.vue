<template>
  <router-view />
</template>
<script>
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'App',
  mounted() {
   this.$store.dispatch('AuthModule/initAuth')
  }
})
</script>
<style>
body.body--dark {
  background-color: #263238 !important;
  color: #ffffff !important;
}
body.body--light {
  background: #ffffff !important;
  color: black !important;
}
</style>
