<template>
  <nav class="nav justify-content-between container align-items-center">
    <div
      role="button"
      className="nav-link active text-dark h2"
      aria-current="page"
    >
      <!-- Home -->
      <router-link :to="{ name: 'home' }" @click="clearCache">
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
import { usePostStore } from "@/stores/post/postStore";
import UserInfo from "./UserInfo.vue";

const postStore = usePostStore();

function clearCache() {
  postStore.clearPostsCache();
  postStore.fetchPaginatedPosts();
}
</script>

<style scoped></style>
