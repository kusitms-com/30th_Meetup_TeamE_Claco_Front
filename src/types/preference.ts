export type SettingsProps = {
  onBack: () => void;
  onClick: () => void;
};

export type PreferenceAnalysisProps = {
  onSettingsOpen: () => void;
};

export type PreferRegion = {
  preferenceRegion: string;
};

export type PreferCategory = {
  preferenceCategory: string;
};

export type PreferType = {
  preferenceType: string;
};

export type UserPreferenceResult = {
  gender: "MALE" | "FEMALE";
  age: number;
  minPrice: number;
  maxPrice: number;
  preferRegions: PreferRegion[];
  preferCategories: PreferCategory[];
  preferTypes: PreferType[];
};

export type UserPreferencesResponse = {
  code: string;
  message: string;
  result: UserPreferenceResult;
};

export type UserBased = {
  id: number;
  prfnm: string;
  poster: string;
  genrenm: string;
  liked: boolean;
};

export type UserBasedResponse = {
  code: string;
  message: string;
  result: UserBased[];
};
