import { TabCategory } from '@/types/tab'

type TabItem = {
  name: string
  category: TabCategory
}

const Tab = () => {
  const tabList: TabItem[] = [
    {
      name: '報導',
      category: TabCategory.PUBLISH,
    },
  ]
  return (
    <ul
      className="flex h-[48px] w-full items-center justify-around  border-b border-t border-primary-200
sm:justify-start sm:gap-2 sm:pl-5 md:pl-[70px]"
    >
      {tabList.map(({ name }) => (
        <li
          key={name}
          className="button-large relative cursor-pointer p-[14px] pt-3 text-primary-700 after:absolute after:bottom-[-1px] after:left-0 after:w-full after:border after:border-primary-800 sm:px-8 sm:py-[13px]"
        >
          {name}
        </li>
      ))}
    </ul>
  )
}

export default Tab
