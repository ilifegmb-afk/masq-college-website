import { PostCard } from '@/components/cards'
import { CardGridSection } from '@/components/ui'
import type { ListSection } from '@/types/common'
import type { Post } from '@/types/home'

export function NewsSection({ content }: { content: ListSection<Post> }) {
  return (
    <CardGridSection
      id="news"
      intro={content.intro}
      items={content.items}
      columns="md:grid-cols-2 lg:grid-cols-3"
      renderItem={(post) => <PostCard post={post} ctaLabel={content.ctaLabel ?? 'Read more'} />}
    />
  )
}
