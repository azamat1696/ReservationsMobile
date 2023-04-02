<template>
  <transition-group
    appear
    enter-active-class="animated fadeIn"
    leave-active-class="animated fadeOut"
  >
<q-card key="loginPage" class="flex flex-center no-shadow">
   <q-card-section >
    <div class="q-mt-lg q-pt-lg q-pb-lg text-center">
      <div class="text-h5">{{$t('welcome')}}</div>
      <div class="text-subtitle1">{{$t('login_to_account')}}</div>
    </div>
   </q-card-section>
   <q-card-section :class="this.$q.dark.isActive ? 'text-left dark-mode-bg-img' : 'text-left light-mode-bg-img'">
        <q-form @submit="login" class="q-mb-lg q-pl-lg q-pr-lg">
            <div class="text-subtitle2 q-pa-sm">{{$t('email')}}</div>
            <q-input outlined  dense v-model="email" :input-class="this.$q.dark.isActive ? 'text-subtitle1 text-white':'text-subtitle1  text-grey-9'" rounded >
              <template v-slot:prepend>
                <q-icon name="email"  color="red" />
              </template>
            </q-input>
            <div class="text-subtitle2 q-pa-sm q-pt-sm">{{$t('password')}}</div>
            <q-input outlined  dense  v-model="password" type="password" :input-class="this.$q.dark.isActive ? 'text-subtitle1 text-white':'text-subtitle1  text-grey-9'"  rounded >
              <template v-slot:prepend>
                <q-icon name="lock"  color="red" />
              </template>
            </q-input>
            <q-btn class="full-width q-mt-lg" :label="$t('login')" no-caps color="red"  type="submit"   rounded />
            <div class="text-caption text-center text-grey q-mt-lg cursor-pointer" @click="this.$router.push({name:'ForgotPassword'})">{{$t('forgot_password')}}</div>
             <div class="flex justify-between">
              <div class="text-caption text-center text-grey q-mt-lg flex cursor-pointer" @click="this.$router.push({name:'UserRegister'})" >{{$t('no_account')}}</div>
              <div class="text-caption text-center q-mt-lg cursor-pointer text-red" @click="this.$router.push({name:'root'})">{{$t('without_login')}}</div>
            </div>
        </q-form>
   </q-card-section>
</q-card>
  </transition-group>
</template>

<script>
import {ref} from "vue"
export default {
  name: "LoginPage",
  setup(){
    return {
      email: ref(''),
      password: ref(''),
    }
  },
  methods: {
  async login(){
      let formData = new FormData();
      formData.append('email',this.email)
      formData.append('password',this.password)
     await this.$store.dispatch('AuthModule/login',formData).then(res => {
        if(res)
        {
          this.email = ''
          this.password = ''
          this.$router.push({name:'root'})
        }
      })
    },

  },
}
</script>

<style scoped>
.light-mode-bg-img {
  background: url('/logo/Groupbg-light.png') center no-repeat;
  min-height: 340px;
  min-width: 325px;
}
.dark-mode-bg-img {
  background: url('/logo/Groupbg-dark.png') center no-repeat;
  min-height: 340px;
  min-width: 325px;
}
</style>
