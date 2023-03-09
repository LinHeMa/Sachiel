import NextLink from 'next/link'
import { useEffect, useState } from 'react'
import styled from 'styled-components'

import IconFacebook from '~/public/icons/facebook-circle.svg'
import IconLine from '~/public/icons/line-circle.svg'
import IconLink from '~/public/icons/link-circle.svg'
import IconTwitter from '~/public/icons/twitter-circle.svg'

interface MediaLinkProps {
  margin: string
}
const MediaLinkWrapper = styled.ul<MediaLinkProps>`
  width: 100%;
  max-width: 192px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: ${(props) => props.margin};
  > li {
    background: #f6f6fb;
    display: inline-block;
    width: 36px;
    height: 36px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
  }
  > li:hover {
    cursor: pointer;
    background-color: rgba(246, 246, 251, 0.3);
  }
  li + li {
    margin-left: 16px;
  }
  svg {
    width: 18px;
    height: 18px;
  }
`

type ExternalLinkItem = {
  name: string
  href: string
  svgIcon: any
  alt: string
}

export default function MediaLinkList({ margin = '0 auto 48px' }): JSX.Element {
  const [origin, setOrigin] = useState('')

  useEffect(() => {
    setOrigin(() => window.location.origin)
  }, [])

  const externalLinks: ExternalLinkItem[] = [
    {
      name: 'Facebook',
      href: `https://www.facebook.com/share.php?u=${origin}`,
      svgIcon: IconFacebook,
      alt: '分享至facebook',
    },
    {
      name: 'Twitter',
      href: `https://twitter.com/intent/tweet?url=${origin}`,
      svgIcon: IconTwitter,
      alt: '分享至twitter',
    },
    {
      name: 'Line',
      href: `https://social-plugins.line.me/lineit/share?url=${origin}`,
      svgIcon: IconLine,
      alt: '分享至line',
    },
  ]

  function handleLinkClick() {
    alert('連結已複製')
  }

  return (
    <MediaLinkWrapper margin={margin} className="media-link-list">
      {externalLinks.map((item) => {
        return (
          <li key={item.name} aria-label={item.alt}>
            <NextLink
              href={item.href}
              target="_blank"
              rel="noopener noreferrer external nofollow"
            >
              <item.svgIcon />
            </NextLink>
          </li>
        )
      })}
      <li key="Line">
        <button aria-label="複製網站連結">
          <IconLink onClick={handleLinkClick} />
        </button>
      </li>
    </MediaLinkWrapper>
  )
}
