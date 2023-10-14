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
            <v-list-item-title class="text-h6">userName</v-list-item-title>
            <v-list-item-subtitle>firstName</v-list-item-subtitle>
            <v-list-item-subtitle>lastName</v-list-item-subtitle>
            <v-list-item-subtitle>Tel</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-list-item-group v-model="group" active-class="deep-purple--text text--accent-4">
          <router-link to="/" style="text-decoration: none;">
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-home</v-icon>
              </v-list-item-icon>
              <v-list-item-title>หน้าหลัก</v-list-item-title>
            </v-list-item>
          </router-link>

          <router-link to="/reserve" style="text-decoration: none;">
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-checkbox-marked-circle-outline</v-icon>
              </v-list-item-icon>
              <v-list-item-title>จองพื้นที่</v-list-item-title>
            </v-list-item>
          </router-link>

          <v-list-group no-action>
            <template v-slot:activator no-action>
              <v-list-item-title>ข้อมูลการจอง</v-list-item-title>
            </template>

            <v-list-group :value="true" no-action sub-group>
              <template v-slot:activator>
                <v-list-item-content>
                  <v-list-item-title>A4 21/06/2544</v-list-item-title>
                </v-list-item-content>
              </template>

              <v-list-item style="background-color:red;">
                <v-list-item-content style="color: white;">
                 ยกเลิก
                </v-list-item-content>
              </v-list-item>

            </v-list-group>
          </v-list-group>

          <!-- <v-list-group
          :value="true"
          no-action
          sub-group
        >
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title>Admin</v-list-item-title>
            </v-list-item-content>
          </template>

          <v-list-item
            v-for="([title, icon], i) in admins"
            :key="i"
            link
          >
          </v-list-item>
          </v-list-group>-->
        </v-list-item-group>

        <template v-slot:activator>
          <v-list-item-title>Users</v-list-item-title>
        </template>

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
      userName: {},
      firstName: {},
      lastName: {},
      Tel: {}
    };
  },
  methods: {}
};
</script>



<style scoped>
.display-2 {
  font-size: 5px; /* เปลี่ยนขนาดฟ้อนให้เล็กลงตามที่คุณต้องการ */
}
.no-border {
  border: none;
  box-shadow: none;
}
</style>




