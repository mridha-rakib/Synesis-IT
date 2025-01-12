import { Post } from "~/data/posts";
import BlogCard from "./blog-card";

export default function BlogsGrid({ posts }: { posts?: Array<Post> }) {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-5 md:gap-12 lg:gap-[102px]">
      {
        posts?.map(post => (
          <BlogCard key={post.id} post={post} />
        ))
      }
    </div>
  );
}