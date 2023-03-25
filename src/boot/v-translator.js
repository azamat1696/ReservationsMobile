import { boot } from 'quasar/wrappers';
import vGoogleTranslate from "v-google-translate"
export default boot(async ( { app } ) => {
  app.use(vGoogleTranslate)
})
