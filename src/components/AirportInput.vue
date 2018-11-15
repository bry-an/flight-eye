<template>
<v-form>
    <v-text-field
        v-model='airport'>
    </v-text-field>
</v-form>

</template>

<script>
export default {
  name: "AirportInput",
  data() {
    return {
      airport: ""
    };
  }
};
</script>