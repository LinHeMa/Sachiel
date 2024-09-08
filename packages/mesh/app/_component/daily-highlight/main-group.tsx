import NextImage from 'next/image'
import NextLink from 'next/link'

import Icon from '@/components/icon'
import StoryMeta from '@/components/story-card/story-meta'
import StoryPickButton from '@/components/story-card/story-pick-button'
import StoryPickInfo from '@/components/story-card/story-pick-info'
import type { DailyStory } from '@/types/homepage'
import { getDisplayPicks } from '@/utils/story-display'

import SwiperComponent from './swiper-component'

type Props = {
  stories: DailyStory[]
  followingMembers: Set<string>
}

export default function MainCard({ stories, followingMembers }: Props) {
  const story = stories[0]
  const restStories = stories.slice(1, 5)
  const displayPicks = getDisplayPicks(story.picks, followingMembers)

  return (
    <article className="mb-5">
      <div className="mb-4 flex flex-col gap-y-3 sm:mb-5 lg:flex-row lg:gap-x-10">
        <NextLink href={`story/${story.id}`}>
          <div className="relative aspect-[2/1] shrink-0 overflow-hidden rounded-md lg:h-[250px] lg:w-[500px]">
            <NextImage src={story.og_image} alt={story.title} fill />
          </div>
        </NextLink>

        <div className="lg:flex lg:flex-col lg:justify-between">
          <div>
            <div className="mb-1 flex justify-between">
              <NextLink href={`profile/member/${story.source.customId}`}>
                <p className="body-3 text-primary-500">{story.source.title}</p>
              </NextLink>
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
                fullScreenAd=""
              />
            </div>
          </div>

          <div className="mt-4 flex justify-between">
            <StoryPickInfo
              displayPicks={displayPicks}
              pickCount={story.pickCount}
            />
            <StoryPickButton storyId={story.id} />
          </div>
        </div>
      </div>

      <div>
        <SwiperComponent stories={restStories} />
      </div>
    </article>
  )
}
