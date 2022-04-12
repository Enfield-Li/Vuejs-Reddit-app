<template>
  <div class="my-2">
    <router-link
      :to="{ name: 'post', params: { id: postAndInteractions.post.id } }"
    >
      <!-- title -->
      <div role="button" class="card-title text-decoration-none h3">
        {{ props.postAndInteractions.post.title }}
      </div>

      <!-- content -->
      <p class="card-text mt-1 text-muted fs-5">
        {{ postAndInteractions.post.content }}...
      </p>
    </router-link>

    <InteractionDisplay
      :postAndInteractions="postAndInteractions"
      :isInProfile="isInProfile"
    />
  </div>
</template>

<script setup lang="ts">
import type { PostAndInteractions } from "@/stores/post/PostTypes";
import type { UserPostAndInteractions } from "@/stores/user/UserTypes";
import InteractionDisplay from "./InteractionDisplay.vue";

// https://vuejs.org/guide/components/provide-inject.html#prop-drilling
const props = defineProps<{
  postAndInteractions: PostAndInteractions | UserPostAndInteractions;
  isInProfile?: boolean;
}>();
const { postAndInteractions, isInProfile } = props;
</script>

<style scoped></style>
