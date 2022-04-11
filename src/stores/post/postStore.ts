import { defineStore } from "pinia";
import type { PostState } from "./PostTypes";

export const usePostStore = defineStore("post", {
  state: () =>
    ({
      currentPost: null,
      paginatedPosts: { hasMore: false, postAndInteractions: [] },
      postsInSearch: [],
    } as PostState),

  getters: {},

  actions: {},
});
