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
            <br />
            <v-list-item-subtitle>{{ user.firstName }}</v-list-item-subtitle>
            <br />
            <v-list-item-subtitle>{{ user.lastName }}</v-list-item-subtitle>
            <br />
            <v-list-item-subtitle>{{ user.Tel }}</v-list-item-subtitle>
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
              <v-list-item-title v-model="reserve">ข้อมูลการจอง</v-list-item-title>
            </template>

            <v-list-group :value="true" no-action sub-group>
              <template v-slot:activator>
                <v-list-item-content>
                  <v-list-item v-for="item in items" :key="item.id">
                    <v-list-item-title>{{ item.area.areaName }} {{ item.reserveDate }}</v-list-item-title>
                  </v-list-item>
                </v-list-item-content>
              </template>

            </v-list-group>
          </v-list-group>
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
      user: {
        userName: "",
        firstName: "",
        lastName: "",
        Tel: ""
      },
      area: {
        areaName: ""
      },
      auth: null,
      admin: null,
      owner: null,
      idforDelete: "",
      items: []
    };
  },

  watch: {
    dialog(val) {
      val || this.close();
    },
    dialogDelete(val) {
      val || this.closeDelete();
    }
  },

  methods: {
    async reserve() {
      try {
        const responseReserve = await this.axios.get(
          `http://localhost:8000/reserve/${this.auth.userId}`
        );
        if (responseReserve.status === 200) {
          this.items = responseReserve.data;
          console.log("items", this.items);
        }
      } catch (error) {
        console.log("Error fetching product data:", error);
      }
    }
    
  },

  created() {
    this.auth = JSON.parse(localStorage.getItem("auth"));

    if (this.admin) {
      this.user.firstName = this.auth.admin.adminFname;
      this.user.lastName = this.auth.admin.adminLname;
      this.user.Tel = this.auth.admin.adminTel;
    } else {
      this.user.firstName = this.auth.owner.ownerFname;
      this.user.lastName = this.auth.owner.ownerLname;
      this.user.Tel = this.auth.owner.ownerTel;
    }
    this.reserve();
  }
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




