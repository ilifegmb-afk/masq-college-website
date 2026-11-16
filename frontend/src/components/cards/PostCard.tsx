import { ArrowLink } from '@/components/ui'
import type { Post } from '@/types/home'

interface PostCardProps {
  post: Post
  ctaLabel: string
}

export function PostCard({ post, ctaLabel }: PostCardProps) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white transition-shadow hover:shadow-xl">
      <a href={post.href} className="block overflow-hidden">
        <img src={post.imageUrl} alt="" loading="lazy" className="aspect-3/2 w-full object-cover" />
      </a>
      <div className="flex flex-1 flex-col gap-3 p-6">
        <h3 className="text-lg">
          <a href={post.href} className="transition-colors hover:text-primary">
            {post.title}
          </a>
        </h3>
        <p className="text-sm">{post.excerpt}</p>
        <ArrowLink href={post.href} className="mt-auto pt-2">
          {ctaLabel}
        </ArrowLink>
      </div>
    </article>
  )
}
