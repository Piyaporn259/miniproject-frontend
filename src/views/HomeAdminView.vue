<template>
   
  <v-app>
    <BarAdmin />

  <v-row class="text-center">
    <v-col cols="12">
      <v-img
        :src="require('../assets/market.png')"
        class="my-3"
        contain
        height="200"
      />
    </v-col>

    <v-col class="mb-4">
      <h1 class="display-2 font-weight-bold mb-3">
        Welcome to Admin
      </h1>

      <h4>
        ยินดีต้องรับทุกท่าน ทุกท่านสามารถที่จะเลือกพื้นที่ขายของได้เลยโดยกดที่ปุ่มจองพื้นที่ขายของแล้วยืนยันการจอง ในส่วนของการชำระเงินจะสามารถชำระได้ที่ส่วนกลางของตลาดได้เลย
      </h4>
    </v-col>
      
  </v-row>
<v-footer style="background-color: #F2C6AC;">
      <v-col class="text-center" cols="12">
        {{ new Date().getFullYear() }} —
        <strong>Thank you</strong>
      </v-col>
    </v-footer>
</v-app>
  </template>
  
  <script>
  import BarAdmin from '@/components/BarAdmin.vue';

  
  export default {
    name: 'Home',
  
    components: {
        BarAdmin
}
  }
  </script>
  