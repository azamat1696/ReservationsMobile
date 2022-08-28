<template>
  <div class="fullscreen" >
    <div class="flex flex-center">
      <div class="q-mt-lg q-pt-lg q-pb-lg text-center ">
        <div class="text-h5">Geçici Şifre</div>
        <div class="text-subtitle1">E-posta hesabınızdan geçici şifre alınınız</div>
      </div>
      <div class="text-left"  style="background-repeat: no-repeat ;background-image: url('src/assets/icons/bg-img.png'); min-width: 325px;min-height: 340px">
        <q-form
          @submit="login"
        >
          <div class="q-mb-lg q-pl-lg q-pr-lg">
            <div class="text-subtitle2 q-pa-sm">E-posta</div>
            <q-input outlined  dense v-model="email"   rounded style="background: #f5f5f5 !important;"/>
            <q-btn class="full-width q-mt-lg" label="Gönder" no-caps color="red"  type="submit"  rounded />
            <div class="text-caption text-center text-grey q-mt-lg flex" @click="this.$router.push({name:'UserRegister'})" >Hesabınız yok mu? <div class="text-red">&nbsp &nbsp &nbsp &nbsp &nbsp Ücretsiz hesap açın</div></div>
          </div>
        </q-form>
      </div>
    </div>
  </div>
</template>

<script>
import {ref} from "vue"
export default {
  name: "ForgotPassword",
  setup(){
    return {
      email: ref(''),
    }
  },
  methods: {
    login(){
      let formData = new FormData();
      formData.append('email',this.email)
      this.$store.dispatch('AuthModule/forgotPassword',formData).then(res => {
        if(res)
        {
          this.$router.push({name:'login'})
          this.email = ''
        }
      })
    }
  }
}
</script>

<style scoped>

</style>

