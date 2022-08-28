import { boot } from 'quasar/wrappers'
import VueGoogleMaps from '@fawmi/vue-google-maps'

export default boot(async ( { app } ) => {
  app.use(VueGoogleMaps, {
    load: {
      key: 'AIzaSyAPN4OzkHNIs7dcf94xIqfqVNHWWut05dA',
      libraries: "places"
    },
    autobindAllEvents: true
  })
})
