<template>
  <div class="me-3 mt-2">
    <button
      class="bi bi-caret-up btn"
      :class="{ 'bg-info': postAndInteractions.interactions?.voteStatus }"
      @click="vote(true)"
    />
    <div class="text-center">{{ postAndInteractions.post.votePoints }}</div>
    <button
      class="bi bi-caret-down btn"
      :class="{
        'bg-info': postAndInteractions.interactions?.voteStatus === false,
      }"
      @click="vote(false)"
    />
  </div>
</template>

<script setup lang="ts">
import { usePostStore } from "@/stores/post/postStore";
import type { PostAndInteractions } from "@/stores/post/PostTypes";
import type { UserPostAndInteractions } from "@/stores/user/UserTypes";
import { toRefs } from "vue";

const postStore = usePostStore();
const props = defineProps<{
  postAndInteractions: PostAndInteractions | UserPostAndInteractions;
  isInProfile?: boolean;
}>();

const { postAndInteractions, isInProfile } = toRefs(props);

function vote(val: boolean) {
  postStore.interactWithPost(postAndInteractions.value.post.id, val, "vote");
}
</script>

<style scoped></style>
