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
                <v-select :items="days" label="เลือกวันที่" solo></v-select>
                <v-select :items="items" label="เลือกจองพื้นที่" solo></v-select>
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
            <v-card-title class="text-h5">ยืนยันพื้นที่การจอง {{ selectedArea }}</v-card-title>
            <v-card-text>{{ selectedArea }}</v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="green darken-1" text @click="dialog = false">ยกเลิก</v-btn>
              <v-btn color="green darken-1" text @click="dialog = false">ยืนยัน</v-btn>
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
      items: [
        "A1",
        "A2",
        "A3",
        "A4",
        "A5",
        "B1",
        "B2",
        "B3",
        "B4",
        "C1",
        "C2",
        "C3",
        "C4",
        "D1",
        "D2",
        "D3",
        "D4",
        "E1",
        "E2",
        "E3",
        "E4",
        "F1",
        "F2",
        "F3",
        "F4"
      ],
      days,
      dialog: false
    };
  },
  components: {
    Bar
  },
  methods: {
    Reserve() {
      if (this.$refs.ReserveForm.validate(true)) {
        this.$router.push({ path: "/" }).catch(() => {});
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
