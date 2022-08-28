<template>
  <div class="row q-pt-lg q-mt-lg">
    <q-card  flat>
      <q-item class="flex flex-center">
        <q-item-section avatar >
          <q-avatar size="100px" class="bg-grey text-white" v-if="name !== ''">
            {{ NameFirstLetter }}
          </q-avatar>
          <q-avatar size="100px" class="bg-grey text-white" v-else>
               A
          </q-avatar>
        </q-item-section>
      </q-item>
      <q-card-section>

 <div class="row">
   <div class="col-12  q-pt-xs">
     <div :class="[this.$q.dark.isActive ? 'text-subtitle2 q-pl-sm text-white q-ml-lg' : 'text-subtitle2 q-pl-sm text-grey-8 q-ml-lg']"> İsim</div>
     <q-input
       dense
       v-model="name"
       outlined
       :lazy-rules="true"
       hide-bottom-space
       class="q-pr-lg q-pl-lg"
       readonly
       disable
     >
     </q-input>
   </div>
   <div class="col-12 q-pt-xs">
     <div :class="[this.$q.dark.isActive ? 'text-subtitle2 q-pl-sm text-white q-ml-lg' : 'text-subtitle2 q-pl-sm text-grey-8 q-ml-lg']"> Soyisim</div>
     <q-input
       dense
       v-model="surname"
       outlined
       :lazy-rules="true"
       hide-bottom-space
       class="q-pr-lg q-pl-lg"
       readonly
       disable
     >
     </q-input>
   </div>
   <div class="col-12  q-pt-xs">
     <div :class="[this.$q.dark.isActive ? 'text-subtitle2 q-pl-sm text-white q-ml-lg' : 'text-subtitle2 q-pl-sm text-grey-8 q-ml-lg']"> E-posta </div>
     <q-input
       dense
       v-model="email"
       outlined
       :lazy-rules="true"
       hide-bottom-space
       class="q-pr-lg q-pl-lg"
       readonly
       disable
     >
     </q-input>
   </div>
   <div class="col-12  q-pt-xs">
     <div :class="[this.$q.dark.isActive ? 'text-subtitle2 q-pl-sm text-white q-ml-lg' : 'text-subtitle2 q-pl-sm text-grey-8 q-ml-lg']"> Telefon  </div>
     <q-input
       dense
       v-model="phone"
       outlined
       :lazy-rules="true"
       hide-bottom-space
       class="q-pr-lg q-pl-lg"
       readonly
       disable

     >
     </q-input>
   </div>
   <div class="col-12">
     <div :class="[this.$q.dark.isActive ? 'text-subtitle2 q-pl-sm text-white q-ml-lg' : 'text-subtitle2 q-pl-sm text-grey-8 q-ml-lg']"> Şifre </div>
     <q-input
       dense
       v-model="password"
       outlined
       :lazy-rules="true"
       hide-bottom-space
       class="q-pr-lg q-pl-lg"
       type="password"
       readonly
       disable
     >
     </q-input>
   </div>
 </div>

      </q-card-section>

      <q-card-actions class="flex justify-around " v-if="email !== ''">
<!--        <q-btn flat color="white" label="Çıkış Yapın" no-caps class="bg-red"  @click="this.$store.dispatch('AuthModule/logout')"   />-->
        <q-btn flat color="white" label="Düzenleyin" no-caps class="bg-blue-grey-9"  :to="{name: 'EditProfile'}"    />

      </q-card-actions>
      <q-card-actions class="flex justify-around " v-else>
        <q-btn flat color="white" label="Giriş Yap" no-caps class="bg-red"  :to="{name: 'login'}"   />
      </q-card-actions>

    </q-card>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  name: "Profile",
  setup () {
    return {
      locals: ref({}),
      name: ref(''),
      surname: ref(''),
      phone: ref(''),
      email: ref(''),
      password: ref(''),
      NameFirstLetter: ref('')
    }
  },
  methods: {
    checkAuth(){
      if(localStorage.getItem('webUserDetail') !== null){
        this.locals = localStorage.getItem('webUserDetail')
        this.name = JSON.parse(localStorage.getItem('webUserDetail')).name
        this.surname = JSON.parse(localStorage.getItem('webUserDetail')).surname
        this.phone = JSON.parse(localStorage.getItem('webUserDetail')).phone
        this.email = JSON.parse(localStorage.getItem('webUserDetail')).email
        this.NameFirstLetter = JSON.parse(localStorage.getItem('webUserDetail')).name.split('')[0].toUpperCase()  || ''
      }
    }
  },
  mounted() {
    this.checkAuth()
  }

}
</script>

<style scoped>

</style>
