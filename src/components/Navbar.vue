<template>
  <nav class="nav justify-content-between container align-items-center">
    <div role="button" class="nav-link active text-dark h2" aria-current="page">
      <!-- Home -->
      <router-link :to="{ name: 'home' }" @click="clearCache">
        <i class="bi bi-reddit text-danger fs-1"></i>
        <span class="text-danger"> Reddit</span>
      </router-link>
    </div>

    <div class="d-flex align-items-center">
      <!-- CreatePost -->
      <div>
        <router-link :to="{ name: 'createPost' }">
          <i class="bi bi-plus-square fs-3 mx-3"></i>
        </router-link>
      </div>

      <!-- UserInfo -->
      <UserInfo />
    </div>
  </nav>
</template>

<script setup lang="ts">
import { usePostStore } from "@/stores/post/postStore";
import { useRoute } from "vue-router";
import UserInfo from "./UserInfo.vue";

const postStore = usePostStore();

const route = useRoute();

function clearCache() {
  postStore.clearPostsCache();

  if (route.name === "home") postStore.fetchPaginatedPosts();
}
</script>

<style scoped></style>
