<template>
  <form @submit.prevent="submitForm">
    <label>Username or email</label>
    <input v-model="usernameOrEmail" type="text" />

    <label>Password</label>
    <input v-model="password" type="text" />
    <button>submit</button>
  </form>
</template>

<script setup lang="ts">
import router from "@/router";
import { useUserStore } from "@/stores/user/uesrStore";
import { reactive } from "vue-demi";
import { toRefs } from "vue";
import { usePostStore } from "@/stores/post/postStore";

const userStore = useUserStore();
const postStore = usePostStore();

const formData = reactive({
  usernameOrEmail: "",
  password: "",
});
const { usernameOrEmail, password } = toRefs(formData);

async function submitForm() {
  const { usernameOrEmail, password } = formData;
  const res = await userStore.loginUser({ usernameOrEmail, password });
  if (res) {
    postStore.clearPostsCache();
    setTimeout(() => router.push({ name: "home" }), 1);
  }
}
</script>

<style scoped></style>
