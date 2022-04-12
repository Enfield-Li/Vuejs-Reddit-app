<script setup lang="ts">
import { onMounted } from "vue";
import { RouterView } from "vue-router";
import Navbar from "./components/Navbar.vue";
import { useUserStore } from "./stores/user/uesrStore";

const userStore = useUserStore();
onMounted(() => {
  userStore.me();
});
</script>

<template>
  <div style="background: #dae0e6">
    <div class="bg-white">
      <Navbar />
    </div>

    <RouterView />
  </div>
</template>

<style>
a {
  text-decoration: none;
  color: black;
}
</style>
