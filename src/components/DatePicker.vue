<template>
  <md-datepicker v-model="selectedDate" md-immediately></md-datepicker>
</template>

<script>

import Vue from 'vue'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

Vue.use(VueMaterial)

export default {
  name: 'BasicDatepicker',
  data: () => ({
    selectedDate: null,
  })
};
</script>

<style>
.test {
  width: 30%;
  align-content: center;
}
</style>