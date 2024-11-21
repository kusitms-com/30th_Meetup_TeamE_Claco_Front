import { client } from "@/apis";
import {
  GetConcertInfiniteResponse,
  GetConcertListResponse,
  GetSearchProps,
} from "@/types";
import {
  useInfiniteQuery,
  UseInfiniteQueryResult,
} from "@tanstack/react-query";
import { AxiosError } from "axios";

const getSearch = async ({
  query,
  page,
  size = 9,
}: GetSearchProps): Promise<GetConcertListResponse> => {
  const response = await client.get<GetConcertListResponse>(
    "/concerts/queries",
    {
      params: {
        query: query,
        page: page,
        size: size,
      },
    }
  );
  return response.data;
};

const useGetSearch = ({
  query,
  size = 9,
}: Omit<GetSearchProps, "page">): UseInfiniteQueryResult<
  GetConcertInfiniteResponse,
  AxiosError
> => {
  return useInfiniteQuery({
    queryKey: ["search-concert-data", query],
    queryFn: ({ pageParam }) => getSearch({ query, page: pageParam, size }),
    enabled: query.trim().length !== 0,
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

export default useGetSearch;

/**
 * No description
 *
 * @tags useGetSearch
 * @name concert-controller
 * @summary 검색 API
 * @request GET:/concerts/queries
 * @secure bearer
 */
