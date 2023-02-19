<template>
  <q-page class="flex flex-center">
    <q-card class="full-width no-box-shadow">
      <q-card-section>
        <q-form @submit="login">
          <q-input
            v-model="email"
            label="Email"
            filled
            type="email"
            lazy-rules
            :rules="[val => val.length > 0 || 'Email is required']"
          />
          <q-input
            v-model="password"
            label="Password"
            filled
            type="password"
            lazy-rules
            :rules="[val => val.length > 0 || 'Password is required']"
          />
          <q-btn type="submit" color="negative" label="Login" />
        </q-form>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>

export default {
  name: "LoginTestForm"
}
</script>

<style scoped>

</style>
