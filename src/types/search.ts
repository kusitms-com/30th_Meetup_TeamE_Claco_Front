export type CategoryMap = {
  category: string;
  imageURL: string;
};

export type ConcertInfo = {
  id: number;
  mt20id: string;
  prfnm: string;
  prfpdfrom: string;
  prfpdto: string;
  fcltynm: string;
  poster: string;
  genrenm: string;
  prfstate: string;
  categories: CategoryMap[];
};

export type GetConcertListProps = {
  genre: "서양음악(클래식)" | "무용" | null;
  direction: string | null;
  page: number;
  size: number;
};

export type GetConcertListResponse = {
  code: string;
  message: string;
  result: {
    listPageResponse: ConcertInfo[];
    totalCount: number;
    size: number;
  };
  refreshed: boolean;
};
