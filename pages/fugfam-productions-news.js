import styled from '@emotion/styled'
import { css } from 'emotion'
import { getPostsFromTag } from '../api/posts'
import GlobalStyles from '../components/GlobalStyles'
import Header from '../components/Header'
import Link from 'next/link'
import RichBlogFeed from '../components/RichBlogFeed'
import ThreeColumnGrid from '../components/ThreeColumnGrid'

const Img = styled.img`{
  display: block;
  width: 100%;
}`

const textColor = "#be60ff";
const pageColor = "#eaacff";

const FugFamRecordsNews = (props) => (
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

        <img className={css`
          display: block;
          margin: 0 auto;
          width: 80%;

          @media (min-width: 768px) {
            width: 50%;
          }
        `}
              srcSet="static/crandal-release/fugfam-records-logo-320w.png 320w,
                      static/crandal-release/fugfam-records-logo-640w.png 640w,
                      static/crandal-release/fugfam-records-logo-1240w.png 1240w"
              src="static/crandal-release/fugfam-records-logo-1240w.png"
              alt="Fug Fam Records - A Record Setting Record Label" />

        <div>
          <h2 className={css`
            background: #fff;
            box-shadow: 0 0 0 .625rem #fff,-.3125rem 0 0 .625rem #fff;
            color: ${textColor};
            display: inline;
            font-size: 21px;
            margin: 0 0 0 2rem;

            @media (min-width: 768px) {
              font-size: auto;
              margin: 0 0 0 .9rem;
            }
          `}>
            Fug Fam Records News
          </h2>
          <RichBlogFeed
            posts={props.posts}
            theme={
              {
                cardPadding: "10px;",
                headingFontSize: "16px;",
                linkColor: textColor,
                pageColor: pageColor
              }
            }
            marginOverride="40px 0 0 0;"
          />
        </div>

      </div>
    </div>
  </>
)

FugFamRecordsNews.getInitialProps = async () => {
  const posts = await getPostsFromTag('fugfam-records-news');

  return {
    posts: posts
  }
}

export default FugFamRecordsNews
