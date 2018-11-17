<template>
    <v-btn @click="$emit('loggit', 'hello from the component', 12 )">Log It</v-btn>
</template>

<script>
export default {
   name: 'LogIt' 
}
</script>

