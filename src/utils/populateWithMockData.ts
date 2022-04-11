import type { PostAndInteractions } from "@/stores/post/PostTypes";
import type { Interactions, UserPostAndInteractions } from "@/stores/user/UserTypes";

export const populateWithMockData = (
  interactions: Interactions | null,
  postId: number
) => {
  interactions = {
    confusedStatus: null,
    createdAt: new Date(),
    laughStatus: null,
    likeStatus: null,
    postId,
    userId: 0,
    voteStatus: null,
  };

  return interactions;
};

export const interactionNullCheckAndPopulateData = (
  postAndInteractions: PostAndInteractions[] | UserPostAndInteractions[]
) => {
  postAndInteractions.forEach((postAndInteraction) => {
    if (!postAndInteraction.interactions) {
      const interactions = postAndInteraction.interactions;
      const postId = postAndInteraction.post.id;

      const newInteractions = populateWithMockData(interactions, postId);

      postAndInteraction.interactions = newInteractions;
    }

    return;
  });
};
