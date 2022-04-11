<template>
  <form @submit.prevent="submitForm">
    <label>Username or email</label>
    <input v-model="formData.usernameOrEmail" type="text" />

    <label>Password</label>
    <input v-model="formData.password" type="text" />
    <button>submit</button>
  </form>
</template>

<script setup lang="ts">
import router from "@/router";
import { useUserStore } from "@/stores/user/uesrStore";
import { reactive } from "vue-demi";
const userStore = useUserStore();

const formData = reactive({
  usernameOrEmail: "",
  password: "",
});
const { usernameOrEmail, password } = formData;

async function submitForm() {
  const res = await userStore.loginUser({ usernameOrEmail, password });
  if (res) router.push({ name: "home" });
}
</script>

<style scoped></style>
