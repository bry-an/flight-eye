<template>
<div>

<v-text-field
    v-model='number'
    placeholder='enter a number!'
/>
<v-btn @click='randomTrivia'>Get info</v-btn>
<p v-if='this.randomNumber'>{{randomNumber}}</p>
    
</div>
</template>


<script>
export default {
  name: "Numbers",
  data () {
      return {
          number: null
      }
  },
  methods: {
    randomTrivia() {
      this.$store.dispatch("randomNumberTrivia", this.number);
    }
  },
  computed: {
      randomNumber() {
          return this.$store.state.randomNumber
      }
  }
};
</script>

