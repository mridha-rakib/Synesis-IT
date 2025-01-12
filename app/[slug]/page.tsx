import NewsletterSection from "~/components/newsletter-section";
import ReviewsSection from "~/components/reviews-section";
import SinglePost from "~/components/single-post";
import { Post } from "~/data/posts";
import { apiFetch } from "~/lib/utils";

export async function generateStaticParams() {
  const posts = await apiFetch<Array<Post>>("/posts")

  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const slug = (await params).slug;

  return (
    <div className="space-y-12">
      <SinglePost slug={slug} />
      <ReviewsSection />
      <NewsletterSection />
    </div>
  );
}

