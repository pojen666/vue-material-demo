<template>
  <div class="home">
    <div class="w-30">
      <date-picker></date-picker>
    </div>
  </div>
</template>

<script>

import DatePicker from '@/components/DatePicker.vue'
import Vue from 'vue'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

Vue.use(VueMaterial)

export default {
  name: "DatePickerList",
  components: {
    DatePicker,
  },
};
</script>

<style>
.w-30 {
  width: 30%;
  align-content: center;
}
</style>
