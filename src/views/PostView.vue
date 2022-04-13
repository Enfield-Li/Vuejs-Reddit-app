<template>
  <div v-if="postStore.currentPost">
    <div>
      <div class="card my-2 container">
        <div class="card-body">
          <div class="d-flex justify-content-between">
            <div class="d-flex w-100">
              <VoteSection :postAndInteractions="postStore.currentPost" />

              <div class="w-100">
                <PostCreatorInfo :postAndInteractions="postStore.currentPost" />
                <h3 class="my-2">{{ postStore.currentPost.post.title }}</h3>
                <p class="card-text mb-3 me-2 fs-5">
                  {{ postStore.currentPost.post.content }}
                </p>
                <InteractionDisplay
                  :postAndInteractions="postStore.currentPost"
                />

                <!-- <CreateComment
                      postId={currentPost.post.id}
                      isReply={false}
                      isComment={false}
                      reciverId={currentPost.post.userId}
                    />
                    <PostComments postId={currentPost.post.id} /> -->
              </div>
            </div>

            <!-- <EditSection
                  postAndInteractions={currentPost}
                  isNotMain={true}
                /> -->
          </div>
        </div>
      </div>
    </div>
  </div>

  <div v-else>
    <ContentPlaceholder />
  </div>
</template>

<script setup lang="ts">
import { usePostStore } from "@/stores/post/postStore";
import { onMounted } from "vue";
import { useRoute } from "vue-router";
import PostCreatorInfo from "../components/post/sections/PostCreatorInfo.vue";
import VoteSection from "../components/post/sections/voteSection.vue";
import ContentPlaceholder from "../components/placehoders/ContentPlaceholder.vue";
import InteractionDisplay from "../components/post/sections/InteractionDisplay.vue";

const route = useRoute();
const postStore = usePostStore();

onMounted(() => {
  postStore.fetchSinglePost(route.params.id);
});
</script>

<style scoped></style>
