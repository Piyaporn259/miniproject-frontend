<template>
  <v-card class="login-card">
    <v-card-title style="font-size: 24px ">เข้าสู่ระบบ</v-card-title>
    <v-card-text>
      <v-form ref="loginForm" v-model="valid" lazy-validation>
        <v-text-field solo label="ชื่อผู้ใช้งาน" v-model="name">
          <template v-slot:label>
            <v-icon left>mdi-account</v-icon>
            <span class="label-text">ชื่อผู้ใช้งาน</span>
          </template>
        </v-text-field>

        <v-text-field solo label="รหัสผ่าน" v-model="password">
          <template v-slot:label>
            <v-icon left>mdi-key</v-icon>
            <span class="label-text">รหัสผ่าน</span>
          </template>
        </v-text-field>

        <p class="subheading font-weight-regular text-right">
          <router-link to="/register" target="_blank">คุณต้องการลงทะเบียน?</router-link>
        </p>

        <v-btn :disabled="!valid" color="#79BED9" class="mr-4" @click="login" block>เข้าสู่ระบบ</v-btn>
      </v-form>
    </v-card-text>
  </v-card>
</template>
  
<script>
import Swal from "sweetalert2";
export default {
  data: () => ({
    valid: true,
    name: "",
    nameRules: [
      v => !!v || "กรุณากรอกชื่อผู้ใช้",
      v => (v && v.length <= 20) || "กรุณากรอกชื่อผู้ใช้งานห้ามเกิน 20ตัวอักษร"
    ],
    password: "",
    passwordRules: [v => !!v || "กรุณากรอกรหัสผ่าน"]
  }),
  methods: {
    Login() {
      if (this.$refs.loginForm.validate(true)) {
        this.$router.push({ path: "/" }).catch(() => {});
      }
    },

    async login() {
      const data = {
        userName: this.name,
        password: this.password
      };
      console.log(data);
      
      try {
        var response = await this.axios.post(
          "http://localhost:8000/login",
          data
        );
        if (response.status === 200) {
          console.log(response.data);
          localStorage.setItem("auth", JSON.stringify(response.data));
          Swal.fire({
            title: "สำเร็จ!",
            text: "กดยืนยันเพื่อเข้าสู่ระบบ",
            icon: "success",
            confirmButtonText: "ยืนยัน"
          }).then(() => {
            if (response.data.type.typeName === "Owner"){
              window.location.href = "/";
            }else if(response.data.type.typeName === "Admin"){
              window.location.href = "/HomeAdmin";
            }
            
          });
        }
      } catch (error) {
        Swal.fire({
          title: "ไม่สำเร็จ!",
          text: "กรุณากรอกข้อมูลใหม่",
          icon: "error",
          confirmButtonText: "ตกลง"
        });
        console.log(error);
      }
    }
  }
};
</script>
  
<style scoped>
.login-card {
  max-width: 450px; /* ปรับขนาดของการ์ดให้เล็กลงตามที่ต้องการ */
  margin: 0 auto; /* จัดขอบการ์ดให้อยู่ตรงกลางของหน้า */
}

.label-text {
  margin-left: 10px; /* ปรับขนาดและระยะห่างตามที่คุณต้องการ */
}
</style>