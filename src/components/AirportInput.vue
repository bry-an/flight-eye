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
      apiResponse: false,
      flightData: [],
      airportRules: [
        v => !!v || "An airport code is required",
        v => v.length === 4 || "Please provide a 4-letter ICAO airport code."
      ]
    };
  },
  methods: {
    getFlightInfo(airportCode) {
      if (this.$refs.form.validate()) {
        fetch(
          `https://opensky-network.org/api/flights/arrival?airport=${airportCode}&begin=1542229237&end=1542283237`
        )
          .then(x => x.json())
          .then(x => (this.flightData = x));
      }
      this.$emit('log-it(hithere)')
    }
  }
};
</script>
<style lang="sass">
#search-dept-airport
  width: 300px

</style>
