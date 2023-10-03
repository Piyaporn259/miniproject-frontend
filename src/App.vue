<template>
  <v-app>
    <v-main>
      <router-view />
    </v-main>

    
  </v-app>
</template>

<script>

export default {
  name: "App",


  data: () => ({}),

  methods: {
    goToLogin() {
      this.$router.push({ path: '/login'}).catch(() => {})
    },
    goToregister() {
      this.$router.push({ path: '/register'}).catch(() => {})
      
    }
  }
};
</script>