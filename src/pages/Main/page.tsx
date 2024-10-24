import {
  NearbyEventsSection,
  PersonalizedSection,
  SimilarCollectionSection,
  SimilarShowsSection,
} from "./containers";

export const MainPage = () => {
  return (
    <div className="pt-[73px]">
      <NearbyEventsSection />
      <PersonalizedSection />
      <SimilarCollectionSection />
      <SimilarShowsSection />
    </div>
  );
};
