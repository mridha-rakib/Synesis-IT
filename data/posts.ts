"use client";

import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { apiFetch } from "~/lib/utils";

export type Post = {
  id: number;
  slug: string;
  url: string;
  title: string;
  content: string;
  image: string;
  thumbnail: string;
  status: string;
  category: string;
  publishedAt: string;
  updatedAt: string;
  userId: number;
};

//-------------------------------------------
// TODO: must be replaced with real data
//-------------------------------------------

const fetchPosts = async (limit = 10) => {
  const data = (await apiFetch<Array<Post>>("/posts")).map((post, idx) => {
    return {
      ...post,
      image: `https://placecats.com/${800 + idx}/${430 + idx}`,
    };
  });

  return data.filter((x: Post) => x.id <= limit);
};

const fetchPostBySlug = async (slug: string) => {
  return await apiFetch<Post>("/posts", { params: { slug } });
};

const useSinglePost = (slug: string) => {
  return useQuery({
    queryKey: ["post", slug],
    queryFn: () => fetchPostBySlug(slug),
  });
};

const usePosts = (limit: number) => {
  return useQuery({
    queryKey: ["posts", limit],
    queryFn: () => fetchPosts(limit),
  });
};

//-----------------------------------------------
// Simulate infinte query
//-----------------------------------------------
const LIMIT = 6 as const;

export async function fetchInfinitePosts({
  pageParam,
}: {
  pageParam: number;
}): Promise<{
  data: Post[];
  currentPage: number;
  nextPage: number | null;
}> {
  const data = await fetchPosts(100);

  return {
    data: data.slice(pageParam, pageParam + LIMIT),
    currentPage: pageParam,
    nextPage: pageParam + LIMIT < 100 ? pageParam + LIMIT : null,
  };
}

const useInfinitePosts = () => {
  return useInfiniteQuery({
    queryKey: ["products"],
    queryFn: fetchInfinitePosts,
    initialPageParam: 0,
    getNextPageParam: (lastPage) => lastPage.nextPage,
  });
};

export { useInfinitePosts, usePosts, useSinglePost };
