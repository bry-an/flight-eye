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
            dark
            @click.prevent='getFlightInfo(airport)'
            >Search
        </v-btn>
        <LogIt v-on:loggit='loggit'/>
    </v-form>
    <v-layout row wrap justify-space-around>
      
<v-flex xs5 v-for='airplane in flightData' :key='airplane.firstseen'>
  <v-card>
  <p>{{airplane.callsign}} departed from {{airplane.estDepartureAirport}}, first seen at {{airplane.firstseen}} and last seen at {{airplane.lastseen}}</p>
  </v-card>
</v-flex>
    </v-layout>
</div>

</template>

<script>
import LogIt from './LogIt'
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
      this.$store.dispatch('getFlightData', airportCode);
      this.$emit('log-it', 'aloha!')
    }, 
    loggit (message, number) {
      console.log(message)
      console.log(3 * number)
    }
  },
  computed: {
    flightData () {
    return this.$store.state.flightData
    }
  }, 
  components: {
    LogIt
  }


};
</script>
<style lang="sass">
#search-dept-airport
  width: 300px

</style>
