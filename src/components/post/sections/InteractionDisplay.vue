<template>
  <div class="d-flex my-3">
    <!-- like -->
    <div
      role="button"
      class="border border-1 rounded-pill me-2 d-flex text-decoration-none"
      :class="[interactions?.likeStatus ? 'border-info' : 'border-dark']"
      @click="interact('like')"
      v-if="post.likePoints > 0"
    >
      <div class="mx-1">❤</div>
      <div
        class="mx-1 me-2"
        :class="[interactions?.likeStatus ? 'text-info' : 'text-dark']"
      >
        {{ post.likePoints }}
      </div>
    </div>

    <!-- laugh -->
    <div
      role="button"
      class="border border-1 rounded-pill me-2 d-flex text-decoration-none"
      :class="[interactions?.laughStatus ? 'border-info' : 'border-dark']"
      @click="interact('laugh')"
      v-if="post.laughPoints > 0"
    >
      <div class="mx-1">😄</div>
      <div
        class="mx-1 me-2"
        :class="[interactions?.laughStatus ? 'text-info' : 'text-dark']"
      >
        {{ post.laughPoints }}
      </div>
    </div>

    <!-- confused -->
    <div
      role="button"
      class="border border-1 rounded-pill me-2 d-flex text-decoration-none"
      :class="[interactions?.confusedStatus ? 'border-info' : 'border-dark']"
      @click="interact('confused')"
      v-if="post.confusedPoints > 0"
    >
      <div class="mx-1">😕</div>
      <div
        class="mx-1 me-2"
        :class="[interactions?.confusedStatus ? 'text-info' : 'text-dark']"
      >
        {{ post.confusedPoints }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { usePostStore } from "@/stores/post/postStore";
import type { PostAndInteractions } from "@/stores/post/PostTypes";
import type { UserPostAndInteractions } from "@/stores/user/UserTypes";

const props = defineProps<{
  postAndInteractions: PostAndInteractions | UserPostAndInteractions;
  isInProfile?: boolean;
}>();

const postStore = usePostStore();

const { postAndInteractions, isInProfile } = props;
const { post, interactions } = postAndInteractions;

function interact(field: "like" | "laugh" | "confused") {
  postStore.interactWithPost(post.id, true, field);
}
</script>

<style scoped></style>
