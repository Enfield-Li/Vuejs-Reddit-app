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
import { reactive } from "vue-demi";

const formData = reactive({
  usernameOrEmail: "",
  password: "",
});

function submitForm() {
  console.log(formData);
}
</script>

<style scoped></style>
