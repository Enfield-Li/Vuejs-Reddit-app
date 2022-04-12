<template>
  <nav class="nav justify-content-between container align-items-center">
    <div
      role="button"
      className="nav-link active text-dark h2"
      aria-current="page"
    >
      <!-- Home -->
      <router-link :to="{ name: 'home' }">
        <i className="bi bi-reddit text-danger fs-1"></i>
        <span className="text-danger"> Reddit</span>
      </router-link>
    </div>

    <div className="d-flex align-items-center">
      <!-- CreatePost -->
      <div>
        <router-link :to="{ name: 'createPost' }">
          <i className="bi bi-plus-square fs-3 mx-3"></i>
        </router-link>
      </div>

      <!-- UserInfo -->
      <UserInfo />
    </div>
  </nav>
</template>

<script setup lang="ts">
import UserInfo from "./UserInfo.vue";
</script>

<style scoped></style>
