import { client } from "@/apis";
import { useMutation } from "@tanstack/react-query";
import { PlaceCategory, TagCategory } from "@/types";

export type TicketReviewRequest = {
  concertId: number;
  clacoBookId: number;
  watchDate: string;
  watchRound: string;
  watchSit: string;
  starRate: number;
  casting: string;
  content: string;
  placeReviewIds: PlaceCategory[];
  tagCategoryIds: TagCategory[];
  files: File[];
};

export type TicketReviewResponse = {
  code: string;
  message: string;
  result: TicketReviewRequest;
  refreshed: boolean;
};

const postTicketReview = async (
  request: TicketReviewRequest,
): Promise<TicketReviewResponse> => {
  const formData = new FormData();
  formData.append(
    "request",
    new Blob([JSON.stringify(request)], {
      type: "application/json",
    }),
  );

  if (request.files.length === 0) {
    formData.append("files", new File([""], ""));
  } else {
    request.files.forEach((file) => {
      formData.append("files", file);
    });
  }

  const response = await client.post<TicketReviewResponse>(
    "/ticket-reviews",
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    },
  );

  return response.data;
};

const usePostTicketReview = () => {
  return useMutation<TicketReviewResponse, Error, TicketReviewRequest>({
    mutationFn: postTicketReview,
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (error) => {
      console.error(error);
    },
  });
};

export default usePostTicketReview;
