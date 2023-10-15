<template>
    <div>
      <v-app-bar color="#F2937E" dark>
        <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
  
        <v-toolbar-title>Marketplace space</v-toolbar-title>
      </v-app-bar>
  
      <v-navigation-drawer v-model="drawer" absolute temporary>
        <v-list nav dense>
          <v-list-item class="px-2">
            <v-list-item-avatar>
              <v-img :src="require('../assets/account.png')" class="my-3" contain height="400"></v-img>
            </v-list-item-avatar>
          </v-list-item>

          <v-list-item link>
          <v-list-item-content>
            <v-list-item-title class="text-h6">{{ user.userName }}</v-list-item-title>
            <br/>
            <v-list-item-subtitle>{{ user.firstName }}</v-list-item-subtitle>
            <br/>
            <v-list-item-subtitle>{{ user.lastName }}</v-list-item-subtitle>
            <br/>
            <v-list-item-subtitle>{{ user.Tel }}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

          <v-list-item-group v-model="group" active-class="deep-purple--text text--accent-4">
            <router-link to="/HomeAdmin" style="text-decoration: none;">
              <v-list-item>
                <v-list-item-icon>
                  <v-icon>mdi-home</v-icon>
                </v-list-item-icon>
                <v-list-item-title>หน้าหลัก</v-list-item-title>
              </v-list-item>
            </router-link>
  
            <router-link to="/Admin" style="text-decoration: none;">
              <v-list-item>
                <v-list-item-icon>
                  <v-icon>mdi-checkbox-marked-circle-outline</v-icon>
                </v-list-item-icon>
                <v-list-item-title>จัดการข้อมูลการจอง</v-list-item-title>
              </v-list-item>
            </router-link>
          </v-list-item-group>
  
          <router-link to="/login" style="text-decoration: none;">
            <v-list-item style="margin-top: 445px;">
              <v-list-item-icon>
                <v-icon>mdi-exit-to-app</v-icon>
              </v-list-item-icon>
              <v-list-item-title>ออกจากระบบ</v-list-item-title>
            </v-list-item>
          </router-link>
        </v-list>
      </v-navigation-drawer>
    </div>
  </template>
  
  
  <script>
export default {
  data() {
    return {
      drawer: false,
      group: null,
      user: {
        userName: "",
        firstName: "",
        lastName: "",
        Tel: ""
      },
      auth: null,
      admin: null,
      owner: null
    };
  },
  methods: {},
  created() {
    this.auth = JSON.parse(localStorage.getItem("auth"));
    this.user.userName = this.auth.userName;
    this.admin = this.auth.admin !== null;
    // this.owner =   this.auth.owner !== null
    if (this.admin) {
      this.user.firstName =  this.auth.admin.adminFname
      this.user.lastName =  this.auth.admin.adminLname
      this.user.Tel =  this.auth.admin.adminTel
    }else{
      this.user.firstName =  this.auth.owner.ownerFname
      this.user.lastName =  this.auth.owner.ownerLname
      this.user.Tel =  this.auth.owner.ownerTel
    }
  }
};
</script>
  
  