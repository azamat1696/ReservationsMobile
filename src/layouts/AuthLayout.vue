<template>
  <q-layout view="hHh lpR fFf">
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: "AuthLayout",
  created() {
    console.log("AuthLayout created")
  }
}
</script>

<style scoped>

</style>
