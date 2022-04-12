import {
  interactionNullCheckAndPopulateData,
  populateWithMockData,
} from "@/utils/populateWithMockData";
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

  getters: {},

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

      this.paginatedPosts = res.data;
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
      await axios.get<boolean>(
        `http://localhost:3119/interactions/interact/post/${id}?value=${value}&field=${field}`,
        { withCredentials: true }
      );

      if (field === "vote") {
        // dispatch({
        //   type: VOTE_POST,
        //   payload: { id, value },
        // });
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

    clearPostsCache() {},

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
