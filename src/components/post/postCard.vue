<template>
  <div class="card my-3">
    <div class="card-body">
      <div class="d-flex justify-content-between">
        <!-- left -->
        <div class="d-flex justify-content-between">
          <VoteSection :postAndInteractions="postAndInteractions" />

          <div>
            <PostCreatorInfo :postAndInteractions="postAndInteractions" />
            <div
              class="d-flex flex-column justify-content-between"
              style="color: gray"
            >
              <PostCardSection :post-and-interactions="postAndInteractions" />
            </div>
          </div>
        </div>

        <!-- right -->
        <!-- <EditSection -->
        <!-- <EditSection postAndInteractions={postAndInteraction} isNotMain={false} /> -->
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { PostAndInteractions } from "@/stores/post/PostTypes";
import PostCardSection from "./sections/PostCardSection.vue";
import VoteSection from "./sections/voteSection.vue";
import PostCreatorInfo from "./sections/PostCreatorInfo.vue";

const props = defineProps<{
  postAndInteractions: PostAndInteractions;
}>();
const { postAndInteractions } = props;
</script>

<style scoped></style>
