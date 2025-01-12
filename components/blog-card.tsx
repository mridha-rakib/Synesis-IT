import { CalendarIcon, EyeIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import ShowMoreText from "react-show-more-text";
import { Badge } from "~/components/ui/badge";
import { Post } from "~/data/posts";
import { formatDate } from "~/lib/utils";

const VIEW_COUNT = 10 as const;

export default function BlogCard({ post }: { post: Post }) {
  return (
    <div className="rounded-t-[10px] overflow-hidden bg-card text-card-foreground">
      <div className="w-full aspect-[2/1] relative">
        <Link href={`${post.slug}`}>
          <Image
            className="object-contain w-full"
            src={post.image}
            alt={post.title}
            width={800}
            height={430}
          />
        </Link>
        <Badge className='absolute top-3 right-2 gap-1 items-center bg-white text-black hover:bg-black/50 hover:text-white'>
          <EyeIcon strokeWidth={2} className="size-4" />
          {VIEW_COUNT}
        </Badge>
      </div>
      <div className="space-y-3 px-5 pt-6 pb-8">
        <div className='flex w-full gap-2 items-center'>
          <CalendarIcon strokeWidth={2.5} className="size-5 -mt-0.5" />
          <span>{formatDate(post.publishedAt)}</span>
          <span className="ml-auto text-base bg-white text-black hover:bg-black/5 rounded-lg px-4 py-1 font-bold">{post.category}</span>
        </div>
        <Link href={`${post.slug}`}>
          <h2 className="text-2xl font-bold line-clamp-1">{post.title}</h2>
        </Link>
        <ShowMoreText
          // @ts-expect-error
          expandByClick={false}
          lines={4}
          more={<Link href={`/${post.slug}`} className="text-blue-600 font-bold">Show more</Link>}
          className="text-pretty"
        >
          {post.content}
        </ShowMoreText>
      </div>
    </div>
  );
}
