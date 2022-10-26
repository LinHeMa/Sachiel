import type { LinkHref } from '~/types/common'
import classNames from 'classnames'
import Link from 'next/link'
import Home from '~/components/icons/home'
import ArrowLeft from '~/components/icons/arrow-left'
import ArrowRight from '~/components/icons/arrow-right'
import s from './nav.module.css'

export type LinkMember = {
  content: string
  href: LinkHref
  backgroundColor: string
}

type NavProps = {
  prev?: LinkMember
  next?: LinkMember
}

export default function Nav(props: NavProps): JSX.Element {
  const backStyle = classNames(s['back'], props.prev?.backgroundColor)
  const nextStyle = classNames(s['next'], props.next?.backgroundColor)
  const homeStyle = classNames(s['home'], {
    [s['default-hidden']]: !(props.prev && props.next),
  })

  return (
    <div className={s['container']}>
      {props.prev && (
        <Link href={props.prev.href}>
          <a className={backStyle}>
            <span className={s['icon']}>
              <ArrowLeft />
            </span>
            <div className={s['text']}>{props.prev.content}</div>
          </a>
        </Link>
      )}
      <div className={homeStyle}>
        <Link href="/">
          <a className={s['icon-home']}>
            <Home />
          </a>
        </Link>
      </div>
      {props.next && (
        <Link href={props.next.href}>
          <a className={nextStyle}>
            <span className={s['icon']}>
              <ArrowRight />
            </span>
            <div className={s['text']}>{props.next.content}</div>
          </a>
        </Link>
      )}
    </div>
  )
}
