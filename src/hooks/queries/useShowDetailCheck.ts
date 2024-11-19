import { client } from "@/apis";
import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { AxiosError } from "axios";

export type ShowDetailCheckResponse = {
  code: string;
  message: string;
  result: ShowDetailResult;
};

export type TicketReview = {
  ticketReviewId: number;
  nickname: string;
  starRate: number;
  content: string;
};

export type ShowCategory = {
  category: string;
  imageURL: string;
};

export type ShowDetailResult = {
  id: number;
  mt20id: string;
  prfnm: string;
  prfpdfrom: string;
  prfpdto: string;
  fcltynm: string;
  poster: string;
  area: string;
  genrenm: string;
  openrun: string;
  prfstate: string;
  prfcast: string;
  prfruntime: string;
  prfage: string;
  pcseguidance: string;
  updatedate: string;
  dtguidance: string;
  styurl: string;
  ticketReviewSimpleResponses: TicketReview[];
  summary: string;
  categories: ShowCategory[];
};

export const ShowDetailCheck = async (showId: number) => {
  const response = await client.get<ShowDetailCheckResponse>(
    `/concerts/details/${showId}`,
  );
  return response.data;
};

export const useShowDetail = (
  showId: number,
): UseQueryResult<ShowDetailCheckResponse, AxiosError> => {
  return useQuery<ShowDetailCheckResponse, AxiosError>({
    queryKey: ["showDetail", showId],
    queryFn: () => ShowDetailCheck(showId),
  });
};
