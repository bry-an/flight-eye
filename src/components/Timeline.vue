<template>
<div>
<v-autocomplete
  data = 'names' >
</v-autocomplete>
  <v-timeline
    >
    <v-timeline-item
      v-for="item in portfolioItems"
      :key="item.name"
      color="blue lighten-2"
      fill-dot
      large
    >
      <span slot="opposite">{{item.githubLink}}</span>
      <v-card class="elevation-2">
        <v-card-title class="purple lighten-2"><h2>{{item.name}}</h2></v-card-title>
        <v-card-text>
          {{item.problem}}
        </v-card-text>
      </v-card>
    </v-timeline-item>
  </v-timeline>
</div>
</template>
<script>
import portfolioItems from "../../data/portfolioItems";
import employeeStatus from "../../data/employeeStatus";
export default {
  name: "Timeline",
  data() {
    return {
      portfolioItems,
      employeeStatus
    };
  },
  computed: {
    names() {
      return employeeStatus.map(item => item.name);
    }
  }
};
</script>
