<template>
  <div class="container" >
    <v-sheet  class="mx-auto" style=" display: flex;
  justify-content: center;
  align-items: center;">
      <v-form ref="registerForm" fast-fail @submit.prevent class="registerForm-card">
        <v-card class="register-card">
          <v-card-title style="font-size: 24px ">ลงทะเบียน</v-card-title>
          <v-card-text>
            <v-text-field v-model="firstName" label="ชื่อ" :rules="firstNameRules"></v-text-field>

            <v-text-field v-model="lastName" label="นามสกุล" :rules="lastNameRules"></v-text-field>

            <v-text-field v-model="Tel" label="เบอร์โทรศัพท์" :rules="TelRules"></v-text-field>

            <v-text-field v-model="userName" label="ชื่อผู้ใช้งาน" :rules="userNameRules"></v-text-field>

            <v-text-field v-model="password" label="รหัสผ่าน" :rules="passwordRules"></v-text-field>

            <p class="subheading font-weight-regular text-right">
              <router-link to="/login" target="_blank">มีบัญชีอยู่แล้ว?</router-link>
            </p>

            <v-btn color="#79BED9" class="mr-4" @click="register" block>ลงทะเบียน</v-btn>
          </v-card-text>
        </v-card>
      </v-form>
    </v-sheet>
  </div>
</template>

  <script>
import Swal from "sweetalert2";

export default {
  data: () => ({
    valid: true,
    firstName: "",

    firstNameRules: [
      value => {
        if (value?.length > 2) return true;
        return "ชื่อต้องเป็นตัวอักษรเท่านั้น";
      }
    ],
    lastName: "",
    lastNameRules: [
      value => {
        if (/[^0-9]/.test(value)) return true;
        return "นามสกุลต้องเป็นตัวอักษรเท่านั้น";
      }
    ],
    Tel: "",
    TelRules: [
      value => {
        if (value?.length > 9) return true;
        return "กรอกหมายเลขให้ครบ 10 ตัว";
      }
    ],
    userName: "",
    userNameRules: [
      value => {
        if (value?.length > 2) return true;
        return "ชื่อผู้ใช้ต้องมีอย่างน้อย 2 ตัวอักษรขึ้นไป";
      }
    ],
    password: "",
    passwordRules: [
      value => {
        if (value?.length > 2) return true;
        return "ตัวอักษรหรือตัวเลข 2 ตัวขึ้นไป";
      }
    ]
  }),
  methods: {
    register() {
      if (this.$refs.registerForm.validate(true)) {
        this.$router.push({ path: "/login" }).catch(() => {});
      }
    },
    async register() {
    const info = {
      ownerFname: this.firstName,
      ownerLname: this.lastName,
      ownerTel: this.Tel,
      userName: this.userName,
      password: this.password
    };
    console.log(info);

    try {
      var response = await this.axios.post(
        "http://localhost:8000/register",
        info
      );
      if (response.status === 201) {
        console.log(response.info);
        localStorage.setItem("auth", JSON.stringify(response.info));
        Swal.fire({
          title: "สำเร็จ!",
          text: "ทำการลงทะเบียเสร็จสิ้น",
          icon: "success",
          confirmButtonText: "ยืนยัน"
        }).then(() => (window.location.href = "/login"));
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
  },
  
};
</script>
<style scoped>
.register-card {
  max-width: 1000px;
  height: 600px; 
  margin: 0 auto; 
  
}
.registerForm-card{
  width: 400px;
}
.container{
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
