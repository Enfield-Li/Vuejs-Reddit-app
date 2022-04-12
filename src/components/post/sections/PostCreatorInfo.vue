<template>
  <div class="fs-6 fw-lighter mt-2">
    <span>Posted</span>
    <span> by </span>
    <span
      role="button"
      class="fw-light text-dark"
      :class="[
        //   textDecoration
        false ? 'text-decoration-underline' : 'text-decoration-none',
      ]"
    >
      <span> {{ postCreator.username }} </span>
    </span>
    <span class="ms-2 fw-lighter">
      {{ calculateTime(postAndInteractions.post.createdAt) }}
    </span>
  </div>
</template>

<script setup lang="ts">
import type { PostAndInteractions } from "@/stores/post/PostTypes";
import type { UserPostAndInteractions } from "@/stores/user/UserTypes";
import { calculateTime } from "../../../utils/calculaTime";

const props = defineProps<{
  postAndInteractions: PostAndInteractions | UserPostAndInteractions;
}>();

const { postAndInteractions } = props;
const postCreator = postAndInteractions.post.user;

async function hoverToFetchUserInfo() {
  console.log("fetch");
}
</script>

<style scoped></style>
