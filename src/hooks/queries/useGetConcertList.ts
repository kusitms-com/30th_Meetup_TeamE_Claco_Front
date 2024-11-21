import { client } from "@/apis";
import {
  GetConcertInfiniteResponse,
  GetConcertListProps,
  GetConcertListResponse,
} from "@/types";
import {
  useInfiniteQuery,
  UseInfiniteQueryResult,
} from "@tanstack/react-query";
import { AxiosError } from "axios";

const getConcertList = async ({
  genre,
  page,
  size = 9,
}: GetConcertListProps): Promise<GetConcertListResponse> => {
  const response = await client.get<GetConcertListResponse>(`/concerts/views`, {
    params: {
      genre,
      page,
      size,
    },
  });
  return response.data;
};

const useGetInfiniteConcerts = ({
  genre,
  size = 9,
}: Omit<GetConcertListProps, "page">): UseInfiniteQueryResult<
  GetConcertInfiniteResponse,
  AxiosError
> => {
  return useInfiniteQuery({
    queryKey: ["concert-data", genre],
    queryFn: ({ pageParam }) =>
      getConcertList({ genre, page: pageParam, size }),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      const totalPages = Math.ceil(
        lastPage.result.totalCount / lastPage.result.size
      );
      const nextPage = allPages.length + 1;
      return nextPage <= totalPages ? nextPage : undefined;
    },
  });
};

export default useGetInfiniteConcerts;

/**
 * No description
 *
 * @tags useGetInfiniteConcerts
 * @name concert-controller
 * @summary 둘러보기 공연 조회 API
 * @request GET: /concerts/views
 * @secure bearer
 */
