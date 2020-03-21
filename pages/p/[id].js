import styled from '@emotion/styled'
import { css } from 'emotion'
import { getSinglePost } from '../../api/posts'
import GlobalStyles from '../../components/GlobalStyles'
import Header from '../../components/Header'
import Link from 'next/link'

const pageColor = "#3ce6ff";
const textColor = "#00a0b8";

const Img = styled.img`{
  display: block;
  width: 100%;
}`

const P = styled.p`{
  font-size: 22px;
}`

const TextDiv = styled.div`{
  background: white;
  font-size: 20px;
  padding: 60px 20px;

  p {
    line-height: 40px;
    margin: 0 0 40px;
  }

  figure{
    margin: 10px 0;
  }

  img{
    width: 100%;
  }
}`

const BlockLink = styled.a`{
  display: block;
}`

const Post = (props) => {
  const postMarkup = ()=> {
    return {__html: props.post.html};
  }
  console.log(props);

  return (
    <>
      <GlobalStyles />
      <Header />

      <div className={css`
          background-color: ${pageColor};
          margin: 0;
          padding: 0;
        `}>
        <div className={css`
            margin: 0 auto;
            padding: 40px 0 20px;
            max-width: 1200px
          `}>

          <div className={css`
            margin-bottom: 40px;
          `}>
            <img className={css`
                border: 10px solid white;
                display: block;
                margin: 0 auto;
                width: 80%;

                @media (min-width: 768px) {
                  width: 50%;
                }
              `}
              src={props.post.feature_image}
              alt={`${props.post.feature_image}`} />
          </div>

          <div>
            <h2 className={css`
              background: #fff;
              box-shadow: 0 0 0 .625rem #fff,-.3125rem 0 0 .625rem #fff;
              color: ${textColor};
              display: inline-block;
              font-size: 21px;
              margin: 0 0 40px 2rem;

              @media (min-width: 768px) {
                font-size: auto;
                margin: 0 0 40px .9rem;
              }
            `}>
              {props.post.title}
            </h2>
            <TextDiv>
              <div className={css`
                margin: 0 auto;
                width: 90%;

                @media (min-width: 768px) {
                  width: 75%;
                }
              `}
              dangerouslySetInnerHTML={postMarkup()}></div>

              {props.post.tags.map(tag => (
                  <Link href={`/${tag.slug}`}>
                  <a className={css`
                    &:link, &:visited, &:active, &:hover {
                      background: ${textColor};
                      color: white;
                      display: inline-block;
                      margin-left: 5%;
                      padding: 20px;

                      @media (min-width: 768px) {
                        margin-left: 12.5%;
                      }
                    }
                  `}>Posted In: {tag.name}</a>
                  </Link>
                )
              )}
            </TextDiv>
          </div>
        </div>
      </div>
    </>
  )
}

Post.getInitialProps = async ({query}) => {
  const post = await getSinglePost(query.id);

  return {
    post: post,
  }
}

export default Post;
