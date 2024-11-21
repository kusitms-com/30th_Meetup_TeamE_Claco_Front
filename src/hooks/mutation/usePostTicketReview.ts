import { client } from "@/apis";
import { TicketReviewRequest, TicketReviewResponse } from "@/types";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();

  return useMutation<TicketReviewResponse, Error, TicketReviewRequest>({
    mutationFn: postTicketReview,
    onSuccess: (data) => {
      console.log(data);
      localStorage.removeItem("clacoBookId");
      localStorage.removeItem("showDate");
      localStorage.removeItem("showTime");
      localStorage.removeItem("showPlace");
      localStorage.removeItem("seat");
      localStorage.removeItem("castingList");
      navigate("/ticketcreate/download");
    },
    onError: (error) => {
      console.error(error);
    },
  });
};

export default usePostTicketReview;
