import { client } from "@/apis";
import { PlaceCategoriesResponse } from "@/types";
import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { AxiosError } from "axios";

const getPlaceCategories = async (): Promise<PlaceCategoriesResponse> => {
  const response =
    await client.get<PlaceCategoriesResponse>("/place-categories");
  return response.data;
};

const useGetPlaceCategories = (): UseQueryResult<
  PlaceCategoriesResponse,
  AxiosError
> => {
  return useQuery<PlaceCategoriesResponse, AxiosError>({
    queryKey: ["placeCategories"],
    queryFn: getPlaceCategories,
  });
};

export default useGetPlaceCategories;
