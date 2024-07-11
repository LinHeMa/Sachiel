'use client'

import ArticleCard from '@/app/profile/_components/article-card'
import { type GetPublisherProfileQuery } from '@/graphql/__generated__/graphql'

type StoryCardListProps = {
  storyData: GetPublisherProfileQuery['stories']
  userType: string
}
const StoryCardList = ({ storyData, userType }: StoryCardListProps) => {
  if (!storyData?.length)
    return (
      <div className="flex grow flex-col">
        <section className="flex h-full grow items-center justify-center whitespace-pre bg-primary-700-dark  text-center text-base text-primary-400 sm:min-h-full">
          <p className="my-10 w-full">這個媒體還沒有發佈任何新聞</p>
        </section>
      </div>
    )
  return (
    <>
      {/* TODO: comment to remind adding infinite-scroll in the future */}
      <ul className="max-w-[1120px] bg-primary-700-dark md:grid md:grid-cols-2 md:items-center md:gap-5 md:p-10 lg:grid-cols-3">
        {storyData.map((story, idx) => {
          if (!story) return <></>
          return (
            <li
              key={story?.id}
              className="relative h-full w-full bg-white md:rounded-md md:drop-shadow"
            >
              <ArticleCard
                data={story}
                isLast={idx === storyData.length - 1}
                userType={userType}
              />
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default StoryCardList
