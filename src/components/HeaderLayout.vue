<template>
  <q-header class="q-pa-sm body--light q-card--bordered shadow-1" style="border-radius: 0px 0px 20px 20px">
    <v-google-translate
      :defaultLanguageCode="defaultLanguageCode"
      :defaultPageLanguageCode="defaultPageLanguageCode"
      :fetchBrowserLanguage="false"
      @select="languageSelectedHandler"
    />
    <div ref="testSourceLanguage" class="notranslate">
    <q-toolbar  class="justify-between">
      <q-img src="~assets/logo/Grouplogo-light.png" :fit="'contain'"  height="45px" width="45px"  @click="this.$router.push('/')" class="q-mr-md"  />
<!--      <q-input-->
<!--        dense-->
<!--        outlined-->
<!--        rounded-->
<!--        placeholder="Etkinlik, Club ara..."-->
<!--        input-class=" text-subtitle2"-->
<!--        color="blue-grey-9"-->
<!--        bg-color="blue-grey-0"-->
<!--        class="q-pa-none full-width"-->
<!--      >-->
<!--        <template v-slot:append>-->
<!--          <q-icon name="search" />-->
<!--        </template>-->
<!--      </q-input>-->

<div>
  <Translator/>
  <q-btn-dropdown dropdown-icon="menu" size="lg"  flat  dense color="blue-grey-9" :content-style="{padding:'0px'}">
    <q-list>
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

  </q-btn-dropdown>

  <q-btn icon="account_circle"  size="lg"  flat dense color="blue-grey-9">
    <q-menu fit>
      <q-list >
        <q-item clickable v-close-popup dense v-if="checkAuth()"  @click="this.$store.dispatch('AuthModule/logout')">
          <q-item-section>
            <q-item-label class="flex flex-center">Çıkış Yapın</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable v-close-popup dense  @click="this.$router.push({name: 'login',replace:true})" v-else>
          <q-item-section >
            <q-item-label>Giriş Yapın</q-item-label>
          </q-item-section>
        </q-item>

      </q-list>
    </q-menu>
  </q-btn>
</div>
    </q-toolbar>
    </div>
  </q-header>
</template>

<script>
import {ref} from "vue";
import {useI18n} from "vue-i18n";
 export default {
  name: "HeaderLayout",
  setup(){
const { locale } = useI18n({ useScope: 'global' })
    console.log(locale.value)
    return {
      fourth: ref(true),
      locale,
      defaultLanguageCode: "en",
      defaultPageLanguageCode: "zh-CN",

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
    languageSelectedHandler(info) {
      console.log(">>>>>>", info);
    },
  },

  mounted() {
    this.checkAuth()
    setTimeout(() => {
      const testSourceLanguageEl = this.$refs.testSourceLanguage;
      console.log(testSourceLanguageEl);
      if (testSourceLanguageEl.classList.contains("notranslate")) {
        testSourceLanguageEl.classList.remove("notranslate");
      }
    }, 2000);
  },
  computed:{

  }
}
</script>

<style scoped>

</style>
