import { useQuery } from "@tanstack/react-query";
import { apiFetch } from "~/lib/utils";

//-------------------------------------------
// TODO: must be replaced with real data
// comments should be replaced with reviews
//-------------------------------------------

export type Review = {
  id: number;
  postId: number;
  userId: number;
  comment: string;
};

const fetchReviews = async () => {
  return await apiFetch<Array<Review>>("/comments");
};

const useReviews = () => {
  return useQuery({
    queryKey: ["reviews"],
    queryFn: () => fetchReviews(),
  });
};

export { useReviews };
