<template>
  <v-app>
    <bar />
    <hello-world />
    <v-spacer></v-spacer>
    <v-footer style="background-color: #F2C6AC;">
      <v-col class="text-center" cols="12">
        {{ new Date().getFullYear() }} —
        <strong>Thank you</strong>
      </v-col>
    </v-footer>
  </v-app>
</template>

<script>
import HelloWorld from "../components/HelloWorld";
import bar from "../components/Bar.vue";

export default {
  name: "Home",

  components: {
    HelloWorld,
    bar,
  }
};
</script>
