import { client } from "@/apis";
import { ConcertBasedResponse } from "@/types";
import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { AxiosError } from "axios";

const getConcertBased = async (): Promise<ConcertBasedResponse> => {
  const response = await client.get<ConcertBasedResponse>(
    "/recommendations/concertbased"
  );
  return response.data;
};

const useGetConcertBased = (): UseQueryResult<ConcertBasedResponse, AxiosError> => {
  return useQuery<ConcertBasedResponse, AxiosError>({
    queryKey: ["concertBased"],
    queryFn: getConcertBased,
  });
};

export default useGetConcertBased;
