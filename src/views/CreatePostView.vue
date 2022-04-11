<template>
  <form @submit.prevent="submitForm">
    <label>Title: </label>
    <input v-model="postData.title" type="text" />

    <label>Content: </label>
    <input v-model="postData.content" type="text" />
    <button>submit</button>
  </form>
</template>

<script setup lang="ts">
import { reactive } from "vue-demi";

const postData = reactive({
  title: "",
  content: "",
});

function submitForm() {
  console.log(postData);
}
</script>

<style scoped></style>
