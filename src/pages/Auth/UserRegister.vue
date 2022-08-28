<template>
  <div class="fullscreen" >
    <div class="flex flex-center">
      <div class="q-mt-lg q-pt-lg q-pb-lg text-center ">
        <div class="text-h5">Hoş geldiniz!</div>
        <div class="text-subtitle1">Hesab Oluşturun</div>
      </div>
      <div class="text-left q-ml-md"  style="background-repeat: no-repeat ;background-image: url('src/assets/icons/bg-img.png'); min-width: 325px;min-height: 340px">
        <q-form
        @submit="onSubmit"
        @onReset="onReset"
        >
          <div class="q-mb-lg q-pr-lg row">
            <div class="col-12">
              <div class="text-subtitle2 q-pa-sm">İsim</div>
              <q-input outlined  dense v-model="name"     style="background: #f5f5f5 !important;"/>
            </div>
            <div class="col-12">
              <div class="text-subtitle2 q-pa-sm">Soyisim</div>
              <q-input outlined  dense v-model="surname"     style="background: #f5f5f5 !important;"/>
            </div>
            <div class="col-12">
              <div class="text-subtitle2 q-pa-sm">E-posta</div>
              <q-input outlined  dense v-model="email"     style="background: #f5f5f5 !important;"/>
            </div>
            <div class="col-12">
              <div class="text-subtitle2 q-pa-sm">Telefon</div>
              <q-input outlined  dense v-model="phone"     style="background: #f5f5f5 !important;"/>
            </div>
            <div class="col-12">
              <div class="text-subtitle2 q-pa-sm q-pt-sm">Şifre</div>
              <q-input outlined  dense  v-model="password" type="password"   style="background: #f5f5f5 !important;" />
            </div>

            <div class="col-12">
              <q-btn class="full-width q-mt-lg" label="Kaydet" no-caps color="red"  type="submit"   rounded />
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
  name: "UserRegister",
  setup(){
    return {
      email: ref(''),
      name: ref(''),
      surname: ref(''),
      phone: ref(''),
      password: ref(''),
    }
  },
  methods: {
    onSubmit(){
      let formData = new FormData();
      formData.append('name',this.name)
      formData.append('surname',this.surname)
      formData.append('email',this.email)
      formData.append('phone',this.phone)
      formData.append('password',this.password)
      this.$store.dispatch('AuthModule/register',formData).then(res => {
        if (res)
        {
           this.onReset()
        }
      })
    },
    onEdit(){

    },
    onUpdate(){

    },
    onReset(){
        this.name = ''
        this.email = ''
        this.phone = ''
        this.password = ''
        this.surname = ''
    }
  }
}
</script>

<style scoped>

</style>

