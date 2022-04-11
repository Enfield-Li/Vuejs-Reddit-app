<template>
  <form @submit.prevent="submitForm">
    <label>Username: </label>
    <input v-model="formData.username" type="text" />

    <label>Email: </label>
    <input v-model="formData.email" type="text" />

    <label>Password</label>
    <input v-model="formData.password" type="text" />
    <button>submit</button>
  </form>
</template>

<script setup lang="ts">
import { reactive } from "vue-demi";

const formData = reactive({
  username: "",
  email: "",
  password: "",
});

function submitForm() {
  console.log(formData);
}
</script>

<style scoped></style>
