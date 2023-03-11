import {api} from "boot/axios";
import {Notify} from "quasar";
import {ErrorHandlePrint} from "src/Utils/ErrorHandlePrint";


const state = {
  restaurantTypes : [],
  restaurants: [],
  events: [],
  reservations: [],
  sliders : [],
  eventCustomers : [],
  localeOptions : [
    {
      id:1,
      name:'Türkçe',
      logo:'/src/assets/langs/tr.png',
      value:'tr'
    },
    {
      id:2,
      name:'English',
      logo:'/src/assets/langs/en.png',
      value:'en'
    },
    {
      id:3,
      name:'Русский',
      logo:'/src/assets/langs/ru.png',
      value:'ru'
    }
  ],
}
const mutations = {
  SET_EVENT_CUSTOMERS(state,items){
    state.eventCustomers = items
  },
  SET_ITEMS_RESTAURANT_TYPES(state,items){
    state.restaurantTypes = items
  },
  SET_ITEMS_RESTAURANT(state,items){
    state.restaurants = items
  },
  SET_EVENTS(state,items){
    state.events = items
  },
  SET_RESERVATIONS(state,items)
  {
    state.reservations = items
  },
  SET_ITEMS_SLIDER(state,items)
  {
    state.sliders = items
  }
}
const actions = {
  getRestaurantType({commit}) {
    api.get('restaurant-types').then(res => {

      commit('SET_ITEMS_RESTAURANT_TYPES',res.data)
    }).catch(er => {
      ErrorHandlePrint(er)
    })
  },
  getRestaurants({commit}) {
    api.get('restaurants').then(res => {
      commit('SET_ITEMS_RESTAURANT',res.data)
    }).catch(er => {
      ErrorHandlePrint(er)
    })
  },
  getAllEvents({commit}){
    api.get('events').then(res => {
      commit('SET_EVENTS',res.data)
    }).catch(er => {
      ErrorHandlePrint(er)
    })
  },
  getAllSlides({commit}){
    api.get('sliders').then( res => {
         commit('SET_ITEMS_SLIDER',res.data)
       return true
    })
  },
  create({commit},payload){
   return  api.post('customer-event-registration',payload).then(res => {
      commit('SET_RESERVATIONS',res.data)
     Notify.create({
       message: "Başarıyla Etkinliğe Kayıt Oldunuz",
       position: "top-right",
       type: "positive"
     })
      return true
    })

  },
  getAllEventCustomers({commit}){

    api.get('event-customers').then(res => {
      commit('SET_EVENT_CUSTOMERS',res.data)
    }).catch(er => {
      ErrorHandlePrint(er)
    })
  }
}
const getters = {
  restaurantTypes: (state) => {
    return state.restaurantTypes
  },
  restaurants: (state) => {
    return state.restaurants
  },
  restaurantsById: (state) => (id) => {
    return state.restaurants.filter(el => +el.rest_type_id === +id)
  },
  restaurantById: (state) => (id) => {

    return state.restaurants.find(el => +el.id === +id)
  },
  events: (state) => {
    return state.events
  },
  eventById: (state) => (id) => {
    return state.events.find(el => +el.id === +id)
  },
  eventFilteredByCustomerId: (state) => (id) => {
    return state.events.filter( el => +el.customer_id === +id)
  },
  sliders: (state) => {
    return state.sliders.filter( el => +el.Status !== 0 )
  },
  getAllEventCustomers : (state) => (id) =>  {
    return state.eventCustomers.filter(el => el.customer_id === +id)
  },
  getLocaleLogo : (state) => (value) =>{
    // let langFileName = state.localeOptions.find( l => l.value === value).logo
    // return new URL(langFileName, import.meta.url)
    return state.localeOptions.find( l => l.value === value).logo
  },
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
