<template>
  <div v-if="paginatedPosts.postAndInteractions.length">
    <ul
      v-for="postAndInteraction in paginatedPosts.postAndInteractions"
      :key="postAndInteraction.post.id"
    >
      <PostCard :post-and-interactions="postAndInteraction" />
    </ul>
  </div>
  <div v-else>
    <ContentPlaceholder />
    <ContentPlaceholder />
  </div>

  <button v-if="paginatedPosts.hasMore">More posts</button>
</template>

<script setup lang="ts">
import { usePostStore } from "../stores/post/postStore";
import { onMounted } from "@vue/runtime-core";
import { toRefs } from "vue";
import PostCard from "./post/postCard.vue";
import ContentPlaceholder from "./placehoders/ContentPlaceholder.vue";

const postStore = usePostStore();

const { paginatedPosts } = toRefs(postStore);

onMounted(() => {
  postStore.fetchPaginatedPosts();
});
</script>

<style scoped></style>
