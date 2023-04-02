<template>
  <transition-group
    appear
    enter-active-class="animated fadeIn"
    leave-active-class="animated fadeOut"
  >
  <q-card key="forgotPassword" class="fullscreen" >
    <q-card-section class="q-mt-lg q-pt-lg q-pb-lg text-center ">
        <div class="text-h5">{{$t('temporary_password')}}</div>
        <div class="text-subtitle1">{{$t('get_temporary_password')}}</div>
    </q-card-section>
    <q-card-section :class="this.$q.dark.isActive ? 'dark-mode-bg-img flex flex-center' : 'light-mode-bg-img flex flex-center'">
        <q-form
          @submit="login"
        >
          <div class="q-mb-lg q-pl-lg q-pr-lg">
            <div class="text-subtitle2 q-pa-sm">{{$t('email')}}</div>
            <q-input outlined  dense v-model="email" color="grey"   rounded :input-class="this.$q.dark.isActive ? 'text-subtitle1 text-white':'text-subtitle1  text-grey-9'" >
              <template v-slot:prepend>
                <q-icon name="email"  color="red" />
              </template>
            </q-input>
            <q-btn class="full-width q-mt-lg" :label="$t('send')" no-caps color="red"  type="submit"  rounded />
            <div class="text-caption text-center text-grey q-mt-lg flex cursor-pointer" @click="this.$router.push({name:'UserRegister'})" >{{$t('no_account')}} <div class="text-red">&nbsp &nbsp &nbsp &nbsp &nbsp {{ $t('free_open_account')}}</div></div>
          </div>
        </q-form>
    </q-card-section>
  </q-card>
  </transition-group>
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
.dark-mode-bg-img {
  background: url('/logo/Groupbg-dark.png') center no-repeat;
  min-height: 340px;
  min-width: 325px;
}
.light-mode-bg-img {
  background: url('/logo/Groupbg-light.png') center no-repeat;
  min-height: 340px;
  min-width: 325px;
}
</style>

