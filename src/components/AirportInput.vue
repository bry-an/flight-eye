<template>
<div>
    <v-form ref='form' @submit.prevent='getFlightInfo(airport)'>
        <v-text-field
            id='search-dept-airport'
            v-model='airport'
            required
            :rules='airportRules'
            placeholder="Search Departure Airport">
        </v-text-field>
        <v-btn 
            color='info'
            @click.prevent='getFlightInfo(airport)'
            >Search
        </v-btn>
        <v-btn
          @click.prevent="$emit(logIt('hi there'))">Hi
        </v-btn>
    </v-form>
<v-list v-for='airplane in flightData' :key='airplane.firstseen'>
  <p>{{airplane.callsign}} departed from {{airplane.estDepartureAirport}}, first seen at {{airplane.firstseen}} and last seen at {{airplane.lastseen}}</p>
</v-list>
</div>

</template>

<script>
export default {
  name: "AirportInput",
  data() {
    return {
      airport: "",
      airportRules: [
        v => !!v || "An airport code is required",
        v => v.length === 4 || "Please provide a 4-letter ICAO airport code."
      ]
    };
  },
  methods: {
    getFlightInfo(airportCode) {
      this.$store.dispatch('getFlightData', airportCode)
    }
  },
  computed: {
    flightData () {
    return this.$store.state.flightData
    }
  }

};
</script>
<style lang="sass">
#search-dept-airport
  width: 300px

</style>
