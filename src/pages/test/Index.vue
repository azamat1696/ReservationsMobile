<template>
  <div class="fullscreen" >
<div class="flex flex-center">
  <div class="q-mt-lg q-pt-lg q-pb-lg text-center ">
    <div class="text-h5">Hoş geldiniz!</div>
    <div class="text-subtitle1">Hesabınıza giriş yapınız</div>
  </div>
  <div class="text-left"  :style="[ this.$q.dark.isActive ? { 'background':'url(\'../src/assets/logo/Groupbg-dark.png\') center no-repeat','min-height':'340px',' min-width' : '325px' } : { 'background':'url(\'../src/assets/logo/Groupbg-light.png\') center no-repeat','min-height':'340px',' min-width' : '325px' }]">

<q-form
@submit="login"
>
  <div class="q-mb-lg q-pl-lg q-pr-lg">
    <div class="text-subtitle2 q-pa-sm">E-posta</div>
    <q-input outlined  dense v-model="email" :input-class="[this.$q.dark.isActive ? 'text-subtitle1 text-white':'text-subtitle1  text-grey-9']" rounded >
      <template v-slot:prepend>
        <q-icon name="email"  color="red" />
      </template>
    </q-input>
    <div class="text-subtitle2 q-pa-sm q-pt-sm">Şifre</div>
    <q-input outlined  dense  v-model="password" type="password" :input-class="[this.$q.dark.isActive ? 'text-subtitle1 text-white':'text-subtitle1  text-grey-9']"  rounded >
      <template v-slot:prepend>
        <q-icon name="lock"  color="red" />
      </template>
    </q-input>
    <q-btn class="full-width q-mt-lg" label="Giriş Yap" no-caps color="red"  type="submit"   rounded />
    <div class="text-caption text-center text-grey q-mt-lg cursor-pointer" @click="this.$router.push({name:'ForgotPassword'})">Şifremi unuttum</div>
    <div class="flex justify-between">

      <div class="text-caption text-center text-grey q-mt-lg flex cursor-pointer" @click="this.$router.push({name:'UserRegister'})" >Hesabınız yok mu?</div>
      <div class="text-caption text-center q-mt-lg cursor-pointer text-red" @click="this.$router.push({name:'root'})">  Kayıt olmadan devam et.</div>
    </div>
    </div>
</q-form>
  </div>
</div>
  </div>
</template>

<script>
import {ref} from "vue"
export default {
  name: "Index",
  setup(){
    return {
      email: ref(''),
      password: ref(''),
    }
  },
  methods: {
    login(){
      let formData = new FormData();
      formData.append('email',this.email)
      formData.append('password',this.password)
      this.$store.dispatch('AuthModule/login',formData).then(res => {
        if(res)
        {
          this.email = ''
          this.password = ''
        }
      })
    },

  },
}
</script>

<style scoped>

</style>
