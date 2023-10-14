<template>
  <v-app>
    <Bar1 />
    <v-container>
      <v-row>
        <v-col cols="12">
          <LoginFrom />
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>
  
  <script>
import LoginFrom from "../components/Login.vue";
import Bar1 from "@/components/Bar1.vue";

export default {
  components: {
    Bar1,
    LoginFrom
  }
};
</script>
  
  <style>
</style>
  