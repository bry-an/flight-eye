<template>
<div>
    <v-form @submit.prevent='getFlightInfo(airport)'>
        <v-text-field
            v-model='airport'>
        </v-text-field>
        <v-btn 
            color='info'
            @click.prevent='getFlightInfo(airport)'
            >Search
        </v-btn>
    </v-form>
<v-list v-for='airplane in flightData' :key='airplane.icao24'>
  {{airplane.callsign}}
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
      flightData: []
    };
  },
  methods: {
    getFlightInfo(airportCode) {
      fetch(
        `https://opensky-network.org/api/flights/arrival?airport=${airportCode}&begin=1542229237&end=1542283237`
      )
        .then(x => x.json())
        .then(x => (this.flightData = x));

    }
  }
};
</script>