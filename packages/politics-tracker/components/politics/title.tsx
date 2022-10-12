import { useCallback, useState } from 'react'
import useFitText from 'use-fit-text'
import classNames from 'classnames'
import { getLineBreaks, getTailwindConfig } from '~/utils/utils'
import Icon from '~/components/icon'
import s from './title.module.css'
const fullConfig = getTailwindConfig()

const mainTextClass = s['main-text']
const subTextClass = s['sub-text']

type BlockProps = {
  title: string
  content: string | number
  fontSize: number
  lineHeight: number
  customClass: string
  children: React.ReactNode
}
type SingleLineBlock = Pick<BlockProps, 'content' | 'customClass'>
type MultipleLineBlock = Pick<
  BlockProps,
  'content' | 'fontSize' | 'lineHeight' | 'children' | 'customClass'
>
type PoliticsBlockProps = Pick<BlockProps, 'title' | 'customClass' | 'children'>

const SingleLineBlock = (props: SingleLineBlock) => {
  const style = classNames(s['single-line-block'], props.customClass)

  return <div className={style}>{props.content}</div>
}

const MultipleLineBlock = (props: MultipleLineBlock) => {
  const baseFontSize = props.fontSize
  const lineHeight = props.lineHeight
  const lineHeightPadding = 0.2
  const maxLineNo = 2
  const minHeight = baseFontSize * (lineHeight + lineHeightPadding)

  const [height, setHeight] = useState<number>(minHeight)

  // after use-fit-text finished calculation,
  // we should check result and decide whether to update height of the container to make it recalculate.
  const onFinish = useCallback((fontSize: number) => {
    const element = ref.current

    if (fontSize === 100) {
      // full size: check line amount of text content, if amount is 1, set the container to one-line height
      const lineNo = getLineBreaks(element.childNodes[0]).length

      if (lineNo === 1) setHeight(() => minHeight)
    } else {
      // not full size: when size is not full, it means there are two lines, so set the container to two-line height
      setHeight(
        () =>
          ((baseFontSize * fontSize) / 100) *
          (lineHeight + lineHeightPadding) *
          maxLineNo
      )
    }
  }, [])
  const { fontSize, ref } = useFitText({
    onFinish,
  })

  return (
    <div className={props.customClass}>
      <div className={s['multi-line-block-large']}>
        <div
          ref={ref}
          style={{
            fontSize,
            height,
          }}
        >
          {props.content}
        </div>
      </div>
      <div className={s['multi-line-block-small']}>{props.children}</div>
    </div>
  )
}
const PoliticsBlock = (props: PoliticsBlockProps) => {
  const containerStyle = classNames(s.container, props.customClass)

  return (
    <div className={containerStyle}>
      <div className={s['text-group']}>
        <div className={s.title}>{props.title}</div>
        <div className={s.content}>{props.children}</div>
      </div>
    </div>
  )
}

type TitleProps = {
  name: string
  avatar: string
  party: string
  partyIcon: string
  campaign: string
  completed: number
  waiting: number
}
type IconConfig = {
  width: number
  height: number
  borderWidth: number
}
type TextConfig = {
  fontSize: number
  lineHeight: number
  customClass: string
}

export default function Title(props: TitleProps): JSX.Element {
  const personLarge: IconConfig = {
    width: 80,
    height: 80,
    borderWidth: 2,
  }
  const personSmall: IconConfig = {
    width: 60,
    height: 60,
    borderWidth: 2,
  }
  const party: IconConfig = {
    width: 20,
    height: 20,
    borderWidth: 1,
  }

  const fontSizeGroup = fullConfig?.theme?.fontSize
  // @ts-ignore: next line
  const [mainFS, mainLH] = fontSizeGroup['title-main-md']
  // @ts-ignore: next line
  const [subFS, subLH] = fontSizeGroup['title-sub-md']

  const mainText: TextConfig = {
    fontSize: parseInt(mainFS),
    lineHeight: Number(mainLH),
    customClass: mainTextClass,
  }
  const subText: TextConfig = {
    fontSize: parseInt(subFS),
    lineHeight: Number(subLH),
    customClass: subTextClass,
  }

  function partyName(party: string | undefined): string {
    return !party ? '無黨籍' : party
  }

  return (
    <div className={s['main-container']}>
      <div className={s['profile-block']}>
        <span className={s['avatar-large']}>
          <Icon src={props.avatar} {...personLarge} />
        </span>
        <span className={s['avatar-small']}>
          <Icon src={props.avatar} {...personSmall} />
        </span>
        <div className={s.name}>
          <MultipleLineBlock content={props.name} {...mainText}>
            <SingleLineBlock content={props.name} customClass={mainTextClass} />
          </MultipleLineBlock>
          <div className={s.party}>
            <Icon src={props.partyIcon} {...party} />
            <div className={s['party-name']}>
              <MultipleLineBlock content={partyName(props.party)} {...subText}>
                <SingleLineBlock
                  content={partyName(props.party)}
                  customClass={subTextClass}
                />
              </MultipleLineBlock>
            </div>
          </div>
        </div>

        <span className={s.tab}>政見</span>
      </div>
      <div className={s['data-block']}>
        <PoliticsBlock title="參選" customClass={s['campaign-block']}>
          <MultipleLineBlock content={props.campaign} {...mainText}>
            <SingleLineBlock
              content={props.campaign}
              customClass={mainTextClass}
            />
          </MultipleLineBlock>
        </PoliticsBlock>
        <PoliticsBlock title="已審核政見" customClass={s['already-block']}>
          <SingleLineBlock
            content={props.completed}
            customClass={mainTextClass}
          />
        </PoliticsBlock>
        <PoliticsBlock title="待審核政見" customClass={s['waiting-block']}>
          <SingleLineBlock
            content={props.waiting}
            customClass={mainTextClass}
          />
        </PoliticsBlock>
      </div>
    </div>
  )
}