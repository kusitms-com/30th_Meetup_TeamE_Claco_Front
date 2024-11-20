import { client } from "@/apis";
import { GetConcertListProps, GetConcertListResponse } from "@/types";
import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { AxiosError } from "axios";

const getConcertList = async ({
  genre,
  direction,
  page,
  size = 9,
}: GetConcertListProps): Promise<GetConcertListResponse> => {
  const response = await client.get<GetConcertListResponse>(
    `/concerts/views/${genre}/${direction}`,
    {
      params: {
        genre: genre,
        page: page,
        size: size,
      },
    }
  );
  return response.data;
};

const useGetConcertList = ({
  genre,
  direction,
  page,
  size,
}: GetConcertListProps): UseQueryResult<GetConcertListResponse, AxiosError> => {
  return useQuery<GetConcertListResponse, AxiosError>({
    queryKey: ["concert-list", genre, page],
    queryFn: () => getConcertList({ genre, direction, page, size }),
  });
};

export default useGetConcertList;
