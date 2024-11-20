import { client } from "@/apis";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const postLike = async (concertId: number) => {
  const response = await client.post(`/concerts/likes/${concertId}`, {});
  return response.data;
};

const usePostLike = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: postLike,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["likes"] });
    },
    onError: (error) => {
      console.error(error);
    },
  });
};

export default usePostLike;
