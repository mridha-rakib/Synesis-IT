"use client"

import { Avatar } from "@radix-ui/react-avatar";
import { StarHalfIcon, StarIcon } from "lucide-react";
import { Review } from "~/data/reviews";
import { User, useSingleUser } from "~/data/users";
import { cn } from "~/lib/utils";
import { AvatarImage } from "./ui/avatar";

export default function ReviewCard({ review }: { review: Review }) {
  const { data: user, isLoading } = useSingleUser(review.userId);

  if (isLoading || !user) return null;

  return (
    <div className="p-6 space-y-4 border rounded-lg">
      <Stars rating={review.postId % 5} />
      <div className="text-foreground/70 line-clamp-3">
        {review.comment}
      </div>
      <ReviewUser user={user} />
    </div>
  )
}

const Stars = ({ rating }: { rating: number }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const emptyStars = 5 - Math.ceil(rating);

  return (
    <div className="flex gap-1">
      {Array.from({ length: fullStars }).map((_, idx) => (
        <StarIcon key={`full-${idx}`} size={18} className={cn("fill-yellow-400 stroke-yellow-400")} />
      ))}
      {hasHalfStar && <StarHalfIcon key="half" size={18} className={cn("stroke-yellow-400 fill-yellow-400")} />}
      {Array.from({ length: emptyStars }).map((_, idx) => (
        <StarIcon key={`empty-${idx}`} size={18} className={cn("stroke-yellow-400")} />
      ))}
    </div>
  );
};

const ReviewUser = ({ user }: { user: User }) => {
  return (
    <div className="flex gap-4 items-center">
      <div className="size-10 aspect-square">
        <Avatar>
          <AvatarImage src="https://placecats.com/40/40" className="rounded-full size-10" />
        </Avatar>
      </div>
      <div>
        <h3 className="text-xl font-bold">{`${user.firstname} ${user.lastname}`}</h3>
        <span>{`${user.company.bs} ${user.company.name}`}</span>
      </div>
    </div>
  )
}