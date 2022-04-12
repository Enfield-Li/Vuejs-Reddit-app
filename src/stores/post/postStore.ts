import {
  interactionNullCheckAndPopulateData,
  populateWithMockData,
} from "@/utils/populateWithMockData";
import { voteManipulation } from "@/utils/voteManipulation";
import axios, { type AxiosResponse } from "axios";
import { defineStore } from "pinia";
import type {
  CreatePostType,
  PaginatedPost,
  Post,
  PostAndInteractions,
  PostSorting,
  PostState,
  SortPostWithTop,
  VotingTypes,
} from "./PostTypes";

export const usePostStore = defineStore("post", {
  state: () =>
    ({
      currentPost: null,
      paginatedPosts: { hasMore: false, postAndInteractions: [] },
      postsInSearch: [],
    } as PostState),

  getters: {
    getLastDate(): Date | undefined {
      if (this.paginatedPosts.postAndInteractions.length) {
        const lastIndex = this.paginatedPosts.postAndInteractions.length - 1;
        return this.paginatedPosts.postAndInteractions[lastIndex].post
          .createdAt;
      }
    },
  },

  actions: {
    async fetchPaginatedPosts(
      sortBy: PostSorting = "best",
      cursor?: string, // Date string or number string
      time?: SortPostWithTop
    ) {
      let res: AxiosResponse<PaginatedPost, any> | null = null;

      if (!cursor) {
        if (sortBy === "top") {
          res = await axios.get<PaginatedPost>(
            `http://localhost:3119/post/paginated-posts/top?time=${time}`,
            { withCredentials: true }
          );
        } else {
          res = await axios.get<PaginatedPost>(
            `http://localhost:3119/post/paginated-posts?sortBy=${sortBy}`,
            { withCredentials: true }
          );
        }

        // Clear cache first when switching sortBy
        this.paginatedPosts = { hasMore: false, postAndInteractions: [] };
      } else {
        if (sortBy === "top") {
          res = await axios.get<PaginatedPost>(
            `http://localhost:3119/post/paginated-posts/top?time=${time}&skipTimes=${cursor}`,
            { withCredentials: true }
          );
        } else {
          res = await axios.get<PaginatedPost>(
            `http://localhost:3119/post/paginated-posts?cursor=${cursor}&sortBy=${sortBy}`,
            { withCredentials: true }
          );
        }
      }
      // initiate interactions
      interactionNullCheckAndPopulateData(res.data.postAndInteractions);

      this.paginatedPosts.hasMore = res.data.hasMore;
      this.paginatedPosts.postAndInteractions.push(
        ...res.data.postAndInteractions
      );
    },

    async searchPosts(keyword: string, take: number = 5) {
      const res = await axios.get<Post[]>(
        `http://localhost:3119/post/search-post?keyword=${keyword}&take=${take}`
      );

      //   dispatch({
      //     type: POSTS_IN_SEARCH,
      //     payload: res.data,
      //   });
    },

    async interactWithPost(id: number, value: boolean, field: VotingTypes) {
      try {
        await axios.get<boolean>(
          `http://localhost:3119/interactions/interact/post/${id}?value=${value}&field=${field}`,
          { withCredentials: true }
        );

        if (field === "vote") {
          if (this.currentPost && this.currentPost.interactions) {
            const voteValue = value;
            const voteStatus = this.currentPost.interactions.voteStatus;
            const votePoints = this.currentPost.post.votePoints;

            const { newVoteStatus, newVotePoints } = voteManipulation(
              voteValue,
              voteStatus,
              votePoints
            );

            this.currentPost.interactions.voteStatus = newVoteStatus;
            this.currentPost.post.votePoints = newVotePoints;
          }

          this.paginatedPosts.postAndInteractions.forEach(
            (postAndInteraction) => {
              if (
                postAndInteraction.post.id === id &&
                postAndInteraction.interactions
              ) {
                const voteValue = value;
                const voteStatus = postAndInteraction.interactions.voteStatus;
                const votePoints = postAndInteraction.post.votePoints;

                const { newVoteStatus, newVotePoints } = voteManipulation(
                  voteValue,
                  voteStatus,
                  votePoints
                );

                postAndInteraction.interactions.voteStatus = newVoteStatus;
                postAndInteraction.post.votePoints = newVotePoints;
              }
            }
          );
        }

        if (field === "like") {
          // dispatch({
          //   type: LIKE_POST,
          //   payload: id,
          // });
        }

        if (field === "laugh") {
          // dispatch({
          //   type: LAUGHE_POST,
          //   payload: id,
          // });
        }

        if (field === "confused") {
          // dispatch({
          //   type: CONFUSE_POST,
          //   payload: id,
          // });
        }
      } catch (err) {
        console.log(err);
      }
    },

    async editCurrentPost(id: number, post: CreatePostType) {
      try {
        const res = await axios.patch<PostAndInteractions>(
          `http://localhost:3119/post/edit/${id}`,
          post,
          { withCredentials: true }
        );

        return res.data;
      } catch (err) {
        console.log(err);
        return false;
      }
    },

    setCurrentPost(currentPost: PostAndInteractions) {
      //   dispatch({
      //     type: CURRENT_POST,
      //     payload: currentPost,
      //   });
    },

    clearPostsCache() {
      this.paginatedPosts = { hasMore: false, postAndInteractions: [] };
      this.currentPost = null;
    },

    async fetchSinglePost(id: string | string[]) {
      const res = await axios.get<PostAndInteractions>(
        `http://localhost:3119/post/single-post/${id}`,
        {
          withCredentials: true,
        }
      );

      if (!res.data.interactions) {
        const postId = res.data.post.id;
        const interactions = res.data.interactions;

        const newInteractions = populateWithMockData(interactions, postId);

        res.data.interactions = newInteractions;
      }

      this.currentPost = res.data;
    },

    async createPost(post: CreatePostType) {
      try {
        const res = await axios.post<PostAndInteractions>(
          "http://localhost:3119/post/create-post",
          post,
          { withCredentials: true }
        );

        // dispatch({
        //   type: CREATE_POST,
        //   payload: res.data,
        // });

        // return created post data
        return res.data;
      } catch (err) {
        console.log(err);
        return false;
      }
    },

    async deletePost(id: number) {
      await axios.delete(`http://localhost:3119/post/delete/${id}`, {
        withCredentials: true,
      });

      //   dispatch({
      //     type: DELETE_POST,
      //     payload: id,
      //   });
    },
  },
});
