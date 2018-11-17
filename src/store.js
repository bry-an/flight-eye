import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    flightData: [],

  },
  mutations: {
    setFlightData(state, payload) {
      state.flightData = payload
    }

  },
  actions: {
    async getFlightData(context, payload) {
      const response =
      await
        fetch(
          `https://opensky-network.org/api/flights/arrival?airport=${payload}&begin=1542229237&end=1542283237`
        )
        .then(x => x.json())
        context.commit('setFlightData', response)

    }

  }
})
