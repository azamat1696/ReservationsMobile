import {LocalStorage, Notify} from "quasar";
import { routerInstance } from 'boot/customRouteInstance'
export function ErrorHandlePrint (errorsObj) {
  const statusCode = errorsObj.response.status ? errorsObj.response.status : 401
  if (statusCode === 401) {
    routerInstance.push({name: 'login',replace: true})
    LocalStorage.remove('webLoginUserEmail')
    LocalStorage.remove('webAuthToken')
    LocalStorage.remove('webUserDetail')
  }
  let errors = errorsObj.response.data.errors

  let errorMsgTimeout = 1000;
  for (const [k,v] of Object.entries(errors))
  {

    errorMsgTimeout += 1000
    errors[k].forEach(e => {
      Notify.create({
        type:'negative',
        message: e,
        timeout:errorMsgTimeout,
        position:'bottom-right',
        progress:true
      })
    })
  }
}
