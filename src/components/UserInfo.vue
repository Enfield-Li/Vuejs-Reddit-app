<template>
  <div v-if="user">userInfo</div>

  <div class="d-flex align-items-center" v-else="user">
    <div class="mx-3 fs-5">
      <RouterLink :to="{ name: 'login' }" style="color: black">
        Login
      </RouterLink>
    </div>

    <div class="mx-3 fs-5">
      <RouterLink :to="{ name: 'register' }" style="color: black">
        Register
      </RouterLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from "vue-router";
import { useUserStore } from "@/stores/user/uesrStore";
import { toRefs } from "vue";

const userStore = useUserStore();

const { user } = toRefs(userStore);
</script>

<style scoped></style>
