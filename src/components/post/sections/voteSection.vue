<template>
  <div class="me-3 mt-2">
    <button
      class="bi bi-caret-up btn"
      :class="{ 'bg-info': postAndInteractions.interactions?.voteStatus }"
      @click="vote(true)"
    />
    <div class="text-center">{{ postAndInteractions.post.votePoints }}</div>
    <button class="bi bi-caret-down btn" @click="vote(false)" />
  </div>
</template>

<script setup lang="ts">
import type { PostAndInteractions } from "@/stores/post/PostTypes";
import type { UserPostAndInteractions } from "@/stores/user/UserTypes";
import { ref } from "vue";

const props = defineProps<{
  postAndInteractions: PostAndInteractions | UserPostAndInteractions;
  isInProfile?: boolean;
}>();

const { postAndInteractions, isInProfile } = props;
const voteStatus = ref(postAndInteractions.interactions?.voteStatus);

function vote(val: boolean) {
  console.log("voted: ", val);
}
</script>

<style scoped></style>
