import { client } from "@/apis";
import { TagCategoriesResponse } from "@/types";
import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { AxiosError } from "axios";

const getTagCategories = async (): Promise<TagCategoriesResponse> => {
  const response = await client.get<TagCategoriesResponse>("/tag-categories");
  return response.data;
};

const useGetTagCategories = (): UseQueryResult<
  TagCategoriesResponse,
  AxiosError
> => {
  return useQuery<TagCategoriesResponse, AxiosError>({
    queryKey: ["tagCategories"],
    queryFn: getTagCategories,
  });
};

export default useGetTagCategories;
