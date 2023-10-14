<template>
  <v-app>
    <Bar1 />
    <v-container>
      <v-row>
        <v-col cols="12">
          <RegisterFrom />
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>
  
  <script>
import RegisterFrom from "../components/Register.vue";
import Bar1 from "@/components/Bar1.vue";

export default {
  components: {
    Bar1,
    RegisterFrom
  }
};
</script>
<style>
</style>;
