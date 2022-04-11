<script setup lang="ts">
import { RouterView } from "vue-router";
import Navbar from "./components/Navbar.vue";
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
}
</style>
