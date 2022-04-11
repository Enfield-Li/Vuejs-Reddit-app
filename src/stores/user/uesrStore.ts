import { interactionNullCheckAndPopulateData } from "@/utils/populateWithMockData";
import axios, { type AxiosResponse } from "axios";
import { defineStore } from "pinia";
import type { VotingTypes } from "../post/PostTypes";
import type {
  User,
  UserCredential,
  UserProfileRO,
  UserRegister,
  UserRO,
  UserState,
} from "./UserTypes";

export const useUserStore = defineStore("user", {
  state: () =>
    ({
      user: null,
      userProfile: null,
    } as UserState),

  getters: {
    // doubleCount: (state) => state.counter * 2,
  },

  actions: {
    async registerUser(userCredential: UserRegister) {
      const res = await axios.post<UserRO>(
        "http://localhost:3119/user/register",
        userCredential,
        { withCredentials: true }
      );

      if (res.data.user) {
        this.user = res.data.user;
      } else if (res.data.errors) {
        console.log(res.data.errors);
        return res.data.errors;
      }
    },

    async loginUser(userCredential: UserCredential) {
      const res = await axios.put<UserRO>(
        "http://localhost:3119/user/login",
        userCredential,
        { withCredentials: true }
      );

      if (res.data.user) {
        this.user = res.data.user;
        return true;
      } else if (res.data.errors) {
        return res.data.errors;
      }
    },

    async me() {
      const res = await axios.get<UserRO>("http://localhost:3119/user/me", {
        withCredentials: true,
      });
      if (res.data.user) this.user = res.data.user;
    },

    async getUserInfo(id: number) {
      const res = await axios.get<User>(
        `http://localhost:3119/user/userInfo/${id}`,
        {
          withCredentials: true,
        }
      );

      return res.data;
    },

    async getUserProfile(id: number, cursor?: Date) {
      let res: AxiosResponse<UserProfileRO, any> | null = null;

      if (cursor) {
        res = await axios.get<UserProfileRO>(
          `http://localhost:3119/user/profile/${id}?cursor=${cursor}`,
          { withCredentials: true }
        );
      } else {
        res = await axios.get<UserProfileRO>(
          `http://localhost:3119/user/profile/${id}`,
          { withCredentials: true }
        );
      }

      interactionNullCheckAndPopulateData(
        res.data.userPaginatedPost.postAndInteractions
      );

      this.userProfile = res.data;
    },

    async interactWithPostFromUserProfile(
      id: number,
      value: boolean,
      field: VotingTypes
    ) {
      await axios.get<boolean>(
        `http://localhost:3119/post/interact/${id}?value=${value}&field=${field}`,
        { withCredentials: true }
      );

      if (field === "vote") {
      }

      if (field === "like") {
      }

      if (field === "laugh") {
      }

      if (field === "confused") {
      }
    },

    async logout() {
      await axios.get("http://localhost:3119/user/logout", {
        withCredentials: true,
      });
      this.user = null;
      this.userProfile = null;
    },
  },
});
