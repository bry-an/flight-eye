<template>
<div>
<v-autocomplete
  v-model='autocomplete'
  :items= 'names'>
</v-autocomplete>
  <v-timeline
    >
    <v-timeline-item
      v-for="employee in employeeStatus"
      :key="employee.name"
      color="blue lighten-2"
      fill-dot
    >
      <span slot="opposite">{{employee.hardwareSelected}}</span>
      <v-card class="elevation-2">
        <v-card-title class="red lighten-2"><h2>{{employee.hireConfirmed}}</h2></v-card-title>
        <v-card-text>
          {{employee.name}}
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
      employeeStatus,
      autocomplete: null
    };
  },
  computed: {
    names() {
      return employeeStatus.map(item => item.name);
    }
  },
  methods: {}
};
</script>
