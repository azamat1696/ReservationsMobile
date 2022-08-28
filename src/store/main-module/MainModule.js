import {api} from "boot/axios";
import {Notify} from "quasar";
import {ErrorHandlePrint} from "src/Utils/ErrorHandlePrint";


const state = {
  restaurantTypes : [],
  restaurants: [],
  events: [],
  reservations: [],
  sliders : []

}
const mutations = {
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
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
