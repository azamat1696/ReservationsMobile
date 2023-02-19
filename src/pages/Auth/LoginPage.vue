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
import {ref} from "vue"

export default {
  name: "LoginPage",
  setup(){
    return {
      email: ref('aziz412@gmail.com'),
      password: ref('1212'),
    }
  },
  methods: {
   async  login(){
      let formData = new FormData();
      formData.append('email',this.email)
      formData.append('password',this.password)
      await this.$store.dispatch('AuthModule/login',formData).then(res => {

        if(res === true)
        {
          this.email = ''
          this.password = ''

          console.log("Başarılı")

          this.$router.push({name: 'Locations'})
        }
      })
    },

  },
  created() {

  }
}
</script>

<style scoped>

</style>
