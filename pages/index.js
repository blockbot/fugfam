import styled from '@emotion/styled'
import BlogFeed from '../components/BlogFeed'
import { Global, css } from 'emotion'
import FugLetterForm from '../components/FugLetterForm'
import { getFlogPosts, getClogPosts } from '../api/posts'
import GlobalStyles from '../components/GlobalStyles'
import Header from '../components/Header'
import Link from 'next/link'
import ThreeColumnGrid from '../components/ThreeColumnGrid'

const Img = styled.img`{
  display: block;
  width: 100%;
}`

const ImgAd = styled.img`{
  display: block;
  margin: 0 auto;
  width: 320px;
}`

const P = styled.p`{
  font-size: 22px;
}`

const TextDiv = styled.div`{
  font-size: 22px;
  margin: 0 10px;

  p {
    margin: 0 0 10px;
  }
}`

const BlockLink = styled.a`{
  display: block;
}`

const HeroDiv = css`{
  background-color: #fab735;
  padding: 10px;
}`

const Home = (props) => (
  <>
    <GlobalStyles />
    <Header />
      <div className={css`
        margin: 0 auto;
        padding: 0;
        width: 100%;
      `}>
      <div className={css`
        background-color: #f0f0f0;
        padding: 10px;
      `}>
        <Link href="/fuglite">
          <a>
            <ImgAd srcSet="static/fugnet-fuglite-ad-320w.png,
                        static/fugnet-fuglite-ad-640w.png 2x,
                        static/fugnet-fuglite-ad-1242w.png 3x"
                src="static/fugnet-fuglite-ad-320w.png"
                alt="FugLite Ad - Make it a Moment TM" />
          </a>
        </Link>
      </div>

      <div className={css`
        background-color: #fd7ef0;
        margin: 20px auto;
        padding: 0;
        max-width: 1200px;

        @media (min-width: 768px) {
          display: flex;
        }

        &:after {
          content: "";
          clear: both;
          display: table;
        }
      `}>
        <div className={css`
          background-color: #6dd4ff;
          padding-bottom: 50%;
          position: relative;
          width: 100%;

          @media (min-width: 768px) {
            padding-bottom: 0;
            width: 50%;
          }
        `}>
          <div className={css`
            left: 10%;
            position: absolute;
            top: 20%;
          `}>
            <h2 className={css`
              color: #e765d9;
              background: #fff;
              box-shadow: 0 0 0 .625rem #fff,-.3125rem 0 0 .625rem #fff;
              display: inline;
              font-size: 26px;
              line-height: 52px;
              text-align: center;

              @media (min-width: 1200px) {
                font-size: 40px;
                line-height: 82px;
              }
            `}>
              The world is yours. <br/>
              A web portal, reimagined.
            </h2>
          </div>
        </div>
        <Img className={css`
          border: 1px solid #000;
          margin: 20px;
          width: calc(100% - 42px);

          @media (min-width: 768px) {
            width: calc(50% - 42px);
          }

        `}
            srcSet="static/crandal-release/hero-1200w.png,
                    static/crandal-release/hero-1200w.png 2x,
                    static/crandal-release/hero-1200w.png 3x"
            src="static/crandal-release/hero-1200w.png"
            alt="FugLite Ad - Make it a Moment TM" />
      </div>

      <div className={css`
        background-color: #f0f0f0;
        padding: 10px;
      `}>
        <Link href="/fuglite">
          <a>
            <ImgAd srcSet="static/fugnet-fuglite-ad-320w.png,
                        static/fugnet-fuglite-ad-640w.png 2x,
                        static/fugnet-fuglite-ad-1242w.png 3x"
                src="static/fugnet-fuglite-ad-320w.png"
                alt="FugLite Ad - Make it a Moment TM" />
          </a>
        </Link>
      </div>

      <ThreeColumnGrid gridColor="#ffc000" textColor="#ffc000" gridTitle="Fug Fam, LLC Family of Brands" gridItems={
        [
          {
            label: "fugfam-records",
            alt: "Fug Fam Records - A Record Setting Record Label"
          },
          {
            label: "fugfam-productions",
            alt: "Fug Fam Productions - A Future Award Winning Production Studio"
          },
          {
            label: "fuglite",
            alt: "Fug Lite - Make it a Moment"
          }
        ]
      } />
    </div>
  </>
)

Home.getInitialProps = async () => {
  const flogPosts = await getFlogPosts();
  const clogPosts = await getClogPosts();

  return {
    flogPosts: flogPosts,
    clogPosts: clogPosts
  }
}

export default Home
