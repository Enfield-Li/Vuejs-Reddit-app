<template>
  <div v-if="paginatedPosts.postAndInteractions.length">
    <ul v-for="post in paginatedPosts.postAndInteractions" :key="post.post.id">
      {{
        post.post.title
      }}
    </ul>
  </div>

  <button v-if="paginatedPosts.hasMore">More posts</button>
</template>

<script setup lang="ts">
import { usePostStore } from "../stores/post/postStore";
import { onMounted } from "@vue/runtime-core";
import { toRefs } from "vue";

const postStore = usePostStore();

const { paginatedPosts } = toRefs(postStore);

onMounted(() => {
  postStore.fetchPaginatedPosts();
});
</script>

<style scoped></style>
