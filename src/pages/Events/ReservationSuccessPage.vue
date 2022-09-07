<template>
  <div>
    <q-img  :src="Constants.FILE_URL+'/eventBanners/'+event.Banner" class="q-card--bordered" height="250px" >
      <div class="absolute-top-left bg-transparent">
        <router-link :to="{name: 'events'}">
          <q-icon name="arrow_back" size="md" color="white" class="cursor-pointer"/>
        </router-link>
      </div>
<!--      <div class="absolute-bottom">-->
<!--        <div class="text-subtitle2 flex justify-between">-->
<!--          <div class> <q-icon name="calendar_month" color="white" size="xs" />-->
<!--            {{date.formatDate(event.StartDateTime,'D')+' - '+date.formatDate(event.EndDateTime,'D') +' '+date.formatDate(event.StartDateTime,'MMMM')+', '+date.formatDate(event.StartDateTime,'YYYY')}}-->
<!--          </div>-->
<!--          <div><q-icon name="schedule" color="white" size="xs" /> {{ date.formatDate(event.StartDateTime,'HH:mm')+ ' - ' +date.formatDate(event.EndDateTime,'HH:mm') }} </div>-->
<!--        </div>-->
<!--      </div>-->
    </q-img>
    <q-card class="no-shadow">
      <q-card-section class="q-pb-none">
          <div class="text-h6 q-pl-md q-pr-md text-center">Rezervasyon başarıyla oluşturuldu.</div>
      </q-card-section>
      <q-card-section>
        <q-img src="/public/icons/success.png" :fit="'contain'"  height="150px"/>
      </q-card-section>
      <q-card-section class="q-pt-none">
        <div class="text-subtitle2 text-grey-8 q-pl-md q-pr-md text-center">Rezervasyon başarıyla oluşturuldu.</div>
      </q-card-section>

<!--      <q-card-section class="bg-grey-3">-->
<!--       <div class="flex">-->
<!--         <div class="text-subtitle1">Rezervasyon yeri: </div>-->
<!--         <div class="text-subtitle1">&nbsp Lefkoşa</div>-->
<!--       </div>-->
<!--        <div class="flex">-->
<!--          <div class="text-subtitle1">Rezervasyon tarihi:</div>-->
<!--          <div class="text-subtitle1">&nbsp 10/10/2022</div>-->
<!--        </div>-->
<!--        <div class="flex">-->
<!--          <div class="text-subtitle1">Rezervasyon saati:</div>-->
<!--          <div class="text-subtitle1">&nbsp 4pm-12pm</div>-->
<!--        </div>-->

<!--      </q-card-section>-->

      <q-card-section class="text-dark bg-white">
        <div class="text-h6 text-dark q-pb-lg">Etkinlik Bilgileri</div>
        <q-list   >

          <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-icon color="dark" name="phone" />
            </q-item-section>

            <q-item-section class="text-dark">{{ event.EventName }}</q-item-section>
          </q-item>
          <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-icon color="dark" name="description" />
            </q-item-section>

            <q-item-section class="text-dark">{{ event.EventDescription }}</q-item-section>
          </q-item>
          <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-icon color="dark" name="event" />
            </q-item-section>

            <q-item-section class="text-dark">
              {{date.formatDate(event.StartDateTime,'D')+' - '+date.formatDate(event.EndDateTime,'D') +' '+date.formatDate(event.StartDateTime,'MMMM')+', '+date.formatDate(event.StartDateTime,'YYYY')}}

            </q-item-section>
          </q-item>
          <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-icon color="dark" name="schedule" />
            </q-item-section>

            <q-item-section class="text-dark">
              {{ date.formatDate(event.StartDateTime,'HH:mm')+ ' - ' +date.formatDate(event.EndDateTime,'HH:mm') }}

            </q-item-section>
          </q-item>



        </q-list>
        <!--        <div class="text-h5 q-mt-sm q-mb-xs">{{  restaurant.PlaceName}}</div>-->
        <!--        <table>-->
        <!--          <tbody>-->
        <!--          <tr>-->
        <!--            <td>-->
        <!--              ksdsd-->
        <!--            </td>-->
        <!--          </tr>-->
        <!--          </tbody>-->
        <!--        </table>-->
      </q-card-section>

    </q-card>
  </div>
</template>

<script>
import { date } from "quasar"
import Constants from "app/Constants";
export default {
  name: "ReservationSuccessPage",

  setup(){
    return {
      Constants,
      date
    }
  },
  created() {
    this.$store.dispatch('MainModule/getAllEvents')
  },
computed: {
  event(){
    return this.$store.getters['MainModule/eventById'](Number(this.$route.params.id))
  },
}
}
</script>

<style scoped>

</style>
