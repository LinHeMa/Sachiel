import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'

//components
import TitleButton from '~/components/landing/frontpage-button'

const TitleContainer = styled.div`
  width: 100%;
  display: flex;
`
const FrontPageSide = styled.div`
  width: 40px;
  height: 406px;
  background: ${({ theme }) => theme.backgroundColor.black};
  padding-bottom: 20px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  ${({ theme }) => theme.breakpoint.md} {
    height: 582px;
  }
  ${({ theme }) => theme.breakpoint.xl} {
    width: 6vw;
    height: 100%;
  }
`
const ArrowIcon = styled.div`
  width: 31px;
  height: 32px;
  ${({ theme }) => theme.breakpoint.xxl} {
    width: 57px;
    height: 60px;
  }
`
const MainTitleContainer = styled.div`
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.backgroundColor.yellow};
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: inset 0px -4px 0px #000000;
  ${({ theme }) => theme.breakpoint.md} {
    height: 412px;
    justify-content: flex-start;
    padding: 0px 40px;
    box-shadow: inset -4px 0px 0px #000000, inset 0px -4px 0px #000000;
  }
  ${({ theme }) => theme.breakpoint.xl} {
    height: calc(100% - 240px);
  }
`
const MainTitleGroup = styled.div`
  text-align: center;
  h1,
  h4 {
    color: ${({ theme }) => theme.textColor.black};
    text-align: center;
    ${({ theme }) => theme.breakpoint.md} {
      text-align: left;
    }
  }
  h1 {
    /* TODO: 建檔成theme variable */
    font-size: 40px;
    line-height: 1.2;
    font-weight: 900;
    max-width: 160px;
    margin: auto;
    margin-bottom: 10px;
    ${({ theme }) => theme.breakpoint.md} {
      max-width: none;
    }
    ${({ theme }) => theme.breakpoint.xl} {
      font-size: 60px;
    }
  }
  h4 {
    /* TODO: 建檔成theme variable */
    font-size: 22px;
    font-weight: 700;
    margin-bottom: 10px;
    ${({ theme }) => theme.breakpoint.xl} {
      font-size: 28px;
    }
  }

  ${({ theme }) => theme.breakpoint.md} {
    text-align: left;
  }
`
const LogoIcon = styled.div`
  width: 100px;
  height: 93px;
  margin: auto;
  margin-bottom: 12px;
  ${({ theme }) => theme.breakpoint.md} {
    margin-left: 0px;
  }
  ${({ theme }) => theme.breakpoint.xl} {
    width: 200px;
    height: 186px;
    margin-bottom: 40px;
  }
`
const Introduce = styled.div`
  display: none;
  ${({ theme }) => theme.breakpoint.md} {
    display: flex;
    align-items: center;
    width: 100%;
    height: 170px;
    background: ${({ theme }) => theme.backgroundColor.brown};
    box-shadow: inset -4px 0px 0px #000000, inset 0px -4px 0px #000000;
    padding: 20px 16px;
    color: ${({ theme }) => theme.textColor.white};
    font-weight: 700;
    /* TODO: 建檔成theme variable */
    font-size: 20px;
    ${({ theme }) => theme.breakpoint.xl} {
      height: 240px;
      padding: 20px 60px;
      font-size: 24px;
    }
  }
`
const TitleWrap = styled.div`
  width: 100%;
  height: 406px;
  ${({ theme }) => theme.breakpoint.md} {
    height: 582px;
  }
  ${({ theme }) => theme.breakpoint.xl} {
    width: 56vw;
    height: 100%;
  }
`
/**
 *
 * @returns {React.ReactElement}
 */

export default function Title() {
  return (
    <TitleContainer>
      <FrontPageSide>
        <ArrowIcon>
          <Image
            alt="arrowDown"
            src="/landingpage/arrow_down.svg"
            width="100"
            height="100"
          />
        </ArrowIcon>
      </FrontPageSide>
      <TitleWrap>
        <MainTitleContainer>
          <MainTitleGroup>
            <LogoIcon>
              <Image
                alt="Logo"
                src="/landingpage/frontpagelogo_sm.svg"
                width="200"
                height="200"
              />
            </LogoIcon>
            <h1>臺灣政見追蹤平台</h1>
            <h4>一起補完候選人的政見</h4>
            <TitleButton />
          </MainTitleGroup>
        </MainTitleContainer>
        <Introduce>
          這是一個簡單但需要眾人協力的計畫。我們希望用「開放資料」
          的格式將散佈在網路上關於公眾人物的公開資料串連起來，
          包括公眾人物的學歷、經歷、資產、政治獻金、學術論文、報告、親戚關係。
        </Introduce>
      </TitleWrap>
    </TitleContainer>
  )
}