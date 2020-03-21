import styled from '@emotion/styled'
import { css } from 'emotion'
import Link from 'next/link'

const Img = styled.img`{
  display: block;
  position: absolute;
  width: 100%;
}`

const P = styled.p`{
  font-size: 22px;
}`

const TextDiv = styled.div`{
  background: white;
  font-size: 22px;
  grid-column: span 1;
  margin: 0 40px;

  @media (min-width: 1200px) {
    margin: 0;
  }
}`

const SquareLink = styled.a`{
  display: block;
  overflow: hidden;
  cursor: pointer;
  position: relative;
  width: 100%;

  &:after {
    content: "";
    display: block;
    padding-bottom: 100%
  }
}`

const RichBlogFeed = (props) => (
  <div className={css`
    display: grid;
    grid-template-columns: repeat(1,1fr);
    grid-gap: 1rem;
    margin: ${props.marginOverride ? props.marginOverride : '0'}

    @media (min-width: 768px) {
      grid-template-columns: repeat(3,1fr);
      font-size: 50px;
    }
  `}>
    {props.posts.map((post, index) => {
      if(index === 2){
        return (
          <>
            <TextDiv className={css`
              padding: ${props.theme.cardPadding ? props.theme.cardPadding : 'auto'};
            `}
            key={post.id}>
              <Link href="/fuglite">
                <SquareLink>
                  <Img srcSet="static/fugnet-fuglite-ad-320w.png,
                            static/fugnet-fuglite-ad-640w.png 2x,
                            static/fugnet-fuglite-ad-1242w.png 3x"
                    src="static/fugnet-fuglite-ad-320w.png"
                    alt="FugLite Ad - Make it a Moment TM" />
                </SquareLink>
              </Link>
            </TextDiv>
            <TextDiv className={css`
              padding: ${props.theme.cardPadding ? props.theme.cardPadding : 'auto'};
            `}
            key={post.id}>
              <Link href={`/p/${post.slug}`}>
                <SquareLink>
                  <Img src={post.feature_image} />
                </SquareLink>
              </Link>
              <h3 className={css`
                font-size: ${props.theme.headingFontSize ? props.theme.headingFontSize : 'auto'}
              `}>
                <Link href={`/p/${post.slug}`}>
                  <a className={css`
                    &:link, &:visited, &:active, &:hover {
                      color: ${props.theme.linkColor ? props.theme.linkColor : 'auto'}
                    }
                  `}>{post.title}</a>
                </Link>
              </h3>
            </TextDiv>
          </>
        )
      } else {
        return (
          <TextDiv className={css`
            padding: ${props.theme.cardPadding ? props.theme.cardPadding : 'auto'};
          `}
          key={post.id}>
            <Link href={`/p/${post.slug}`}>
              <SquareLink>
                <Img src={post.feature_image} />
              </SquareLink>
            </Link>
            <h3 className={css`
              font-size: ${props.theme.headingFontSize ? props.theme.headingFontSize : 'auto'}
            `}>
              <Link href={`/p/${post.slug}`}>
                <a className={css`
                  &:link, &:visited, &:active, &:hover {
                    color: ${props.theme.linkColor ? props.theme.linkColor : 'auto'}
                  }
                `}>{post.title}</a>
              </Link>
            </h3>
          </TextDiv>
        )
      }
    })}
  </div>
)

export default RichBlogFeed;
