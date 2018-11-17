<template>
<div>

<v-btn @click='randomTrivia'>Random Trivia</v-btn>
<p v-if='this.randomNumber'>{{randomNumber}}</p>
    
</div>
</template>


<script>
export default {
  name: "Numbers",
  methods: {
    randomTrivia() {
      this.$store.dispatch("randomNumberTrivia");
    }
  },
  computed: {
      randomNumber() {
          return this.$store.state.randomNumber
      }
  }
};
</script>

