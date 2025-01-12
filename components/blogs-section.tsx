"use client";

import { useEffect } from "react";

import { CircleIcon } from "lucide-react";
import { useInView } from "react-intersection-observer";
import BlogsGrid from "~/components/blogs-grid";
import { Skeleton } from "~/components/ui/skeleton";
import { useInfinitePosts } from "~/data/posts";

import SearchField from "./SearchField";

const SECTION_TITLE = "All Posts" as const;

export default function BlogsSection() {
  const { data, status, fetchNextPage, isFetchingNextPage, hasNextPage } =
    useInfinitePosts();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [fetchNextPage, inView]);

  return (
    <div className="space-y-16">
      <div className="flex justify-between">
        <h1 className="line-clamp-1 text-5xl font-bold">{SECTION_TITLE}</h1>
        <SearchField />
      </div>
      {status === "pending" ? (
        <BlogGridSkeleton />
      ) : (
        <>
          {data?.pages.map((posts, idx) => (
            <BlogsGrid key={posts.currentPage + idx} posts={posts.data} />
          ))}
          {!hasNextPage && (
            <div className="text-center text-3xl font-medium text-gray-600">
              No more posts available.
            </div>
          )}
        </>
      )}
      <div
        ref={ref}
        className="mx-auto flex w-full items-center justify-center"
      >
        {isFetchingNextPage && (
          <div className="flex items-center justify-center gap-2">
            <span className="font-mono text-2xl">More posts loading...</span>
            <div className="items-cente flex gap-1">
              <CircleIcon className="size-4 animate-bounce rounded-full bg-stone-500 stroke-none" />
              <CircleIcon className="size-4 animate-bounce rounded-full bg-stone-500 stroke-none delay-150" />
              <CircleIcon className="size-4 animate-bounce rounded-full bg-stone-500 stroke-none delay-300" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

const BlogGridSkeleton = () => {
  return (
    <div className="grid grid-cols-2 gap-5 md:gap-12 lg:grid-cols-3 lg:gap-[102px]">
      {[1, 2, 3].map((item) => (
        <Skeleton className="h-[430px] w-full" key={item} />
      ))}
    </div>
  );
};
