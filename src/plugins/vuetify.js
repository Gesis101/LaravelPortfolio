import Vue from 'vue'
import Vuetify, { VRow } from 'vuetify/lib'

Vue.use(Vuetify, {
  components: { VRow }
})

export default new Vuetify({
    theme: {
        dark: true,
    },
})
