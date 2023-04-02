<template>
  <transition
    appear
    enter-active-class="animated fadeIn"
    leave-active-class="animated fadeOut"
  >
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
     <div :class="this.$q.dark.isActive ? 'text-subtitle2 q-pl-sm text-white q-ml-lg' : 'text-subtitle2 q-pl-sm text-grey-8 q-ml-lg'"> {{$t('name')}} </div>
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
       <template v-slot:prepend>
         <q-icon name="person"  color="red" />
       </template>
     </q-input>
   </div>
   <div class="col-12 q-pt-xs">
     <div :class="this.$q.dark.isActive ? 'text-subtitle2 q-pl-sm text-white q-ml-lg' : 'text-subtitle2 q-pl-sm text-grey-8 q-ml-lg'"> {{ $t('surname') }} </div>
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
       <template v-slot:prepend>
         <q-icon name="people"  color="red"/>
       </template>
     </q-input>
   </div>
   <div class="col-12  q-pt-xs">
     <div :class="this.$q.dark.isActive ? 'text-subtitle2 q-pl-sm text-white q-ml-lg' : 'text-subtitle2 q-pl-sm text-grey-8 q-ml-lg'"> {{ $t('email') }} </div>
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
       <template v-slot:prepend>
         <q-icon name="alternate_email"  color="red"/>
       </template>
     </q-input>
   </div>
   <div class="col-12  q-pt-xs">
     <div :class="this.$q.dark.isActive ? 'text-subtitle2 q-pl-sm text-white q-ml-lg' : 'text-subtitle2 q-pl-sm text-grey-8 q-ml-lg'"> {{ $t('phone')}}  </div>
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
       <template v-slot:prepend>
         <q-icon name="phone_iphone"  color="red" />
       </template>
     </q-input>
   </div>
   <div class="col-12">
     <div :class="this.$q.dark.isActive ? 'text-subtitle2 q-pl-sm text-white q-ml-lg' : 'text-subtitle2 q-pl-sm text-grey-8 q-ml-lg'"> {{$t('password')}} </div>
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
       <template v-slot:prepend>
         <q-icon name="lock" color="red"/>
       </template>
     </q-input>
   </div>
 </div>

      </q-card-section>

      <q-card-actions class="flex justify-around " v-if="email !== ''">
<!--        <q-btn flat color="white" label="Çıkış Yapın" no-caps class="bg-red"  @click="this.$store.dispatch('AuthModule/logout')"   />-->
        <q-btn flat color="white" :label="$t('edit')" no-caps class="bg-blue-grey-9" icon="auto_fix_high"  :to="{name: 'EditProfile'}"    />

      </q-card-actions>
      <q-card-actions class="flex justify-around " v-else>
        <q-btn flat color="white" :label="$t('login')" no-caps class="bg-red"  icon-right="login" :to="{name: 'login'}"   />
      </q-card-actions>

    </q-card>
  </div>
  </transition>
</template>

<script>
import { ref } from 'vue'
export default {
  name: "ProfilePage",
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
