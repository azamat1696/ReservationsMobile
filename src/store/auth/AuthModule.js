import { api } from 'boot/axios'
import { Notify } from "quasar";
import {ErrorHandlePrint} from "src/Utils/ErrorHandlePrint";
const state = {
  userDetail : {},
  webAuthToken : ''
}
const mutations = {
  setToken(state,token){
    this.state.panelAuthToken = token
  },
  setUserDetail(state,user){
    state.userDetail = user
  },
  clearToken(state){
    state.panelAuthToken=''
    state.userDetail = {}
  }

}

const actions = {
  login({commit,dispatch},payload){
    return api.post('/customer/login',payload).then( res => {
      api.defaults.headers.common['Authorization'] = 'Bearer ' + res.data.token
      commit('setToken',res.data.token)
      commit('setUserDetail',res.data.userDetail)
      // Local Storage
      localStorage.setItem('webAuthToken',res.data.token)
      localStorage.setItem('webUserDetail',JSON.stringify(res.data.userDetail))
      localStorage.setItem('webLoginUserEmail',res.data.userDetail.email)
      Notify.create({
        color: 'positive',
        position: 'top-right',
        progress: true,
        timeout: 1000,
        message: 'Giriş Başarılı',
        icon: 'done'
      })
      this.$router.push({path: '/locations'}).catch(er => {
        console.log("Error on login",er)
      })
    }).catch( er => {
      Notify.create({
        color : 'negative',
        position : 'center',
        progress : true,
        timeout : 1500,
        message : 'Sistem Hatası : '+er.message,
        icon : 'done'
      })
      ErrorHandlePrint(er)
    }).finally(fi => {
      console.log("Finally----")
    })
  },
  logout({commit}){
    commit('clearToken')
    localStorage.removeItem('webAuthToken')
    localStorage.removeItem('webUserDetail')
    localStorage.removeItem('webLoginUserEmail')
    this.$router.replace('/').catch( er => {
      console.log(er)
    })
  },
  initAuth({commit}){
    let token = localStorage.getItem('webAuthToken');
    if(token)
    {
      api.defaults.headers.common['Authorization'] = 'Bearer ' + token
      commit('setToken',token);
      this.$router.go(1)
      commit('setUserDetail',JSON.parse(localStorage.getItem('webUserDetail')))
    }
    // else {
    //   this.$router.push('/auth/login').catch((er) => {
    //     console.log(er)});
    //   return false
    // }
  },
  register({commit},payload){
    return api.post('/customer/register',payload).then( res => {
      api.defaults.headers.common['Authorization'] = 'Bearer ' + res.data.token
      commit('setToken',res.data.token)
      commit('setUserDetail',res.data.userDetail)
      // Local Storage
      localStorage.setItem('webAuthToken',res.data.token)
      localStorage.setItem('webUserDetail',JSON.stringify(res.data.userDetail))
      localStorage.setItem('webLoginUserEmail',res.data.userDetail.email)
      Notify.create({
        color: 'positive',
        position: 'top-right',
        progress: true,
        timeout: 1000,
        message: 'Giriş Başarılı',
        icon: 'done'
      })
      this.$router.push('/locations').catch(er => {
        console.log("Error on login",er)
      })
      return true
    }).catch( er => {
      Notify.create({
        color : 'negative',
        position : 'center',
        progress : true,
        timeout : 1500,
        message : 'Sistem Hatası : '+er.message,
        icon : 'done'
      })
      ErrorHandlePrint(er)
    }).finally(fi => {
      console.log("Finally----")
    })
  },
  forgotPassword({commit},payload){
    return api.post('forgot-password',payload).then(() => {
      return true
    }).catch( er => {
      ErrorHandlePrint(er)
    })
  },
  update({commit},payload){

    return api.post("customers/update"+"/"+payload.get('id'),payload).then(res => {
      Notify.create({
        position: 'top-right',
        type: 'positive',
        message:'Kayıt Başarıyla Güncellendi'
      });
      return true
    }).catch(er => {
      ErrorHandlePrint(er)
    })
  },
}
const getters = {
  userDetailGetter : (state) => {
    return state.userDetail
  },
  checkLogin(){
    return  state.webAuthToken === '';
  }
}
export default {
  namespaced : true,
  state,
  mutations,
  actions,
  getters
}
