"use client"

import { CalendarIcon } from "lucide-react"
import Image from "next/image"
import { usePosts } from "~/data/posts"
import { formatDate } from "~/lib/utils"
import { Button } from "./ui/button"

export default function SinglePost({ slug }: { slug: string }) {
  const { data, isLoading } = usePosts(100)

  if (isLoading || !data) return null;

  const post = data.filter(item => item.slug === slug)[0];

  return (
    <div className="grid md:grid-cols-2 gap-12 py-16">
      <div className="aspect-[3/2] bg-card  rounded-lg overflow-hidden">
        <Image className="object-cover size-full" src={post.image} alt={post.title} width={800} height={800} />
      </div>
      <div className="space-y-4">
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold">{post.title}</h1>
            <Button className="bg-card text-card-foreground hover:text-primary-foreground">Design</Button>
          </div>
          <div className="flex gap-2">
            <CalendarIcon strokeWidth={2.5} className="size-5 -mt-0.5" />
            <span>{formatDate(post.publishedAt)}</span>
          </div>
        </div>
        <ContentWithTypography content={post.content} />
      </div>
    </div>
  )
}


const ContentWithTypography = ({ content }: { content: string }) => {
  return <div className="max-w-prose prose lg:prose-lg prose-stone">{content}</div>
}
