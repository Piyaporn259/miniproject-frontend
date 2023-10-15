<template>
  <div>
    <Bar />
    <br />

    <v-card class="custom-card">
      <br />
      <h3 class="my-5">กรุณาเลือกจองพื้นที่ที่ต้องการ</h3>
      <br />

      <v-col cols="12">
        <v-img :src="require('../assets/plan.png')" class="my-10" contain height="200" />
      </v-col>

      <v-col class="d-flex" cols="12" sm="6">
        <v-row align="center">
          <v-col cols="12">
            <div class="d-flex align-center justify-end">
              <v-subheader class="text-h6 mr-2">คุณต้องการจอง</v-subheader>
              <div class="custom-selects">
                <v-select
                  :items="days"
                  label="เลือกวันที่"
                  solo
                  v-model="dataReserve"
                  @change="selectDate"
                ></v-select>
                <v-select
                  :items="items"
                  label="เลือกจองพื้นที่"
                  item-value="areaId"
                  item-text="areaName"
                  solo
                  v-model="area"
                ></v-select>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-col>

      <v-row justify="center">
        <v-dialog v-model="dialog" persistent max-width="290">
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="primary" dark v-bind="attrs" v-on="on">ยืนยัน</v-btn>
          </template>

          <v-card>
            <v-card-title class="text-h5">ยืนยันพื้นที่การจอง</v-card-title>
            <p>วันที่ : {{ dataReserve }}</p>
            <p>พื้นที่ : {{ getAreaName(area) }}</p>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="green darken-1" text @click="dialog = false">ยกเลิก</v-btn>
              <v-btn color="green darken-1" text @click="reserve">ยืนยัน</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-row>
      <br />
      <br />
    </v-card>
  </div>
</template>

<script>
import Bar from "@/components/Bar.vue";
import Swal from "sweetalert2";

export default {
  data() {
    const days = [];
    const today = new Date();
    const endDate = new Date("2023-12-31");

    for (let d = new Date(today); d <= endDate; d.setDate(d.getDate() + 1)) {
      let year = d.getFullYear();
      let month = (d.getMonth() + 1).toString().padStart(2, "0");
      let day = d
        .getDate()
        .toString()
        .padStart(2, "0");
      days.push(`${year}-${month}-${day}`);
    }

    return {
      items: [],
      days,
      dialog: false,
      selectedArea: "",
      dataReserve: "",
      area: ""
    };
  },
  components: {
    Bar
  },
  created() {
    this.AreaData();
  },

  methods: {
    async AreaData() {
      try {
        const response = await this.axios.get("http://localhost:8000/area");
        this.items = response.data;
        console.log(this.items);
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    },
    getAreaName(areaId) {
      const foundItem = this.items.find(e => e.areaId === areaId);
      return foundItem ? foundItem.areaName : "";
    },

    selectDate(date) {
      this.date = date;
      console.log("date", date);
    },
    Reserve() {
      if (this.$refs.ReserveForm.validate(true)) {
        this.$router.push({ path: "/" }).catch(() => {});
      }
    },
    async reserve() {
      try {
        const user = JSON.parse(localStorage.getItem("auth"));
        const userId = user.userId;
        const data = {
          reserveDate: this.dataReserve,
          user: {
            userId: userId
          },
          area: {
            areaId: this.area
          }
        };
        const responseReserve = await this.axios.post(
          "http://localhost:8000/reserve",
          data
        );
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    }
  }
};
</script>


<style scoped>
.custom-card {
  max-width: 950px; /* กำหนดขนาดสูงสุดของการ์ดเป็น 600px */
  margin: 0 auto; /* จัดการ์ดให้อยู่ตรงกลางของหน้า */
}

h3 {
  margin-left: 25px; /* ปรับค่าตามที่ต้องการ */
  margin-top: 40px;
}
.v-select {
  margin-left: 20px; /* เพิ่มค่านี้เพื่อปรับระยะห่างของ v-select จาก h3 ด้านบน */
}
.custom-selects {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-right: 50px; /* ปรับตำแหน่งของเลือกตามต้องการ */
}
</style>
