<template>
  <div>userInfo</div>

  <div className="d-flex align-items-center">
    <div className="mx-3 fs-5">
      <RouterLink :to="{ name: 'login' }" style="color: black">
        Login
      </RouterLink>
    </div>

    <div className="mx-3 fs-5">
      <RouterLink :to="{ name: 'register' }" style="color: black">
        Register
      </RouterLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>

<style scoped></style>
