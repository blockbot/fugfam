import styled from '@emotion/styled'
import { css } from 'emotion'
import Link from 'next/link'

const Img = styled.img`{
  display: block;
  margin: 10px auto;
}`

const Header = () => (
  <div className={css`
    margin: 0;
    padding: 0;
    max-width: 414px;
    width: 100%;
  `}>
  <Link href="/index">
    <a>
      <Img srcSet="/static/fugnet-logo-320w.gif,
                /static/fugnet-logo-640w.gif 2x,
                /static/fugnet-logo-943w.gif 3x"
        src="/static/fugnet-logo-320w.gif"
        alt="FugNet Logo" />
    </a>
  </Link>

  </div>
)

export default Header
