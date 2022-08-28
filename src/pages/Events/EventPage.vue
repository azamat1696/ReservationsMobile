<template>
 <div>
   <q-img  :src="Constants.FILE_URL+'/eventBanners/'+event.Banner" class="q-card--bordered" height="250px" >
     <div class="absolute-top-left bg-transparent">
       <router-link :to="{name: 'events'}">
         <q-icon name="arrow_back" size="md" color="white" class="cursor-pointer"/>
       </router-link>
     </div>
     <div class="absolute-bottom">
       <div class="text-subtitle2 flex justify-between">
         <div class> <q-icon name="calendar_month" color="white" size="xs" />
           {{date.formatDate(event.StartDateTime,'D')+' - '+date.formatDate(event.EndDateTime,'D') +' '+date.formatDate(event.StartDateTime,'MMMM')+', '+date.formatDate(event.StartDateTime,'YYYY')}}
         </div>
         <div><q-icon name="schedule" color="white" size="xs" /> {{ date.formatDate(event.StartDateTime,'HH:mm')+ ' - ' +date.formatDate(event.EndDateTime,'HH:mm') }} </div>
       </div>
     </div>
   </q-img>
   <q-card class="bg-grey-3 no-box-shadow">
     <q-tabs
       v-model="tab"
       dense
       class="text-blue-grey-9"
       active-color="dark"
       indicator-color="dark"
       align="justify"
       narrow-indicator
     >
       <q-tab name="restaurantInfo" no-caps label="Etkinlik bilgileri" />
       <q-tab name="restaurantInfoLocation" no-caps label="Etkinlik konumu" />
     </q-tabs>
     <q-separator />
     <q-tab-panels v-model="tab" animated>
         <q-tab-panel name="restaurantInfo">
         {{ event.EventDescription }}
       </q-tab-panel>
         <q-tab-panel name="restaurantInfoLocation">
    <div style="width: 100%;height: 300px;">

<google-map  :all-locations="restaurantLocation"/>

    </div>
       </q-tab-panel>
     </q-tab-panels>
   </q-card>
   <q-card-section>
     <q-btn color="grey-4" text-color="black" label="İletişime geçin" href="tel:123-456-7890" no-caps  class="full-width q-mt-lg" style="border-radius: 16px"/>
     <q-btn color="red" text-color="white" label="Rezervasyon yapın" no-caps  class="full-width q-mt-lg" style="border-radius: 16px" @click="showFormDialog = true"/>
   </q-card-section>
   <q-card>

   </q-card>
   <q-dialog   v-model="showFormDialog" persistent  style="z-index: 999!important;">
     <q-card  class="no-padding" style="min-width: 350px">
       <q-bar class=" bg-blue-grey-9 text-white" style="height: 50px">
         <div class="text-h4"  >Yeni Rezervasyon Oluştur</div>
         <q-space />
         <q-btn dense flat icon="close" v-close-popup @click="onReset">
           <q-tooltip>Kapat</q-tooltip>
         </q-btn>
       </q-bar>

       <q-card-section>
         <q-form
           @submit="onSubmit"
           @reset="onReset"
           class="q-gutter-md"
         >
           <q-card class="no-shadow">
             <q-card-section class="text-center">
             </q-card-section>
             <q-card-section class="q-pt-none row">
               <div class="q-pa-xs col-12">
                 <div class="text-subtitle2 text-grey-8 "> İsim   </div>
                 <q-input
                   dense
                   outlined
                   :lazy-rules="true"
                   hide-bottom-space
                   v-model="formFields.name"
                 >
                 </q-input>
               </div>
               <div class="q-pa-xs col-12">
                 <div class="text-subtitle2 text-grey-8 "> Soyisim  </div>
                 <q-input
                   dense
                   outlined
                   :lazy-rules="true"
                   hide-bottom-space
                   v-model="formFields.surname"
                 >
                 </q-input>
               </div>
               <div class="q-pa-xs col-12">
                 <div class="text-subtitle2  text-grey-8  "> Telefon </div>
                 <q-input
                   dense
                   outlined
                   :lazy-rules="true"
                   hide-bottom-space
                   v-model="formFields.phone"
                 >
                 </q-input>
               </div>
               <div  class="q-pa-xs col-12">
                 <div class="text-subtitle2  text-grey-8  "> E-posta </div>
                 <q-input
                   dense
                   outlined
                   :lazy-rules="true"
                   hide-bottom-space
                   v-model="formFields.email"
                 >
                 </q-input>
               </div>

             </q-card-section>
             <q-card-section class="text-right flex justify-between" >
               <q-btn label="Vazgeç" color="grey-8"   no-caps class="" style="min-width: 80px"  @click="onReset"   />
               <q-btn label="Kaydet" color="red"   no-caps class="" style="min-width: 90px" type="submit" />
             </q-card-section>
           </q-card>


         </q-form>
       </q-card-section>

     </q-card>
   </q-dialog>

 </div>
</template>
<script>
import { ref } from "vue"
import GoogleMap from "components/GoogleMap.vue";
import Constants from "app/Constants";
import { date } from "quasar"

export default {
  name: "EventPage",
  components: { GoogleMap },
  setup() {
    return {
      tab: ref('restaurantInfo'),
      Constants,
      date,
      showFormDialog: ref(false),
      formFields: ref({
         name: '',
         surname: '',
         email: '',
         phone: ''
      })
    }
  },
  created() {
    this.$store.dispatch('MainModule/getAllEvents')
    this.$store.dispatch('MainModule/getRestaurants')
    },
  computed: {
    event(){
      return this.$store.getters['MainModule/eventById'](Number(this.$route.params.id))
    },
    restaurantLocation(){
      return JSON.parse(this.$store.getters['MainModule/restaurantById'](this.event.restaurant_id).Positions)
    }
  },
  methods: {
    onSubmit(){
      let formData = new FormData()
      formData.append('name',this.formFields.name)
      formData.append('surname',this.formFields.surname)
      formData.append('email',this.formFields.email)
      formData.append('phone',this.formFields.phone)
      formData.append('event_id',this.event.id)
      this.$store.dispatch('MainModule/create',formData).then(res => {
         if (res){
           this.showFormDialog = false
           this.onReset()
           this.$router.push({name:'ReservationSuccess', params:{id: this.event.id}})

         }
      })
    },
    onReset(){
      this.formFields.phone = ''
      this.formFields.email = ''
      this.formFields.surname = ''
      this.formFields.name = ''
    }
  }

}
</script>
<style scoped>

</style>
