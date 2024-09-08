import NextImage from 'next/image'
import NextLink from 'next/link'

import Icon from '@/components/icon'
import StoryMeta from '@/components/story-card/story-meta'
import StoryPickButton from '@/components/story-card/story-pick-button'
import StoryPickInfo from '@/components/story-card/story-pick-info'
import type { CategoryStory } from '@/types/homepage'
import { getDisplayPicks } from '@/utils/story-display'

type Props = {
  story: CategoryStory
  followingMembers: Set<string>
}

export default function MainCard({ story, followingMembers }: Props) {
  const displayPicks = getDisplayPicks(story.picks, followingMembers)

  return (
    <div className="flex flex-col gap-y-3 pb-4 shadow-[0_0.5px_0_0_rgba(0,9,40,0.1)] lg:max-w-[500px] lg:shadow-none">
      <NextLink href={`story/${story.id}`}>
        <div className="relative aspect-[2/1] shrink-0 overflow-hidden rounded-md lg:h-[250px] lg:w-[500px]">
          <NextImage src={story.og_image} alt={story.title} fill />
        </div>
      </NextLink>

      <div className="lg:flex lg:flex-col lg:justify-between">
        <div>
          <div className="mb-1 flex justify-between">
            {/* TODO: CustomId */}
            <p className="body-3 text-primary-500">{story.source.title}</p>
            <Icon iconName="icon-more-horiz" size="l" />
          </div>

          <NextLink href={`story/${story.id}`}>
            <h3 className="title-2 text-primay-700 mb-2 sm:mb-3">
              {story.title}
            </h3>
            <p className="body-3 mb-3 hidden text-primary-600 sm:line-clamp-1">
              {story.og_description}
            </p>
          </NextLink>

          {/* TODO: full_screen_ad */}
          <div className="footnote">
            <StoryMeta
              commentCount={story.commentCount}
              publishDate={story.published_date}
              paywall={story.paywall}
              fullScreenAd={story.full_screen_ad}
            />
          </div>
        </div>

        <div className="mt-4 flex justify-between">
          <StoryPickInfo
            displayPicks={displayPicks}
            pickCount={story.picksCount}
          />
          <StoryPickButton storyId={story.id} />
        </div>
      </div>
    </div>
  )
}
