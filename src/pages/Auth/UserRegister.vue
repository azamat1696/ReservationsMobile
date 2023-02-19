<template>
  <div class="fullscreen" >
    <q-banner inline-actions rounded class="text-white q-card--bordered q-pa-none"  style="border-radius: 0px 0px 15px  15px;">
      <q-btn :to="{name:'login'}" flat icon="arrow_back"   :class="[this.$q.dark.isActive ? 'cursor-pointer text-white':'cursor-pointer  text-grey-9']"/>
    </q-banner>
    <div class="flex flex-center  ">

      <div class="q-mt-lg q-pt-lg q-pb-lg text-center ">
        <div class="text-h5">Hoş geldiniz!</div>
        <div class="text-subtitle1">Hesab Oluşturun</div>
      </div>
      <div  :style="[ this.$q.dark.isActive ? { 'background':'url(\'../src/assets/logo/Groupbg-dark.png\') center  no-repeat','min-height':'340px',' min-width' : '325px' } : { 'background':'url(\'../src/assets/logo/Groupbg-light.png\') center no-repeat','min-height':'340px',' min-width' : '325px' }]">

        <q-form
        @submit="onSubmit"
        @onReset="onReset"
        >
          <div class="row ">
            <div class="col-12  q-pt-xs">
              <div :class="[this.$q.dark.isActive ? 'text-subtitle2 q-pl-sm text-white q-ml-lg' : 'text-subtitle2 q-pl-sm text-grey-8 q-ml-lg']"> İsim</div>
              <q-input
                color="grey"
                dense
                v-model="name"
                outlined
                hide-bottom-space
                class="q-pr-lg q-pl-lg"
              >
                <template v-slot:prepend>
                  <q-icon name="person"  color="red" />
                </template>
              </q-input>
            </div>
            <div class="col-12 q-pt-xs">
              <div :class="[this.$q.dark.isActive ? 'text-subtitle2 q-pl-sm text-white q-ml-lg' : 'text-subtitle2 q-pl-sm text-grey-8 q-ml-lg']"> Soyisim</div>
              <q-input
                color="grey"
                dense
                v-model="surname"
                outlined
                hide-bottom-space
                class="q-pr-lg q-pl-lg"
              >
                <template v-slot:prepend>
                  <q-icon name="people"  color="red"/>
                </template>
              </q-input>
            </div>
            <div class="col-12  q-pt-xs">
              <div :class="[this.$q.dark.isActive ? 'text-subtitle2 q-pl-sm text-white q-ml-lg' : 'text-subtitle2 q-pl-sm text-grey-8 q-ml-lg']"> E-posta </div>
              <q-input
                color="grey"
                dense
                v-model="email"
                outlined
                hide-bottom-space
                class="q-pr-lg q-pl-lg"
              >
                <template v-slot:prepend>
                  <q-icon name="alternate_email"  color="red"/>
                </template>
              </q-input>
            </div>
            <div class="col-12  q-pt-xs">
              <div :class="[this.$q.dark.isActive ? 'text-subtitle2 q-pl-sm text-white q-ml-lg' : 'text-subtitle2 q-pl-sm text-grey-8 q-ml-lg']"> Telefon  </div>
              <q-input
                color="grey"
                dense
                v-model="phone"
                outlined
                hide-bottom-space
                class="q-pr-lg q-pl-lg"
              >
                <template v-slot:prepend>
                  <q-icon name="phone_iphone"  color="red" />
                </template>
              </q-input>
            </div>
            <div class="col-12">
              <div :class="[this.$q.dark.isActive ? 'text-subtitle2 q-pl-sm text-white q-ml-lg' : 'text-subtitle2 q-pl-sm text-grey-8 q-ml-lg']"> Şifre </div>
              <q-input
                color="grey"
                dense
                v-model="password"
                outlined
                hide-bottom-space
                class="q-pr-lg q-pl-lg"
              >
                <template v-slot:prepend>
                  <q-icon name="lock" color="red"/>
                </template>
              </q-input>
            </div>
            <div class="col-1">

            </div>
            <div class="col-10">
              <q-btn class="full-width q-mt-lg" label="Kaydet" no-caps color="red"  type="submit"   rounded />
            </div>
            <div class="col-1"></div>
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

