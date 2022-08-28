<template>
  <div>
    <q-img  src="/icons/haluk-levent-les-ambassadeurs-1920x1920.jpg" class="q-card--bordered" height="250px" >
      <div class="absolute-top-left bg-transparent">
        <router-link to="/event-pages/event">
          <q-icon name="arrow_back" size="md" color="white" class="cursor-pointer"/>
        </router-link>
      </div>
      <div class="absolute-bottom">
        <div class="text-subtitle2 flex justify-between">
          <div class> <q-icon name="calendar_month" color="white" size="xs" /> 20 - 29 august, 2022</div>
          <div><q-icon name="schedule" color="white" size="xs" /> 4pm - 12pm</div>
        </div>
      </div>
    </q-img>
<q-card class="no-shadow">
  <q-card-section class="text-center">
    <div class="text-subtitle1 text-grey-7 text-italic">Rezarvasyon oluşturuyorsunuz</div>
  </q-card-section>
  <q-card-section class="q-pt-none">
    <div class="q-pa-xs">
  <div class="text-subtitle2 text-grey-8 q-pl-sm q-ml-lg"> İsim soyisim  </div>
  <q-input
    dense
    rounded
    outlined
    :lazy-rules="true"
    hide-bottom-space
    class="q-pr-lg q-pl-lg"
  >
  </q-input>
  </div>
    <div class="q-pa-xs">
      <div class="text-subtitle2 q-pl-sm text-grey-8 q-ml-lg"> Telefon </div>
      <q-input
        dense
        rounded
        outlined
        :lazy-rules="true"
        hide-bottom-space
        class="q-pr-lg q-pl-lg"
      >
      </q-input>
    </div>
    <div>
      <div class="text-subtitle2 q-pl-sm text-grey-8 q-ml-lg"> Saat seç  </div>
      <q-input
        dense
        rounded
        outlined
        :lazy-rules="true"
        hide-bottom-space
        class="q-pr-lg q-pl-lg"
      >
      </q-input>
    </div>
    <div class="q-pa-xs">
      <div class="text-subtitle2 q-pl-sm text-grey-8 q-ml-lg"> Kişi sayısı seç </div>
      <q-input
        dense
        rounded
        outlined
        :lazy-rules="true"
        hide-bottom-space
        class="q-pr-lg q-pl-lg"
      >
      </q-input>
    </div>
  </q-card-section>
  <q-card-actions  class="flex justify-around q-mb-lg">
     <q-btn label="Vazgeç" color="grey-8" rounded no-caps class="" style="min-width: 80px" :to="{ name: 'EventPage' }"   />
     <q-btn label="Tamamla" color="red" rounded no-caps class="" style="min-width: 90px" :to="{name: 'ReservationSuccess'}"  />
  </q-card-actions>
</q-card>
  </div>
</template>

<script>
export default {
  name: "ReservationPage"
}
</script>

<style scoped>
.q-field__control::before{
  border-radius: 11px !important;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px !important;
}
</style>
