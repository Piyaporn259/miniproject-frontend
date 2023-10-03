<template>
  <v-sheet width="300" class="mx-auto">
    <v-form ref="registerForm" fast-fail @submit.prevent>
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
</template>
  <script>
export default {
  data: () => ({
    firstName: "",

    firstNameRules: [
      value => {
        if (value?.length > 3) return true;
        return "First name must be at least 3 characters.";
      }
    ],
    lastName: "",
    lastNameRules: [
      value => {
        if (/[^0-9]/.test(value)) return true;
        return "Last name cannot contain digits.";
      }
    ],
    Tel: "",
    TelRules: [
      value => {
        if (value?.length > 9) return true;
        return "Tel number must be at least 10 numbers.";
      }
    ],
    userName: "",
    userNameRules: [
      value => {
        if (value?.length > 3) return true;
        return "User name must be at least 3 characters.";
      }
    ],
    password: "",
    passwordRules: [
      value => {
        if (value?.length > 3) return true;
        return "Password must be at least 3 characters.";
      }
    ]
  }),
  methods: {
    register() {
      if (this.$refs.registerForm.validate(true)) {
        this.$router.push({ path: "/login" }).catch(() => {});
      }
    }
  }
};
</script>
<style scoped>
.register-card {
  max-width: 2000px; /* Increase the max-width to make the card wider */
  height: 500px; /* Increase the height to make the card taller */
  margin: 0 auto; /* Center the card horizontally */
}
</style>
