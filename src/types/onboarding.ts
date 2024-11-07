export type ProfileProps = {
  selectedGender: string | null;
  selectedAge: string | null;
  onGenderSelect: (gender: string) => void;
  onAgeSelect: (age: string) => void;
};

export type PriceProps = {
  minPrice: number;
  maxPrice: number;
  onMinPriceChange: (value: number) => void;
  onMaxPriceChange: (value: number) => void;
};

export type LocationProps = {
  selectedLocation: string[];
  onLocationClick: (location: string) => void;
};

export type ConceptProps = {
  selectedConcept: string[];
  onConceptClick: (concept: string) => void;
};

export type FeatureType = {
  title: string;
  description: string[];
  image: string;
};
