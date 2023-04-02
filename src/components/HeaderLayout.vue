<template>
  <q-header class="q-pa-sm body--light q-card--bordered shadow-1" style="border-radius: 0px 0px 20px 20px">
<!--    <v-google-translate-->
<!--      :defaultLanguageCode="defaultLanguageCode"-->
<!--      :defaultPageLanguageCode="defaultPageLanguageCode"-->
<!--      :fetchBrowserLanguage="false"-->
<!--      @select="languageSelectedHandler"-->
<!--    />-->

    <q-toolbar  class="justify-between">
      <q-img src="~assets/logo/Grouplogo-light.png" :fit="'contain'"  height="45px" width="45px"  @click="this.$router.push('/')" class="q-mr-md"  />
     <div class="row">
         <div class="col-12">
           <q-input
           dense
           outlined
           rounded
           v-model="searchParams"
           color="grey-9"
           :placeholder="$t('search_event')"
           :class="this.$q.dark.isActive ? 'text-subtitle1 text-grey-9 q-pa-none full-width':'text-subtitle1  text-grey-9 q-pa-none full-width'"
           :input-class="this.$q.dark.isActive ? 'text-subtitle1 text-dark ':'text-subtitle1  text-grey-9'"
           @update:model-value="searchEvent"
           clearable
         >
           <template v-slot:append>
             <q-icon name="search" :class="this.$q.dark.isActive ? ' text-grey-9':'text-grey-9'" />
           </template>
         </q-input>
         </div>
         <div class="col-8 absolute q-mt-xl text-blue-grey-9 bg-white rounded-borders" v-show="isSeachExist">
           <q-list >

             <q-item clickable v-close-popup dense   v-for="(event,i) in fiteredEvents" :key="i"  @click="this.$router.push({name : 'EventPage',params:{ id: event.id }})">
               <q-item-section :key="i" >
                 <q-item-label :class="this.$q.dark.isActive ? 'text-subtitle2 text-blue-grey-9  ':'text-subtitle2 text-blue-grey-9 '">{{event.EventName}}</q-item-label>
               </q-item-section>
             </q-item>

           </q-list>
         </div>
     </div>

   <div>

<!--  <q-btn-dropdown dropdown-icon="menu" size="lg"  flat  dense color="blue-grey-9" :content-style="{padding:'0px'}">-->
<!--    <q-list>-->
<!--      <q-item clickable v-close-popup dense @click="changeLang('tr')">-->
<!--        <q-item-section>-->
<!--             <q-item-label>TR</q-item-label>-->

<!--        </q-item-section>-->
<!--      </q-item>-->

<!--      <q-item clickable v-close-popup dense @click="changeLang('en')">-->
<!--        <q-item-section>-->
<!--          <q-item-label>EN</q-item-label>-->
<!--        </q-item-section>-->
<!--      </q-item>-->
<!--      <q-item clickable v-close-popup dense @click="changeLang('ru')">-->
<!--        <q-item-section>-->
<!--          <q-item-label>RU</q-item-label>-->
<!--        </q-item-section>-->
<!--      </q-item>-->
<!--      <q-item dense>-->
<!--        <q-item-section>-->
<!--          <q-toggle-->
<!--            v-model="fourth"-->
<!--            checked-icon="light_mode"-->
<!--            color="red"-->
<!--            unchecked-icon="dark_mode"-->
<!--            size="xl"-->
<!--            dense-->
<!--            @update:model-value="darkModeFunc"-->
<!--          />-->
<!--        </q-item-section>-->
<!--      </q-item>-->
<!--    </q-list>-->

<!--  </q-btn-dropdown>-->

  <q-btn icon="account_circle"  size="lg"  flat dense color="blue-grey-9">
    <q-menu fit>
      <q-list >
        <q-item clickable v-close-popup dense v-if="checkAuth()"  @click="this.$store.dispatch('AuthModule/logout')">
          <q-item-section>
            <q-item-label class="flex flex-center">{{$t('logout')}}</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable v-close-popup dense  @click="this.$router.push({name: 'login',replace:true})" v-else>
          <q-item-section >
            <q-item-label>{{$t('login')}}</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable v-close-popup dense @click="changeLang('tr')">
          <q-item-section>
            <q-item-label>TR</q-item-label>

          </q-item-section>
        </q-item>

        <q-item clickable v-close-popup dense @click="changeLang('en')">
          <q-item-section>
            <q-item-label>EN</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable v-close-popup dense @click="changeLang('ru')">
          <q-item-section>
            <q-item-label>RU</q-item-label>
          </q-item-section>
        </q-item>
        <q-item dense>
          <q-item-section>
            <q-toggle
              v-model="fourth"
              checked-icon="light_mode"
              color="red"
              unchecked-icon="dark_mode"
              size="xl"
              dense
              @update:model-value="darkModeFunc"
            />
          </q-item-section>
        </q-item>

      </q-list>
    </q-menu>
  </q-btn>
</div>
    </q-toolbar>

  </q-header>
</template>

<script>
import {ref} from "vue";
import {useI18n} from "vue-i18n";
 export default {
  name: "HeaderLayout",
  setup(){
const { locale } = useI18n({ useScope: 'global' })

    return {
      fourth: ref(true),
      locale,
      fiteredEvents:ref([]),
      isSeachExist:ref(false),
      searchParams:ref(""),

    }
  },
  methods: {
    checkAuth(){
      if(localStorage.hasOwnProperty("webAuthToken")){
        console.log("Item exists in localstorage");
        return  true
      }else{
        console.log("Item does not exist in localstoarge");
        return false
      }
    },
    darkModeFunc(event){
      this.$q.dark.toggle()
    },
     changeLang(lang){
        this.locale = lang
      },
     searchEvent(data){

      if(this.searchParams?.length > 0 && data !== ''){

        this.isSeachExist = true
        this.fiteredEvents = this.events.filter((item)=>{
          return item.EventName.toLowerCase().includes(data.toLowerCase())
        })
      }else {
        this.isSeachExist = false
      }
    }
  },


  mounted() {
    this.checkAuth()
    this.$store.dispatch('MainModule/getAllEvents')
  },
  computed:{
       events(){
         return this.$store.getters['MainModule/events']
       }
  }
}
</script>

<style>
.q-field__control:before {
  border: 1px solid rgba(0, 0, 0, 0.24) !important;
}
</style>
