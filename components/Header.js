import styled from '@emotion/styled'
import { css } from 'emotion'
import Link from 'next/link'

const Img = styled.img`{
  display: block;
  margin: 0 auto;

  @media (min-width: 768px) {
    margin: 0 0 0 80px;
  }
}`

const Header = () => (
  <div className={css`
    border-bottom: 2px solid #ffd200;
    margin: 0;
    padding: 0;
    width: 100%;
  `}>
    <div className={css`
      margin: 0 auto;
      max-width: calc(1200px - 40px);
      padding: 20px 0;
      width: 100%;

      @media (min-width: 1200px) {
        padding: 20px;
      }
    `}>
      <Link href="/">
        <a className={css`
          display: block;
        `}>
          <Img className={css`
            width: 320px;
          `}
            srcSet="/static/crandal-release/fugnet-logo-320w.png,
                    /static/crandal-release/fugnet-logo-640w.png 2x,
                    /static/crandal-release/fugnet-logo-1242w.png 3x"
            src="/static/crandal-release/fugnet-logo-320w.png"
            alt="FugNet Logo" />
        </a>
      </Link>
    </div>
  </div>
)

export default Header
