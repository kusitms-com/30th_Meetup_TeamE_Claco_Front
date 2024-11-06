import { AIRecommend } from "./AIRecommend";
import { SimilarKeyWordRecommned } from "./SimilarKeyWordRecommned";
import { TicketRecommend } from "./TicketRecommend";

export const Analysis = () => {
  return (
    <div>
      <AIRecommend />
      <SimilarKeyWordRecommned />
      <TicketRecommend />
    </div>
  );
};
