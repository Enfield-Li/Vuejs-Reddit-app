import { defineStore } from "pinia";

const useUserStore = defineStore("user", {
  state: () =>
    ({
      user: null,
      userProfile: null,
    } as UserState),

  getters: {
    // doubleCount: (state) => state.counter * 2,
  },
  actions: {
    // increment() {
    //   this.counter++;
    // },
  },
});

export type UserState = {
  user: User | null;
  userProfile: UserProfileRO | null;
};

export type UserCredential = {
  usernameOrEmail: string;
  password: string;
};

export type UserRegister = {
  username: string;
  password: string;
  email?: string;
};

export type User = {
  id: number;
  username: string;
  email?: string;
  createdAt: string;
  postAmounts: number;
};

export type UserRO = {
  user: User;
  errors: ResUserError;
};

export type ResUserError = {
  field: string;
  message: string;
};

export type UserProfileRO = {
  user: User;
  userPaginatedPost: UserPaginatedPost;
};

export type UserPaginatedPost = {
  postAndInteractions: UserPostAndInteractions[];
  hasMore: boolean;
};

export type UserPostAndInteractions = {
  post: {
    id: number;
    createdAt: Date;
    updatedAt: Date;
    title: string;
    content: string | null;
    userId: number;
    viewCount: number;
    votePoints: number;
    likePoints: number;
    confusedPoints: number;
    laughPoints: number;
    user: null;
  };
  interactions: Interactions;
};

export type Interactions = {
  voteStatus: boolean | null;
  likeStatus: boolean | null;
  laughStatus: boolean | null;
  confusedStatus: boolean | null;
  createdAt: Date;
  userId: number;
  postId: number;
};
