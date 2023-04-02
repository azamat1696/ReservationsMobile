<template>
  <transition-group
    appear
    enter-active-class="animated fadeIn"
    leave-active-class="animated fadeOut"
  >
  <div key="reservationPage" class="q-pa-md row items-start q-gutter-md">

     <div class="col-12" v-if="event.length <= 0" >
       <h5  class="text-center text-grey">{{$t('no_reservation')}}</h5>
     </div>

    <q-card class="my-card shadow-2" flat bordered v-for="(item,index) in event" :key="index" >
      <q-card-section>
        <div class="text-h5 q-mt-sm q-mb-xs text-dark">{{item.EventName}}</div>
        <div class="text-caption text-grey">
         {{item.EventDescription.substring(1,150)+"...."}}
        </div>

      </q-card-section>
      <q-card-actions align="around">
        <q-badge rounded color="blue-grey-9" class="q-pa-sm" > <q-icon name="calendar_month" color="white" size="xs" />
          {{date.formatDate(item.StartDateTime,'D')
          +' - '+date.formatDate(item.EndDateTime,'D')
          +' '+date.formatDate(item.StartDateTime,'MMMM')
          +', '+date.formatDate(item.StartDateTime,'YYYY')}}
        </q-badge>

        <q-badge  rounded color="red" class="q-pa-sm"><q-icon name="schedule" color="white" size="xs" /> {{ date.formatDate(item.StartDateTime,'HH:mm')
        + ' - ' +date.formatDate(item.EndDateTime,'HH:mm') }} </q-badge>
        <q-btn flat  color="red" no-caps :to="{name: 'EventPage',params:{ id: item.id }}">{{$t('detail')}}</q-btn>
      </q-card-actions>

    </q-card>
  </div>
  </transition-group>
</template>

<script>
import { ref } from 'vue'
import { date } from "quasar"
import Constants from "app/Constants";
export default {
  name: "ReservationsPage",
  setup () {
    return {
      expanded: ref(false),
      customer_id: ref(''),
      Constants,
      date

    }
  },
  created() {
    this.$store.dispatch('MainModule/getAllEvents')
    this.$store.dispatch('MainModule/getAllEventCustomers')
  },
  computed: {
    event(){
      return this.$store.getters['MainModule/getAllEventCustomers'](this.customer_id)
    }
  },
  methods: {
    checkCustomer(){
      if(localStorage.getItem('webUserDetail') !== null){
        this.customer_id = JSON.parse(localStorage.getItem('webUserDetail')).id
      }
    }
  },
  mounted() {
    this.checkCustomer()
  }
}
</script>

<style scoped>
.my-card{
  width: 100%;
  border-radius: 15px;
  background-color: #fafafa;
}
</style>
