export type PostState = {
  paginatedPosts: PaginatedPost;
  currentPost: PostAndInteractions | null;
  postsInSearch: Post[];
};

export type PaginatedPost = {
  postAndInteractions: PostAndInteractions[];
  hasMore: boolean;
};

export type PostAndInteractions = {
  post: Post;
  interactions: Interactions | null;
};

export type Post = {
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
  user: {
    id: number;
    username: string;
  };
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

export type CreatePostType = {
  title: string;
  content: string;
};

export type SortPostWithTop = "half-year" | "one-year" | "all-time";

export type PostSorting = "new" | "hot" | "best" | "top";

export type VotingTypes = "vote" | "like" | "laugh" | "confused";

export type FindReply = { parentCommentId: number };
