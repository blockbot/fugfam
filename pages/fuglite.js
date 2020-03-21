import styled from '@emotion/styled'
import { css } from 'emotion'
import { getPageFromSlug } from '../api/pages'
import GlobalStyles from '../components/GlobalStyles'
import Header from '../components/Header'
import Link from 'next/link'
import RichBlogFeed from '../components/RichBlogFeed'
import ThreeColumnGrid from '../components/ThreeColumnGrid'

const Img = styled.img`{
  display: block;
  width: 100%;
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

const textColor = "#007eb9";
const pageColor = "#03a2ed";

const FugLite = (props) => {
  const postMarkup = ()=> {
    return {__html: props.page.html};
  }

  console.log(props);

  return(
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
                srcSet="static/crandal-release/logo-fuglite-320w.png 320w,
                        static/crandal-release/logo-fuglite-640w.png 640w,
                        static/crandal-release/logo-fuglite-1240w.png 1240w"
                src="static/crandal-release/logo-fuglite-1240w.png"
                alt="Fug Lite - Make it a Moment" />

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
              {props.page.title}
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
            </TextDiv>
          </div>
        </div>
      </div>
    </>
  )
}

FugLite.getInitialProps = async () => {
  const page = await getPageFromSlug('fuglite');

  console.log("??");
  console.log(page)

  return {
    page: page
  }
}

export default FugLite
