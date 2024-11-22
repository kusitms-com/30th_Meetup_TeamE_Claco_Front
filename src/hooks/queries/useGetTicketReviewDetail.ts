import { client } from "@/apis";
import { ShowDetailCheckResponse } from "@/types";
import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { AxiosError } from "axios";

const getTicketReviewDetail = async (ticketReviewId: number) => {
  const response = await client.get<ShowDetailCheckResponse>(
    `/ticket-reviews/${ticketReviewId}`,
  );
  return response.data;
};

const useGetTicketReviewDetail = (
  ticketReviewId: number,
): UseQueryResult<ShowDetailCheckResponse, AxiosError> => {
  return useQuery<ShowDetailCheckResponse, AxiosError>({
    queryKey: ["showDetail", ticketReviewId],
    queryFn: () => getTicketReviewDetail(ticketReviewId),
  });
};

export default useGetTicketReviewDetail;
