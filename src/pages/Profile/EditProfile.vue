<template>
  <transition
    appear
    enter-active-class="animated fadeIn"
    leave-active-class="animated fadeOut"
  >
  <div class="row ">
    <q-form
    @submit="onUpdate"
    >
    <q-card  flat>
      <q-item class="flex flex-center">
        <q-item-section avatar >
          <q-avatar size="100px" class="bg-grey text-white" v-if="name">
            {{  NameFirstLetter }}
          </q-avatar>
        </q-item-section>
      </q-item>
      <q-card-section>

 <div class="row">
   <div class="col-12  q-pt-xs">
     <div :class="this.$q.dark.isActive ? 'text-subtitle2 q-pl-sm text-white q-ml-lg' : 'text-subtitle2 q-pl-sm text-grey-8 q-ml-lg'"> İsim</div>
     <q-input
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
     <div :class="this.$q.dark.isActive ? 'text-subtitle2 q-pl-sm text-white q-ml-lg' : 'text-subtitle2 q-pl-sm text-grey-8 q-ml-lg'"> Soyisim</div>
     <q-input
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
     <div :class="this.$q.dark.isActive ? 'text-subtitle2 q-pl-sm text-white q-ml-lg' : 'text-subtitle2 q-pl-sm text-grey-8 q-ml-lg'"> E-posta </div>
     <q-input
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
     <div :class="this.$q.dark.isActive ? 'text-subtitle2 q-pl-sm text-white q-ml-lg' : 'text-subtitle2 q-pl-sm text-grey-8 q-ml-lg'"> Telefon  </div>
     <q-input
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
     <div :class="this.$q.dark.isActive ? 'text-subtitle2 q-pl-sm text-white q-ml-lg' : 'text-subtitle2 q-pl-sm text-grey-8 q-ml-lg'"> Şifre </div>
     <q-input
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
 </div>

      </q-card-section>

      <q-card-actions class="flex justify-around ">
        <q-btn flat color="white" label="Geri Git" icon="undo" no-caps class="bg-red"  :to="{name: 'Profile'}"   />
        <q-btn flat color="white" label="Kaydet" icon="save" no-caps class="bg-blue-grey-9" type="submit"/>
      </q-card-actions>

    </q-card>
    </q-form>
  </div>
    </transition>
</template>

<script>
import { ref } from 'vue'
export default {
  name: "EditProfile",
  setup () {
    return {
      id: ref(''),
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
    onUpdate(){
      let formData = new FormData();
      formData.append('id',this.id)
      formData.append('name',this.name)
      formData.append('surname',this.surname)
      formData.append('phone',this.phone)
      formData.append('email',this.email)
      formData.append('password',this.password)
      formData.append('_method','PUT')
      this.$store.dispatch('AuthModule/update',formData).then(res => {
        if(res)
        {
          this.$store.dispatch('AuthModule/logout')
        }
      })
    },
    checkAuth(){
      if(localStorage.getItem('webUserDetail') !== null){
        this.id = JSON.parse(localStorage.getItem('webUserDetail')).id
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
