"use client"

import { useReviews } from "~/data/reviews";
import ReviewCard from "./review-card";

export default function ReviewsSection({ slug }: { slug?: string }) {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-2xl">Latest Reviews</h1>
      <ReviewsGrid />
    </div>
  )
}

const ReviewsGrid = () => {
  const { data: reviews, isLoading } = useReviews();

  if (isLoading || !reviews) return null;

  return <div className="grid grid-cols-3 lg:grid-cols-4 gap-6">
    {
      reviews.map((review, idx) => (
        <ReviewCard key={`review-${idx}`} review={review} />
      ))
    }
  </div>
}