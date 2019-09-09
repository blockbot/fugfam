import styled from '@emotion/styled'
import { css } from 'emotion'
import GlobalStyles from '../components/GlobalStyles'
import Header from '../components/Header'
import Link from 'next/link'

const Img = styled.img`{
  display: block;
  width: 100%;
}`

const P = styled.p`{
  font-size: 22px;
}`

const TextDiv = styled.div`{
  font-size: 22px;
  margin: 0 40px;
}`

const BlockLink = styled.a`{
  display: block;
}`

const Home = () => (
  <>
    <GlobalStyles />
    <div className={css`
      margin: 0;
      padding: 0;
      max-width: 414px;
      width: 100%;
    `}>
      <Header />
      <Img srcSet="static/fugnet-fuglite-ad-320w.png,
                   static/fugnet-fuglite-ad-640w.png 2x,
                   static/fugnet-fuglite-ad-1242w.png 3x"
          src="static/fugnet-fuglite-ad-320w.png"
          alt="FugLite Ad - Make it a Moment TM" />
      <Img srcSet="static/fugnet-animation-1-320w.gif,
                   static/fugnet-animation-1-640w.gif 2x,
                   static/fugnet-animation-1-1242w.gif 3x"
          src="static/fugnet-animation-1-320w.gif"
          alt="FugNet Animation 1" />
      <div id="fugfarts">
        <Img srcSet="static/fugnet-fug-fARTs-320w.gif,
                     static/fugnet-fug-fARTs-640w.gif 2x,
                     static/fugnet-fug-fARTs-1242w.gif 3x"
             src="static/fugnet-fug-fARTs-320w.gif"
             alt="Fug Farts - I've Seen Better" />
      </div>
      <div id="fugletter">
        <Img srcSet="static/fugnet-fugletter-320w.png,
                     static/fugnet-fugletter-640w.png 2x,
                     static/fugnet-fugletter-1242w.png 3x"
             src="static/fugnet-fugletter-320w.png"
             alt="Fug Letter - It's Spam" />
        <TextDiv>
          <P>
            Sign up so you can have more SHIT in your email.
          </P>
          <P>
            We promise that you might like it! Or not, no way to know.
          </P>
          <P>
            But what we can guarantee is this: it'll be inconsistent, inappropriate, and probably incoherent.
          </P>
          <P>
            Insert your email into this box and let's commit to each other.
          </P>
        </TextDiv>
      </div>
      <Img srcSet="static/fugnet-animation-cow2-320w.gif,
                   static/fugnet-animation-cow2-640w.gif 2x,
                   static/fugnet-animation-cow2-1242w.gif 3x"
          src="static/fugnet-animation-cow2-320w.gif"
          alt="FugNet Animation Cow" />
      <Img srcSet="static/fugnet-fuglite-ad-320w.png,
                   static/fugnet-fuglite-ad-640w.png 2x,
                   static/fugnet-fuglite-ad-1242w.png 3x"
          src="static/fugnet-fuglite-ad-320w.png"
          alt="FugLite Ad - Make it a Moment TM" />
      <div id="fugzine">
        <Img srcSet="static/fugnet-fugzine-320w.png,
                     static/fugnet-fugzine-640w.png 2x,
                     static/fugnet-fugzine-1242w.png 3x"
            src="static/fugnet-fugzine-320w.png"
            alt="FUGZINE" />
        <TextDiv>
          <Link href="static/fugnet-fugzine-320w.png">
            <BlockLink>Issue 1: "A Positive Affirmation Journal"</BlockLink>
          </Link>
          <Link href="static/fugnet-theflog-320w.png">
            <BlockLink href="">Issue 2: "The Internet, What a Concept"</BlockLink>
          </Link>
        </TextDiv>
      </div>
      <div id="theflog">
        <Img srcSet="static/fugnet-theflog-320w.png,
                     static/fugnet-theflog-640w.png 2x,
                     static/fugnet-theflog-1242w.png 3x"
             src="static/fugnet-theflog-320w.png"
             alt="The Flog - It's trash, obviously" />
        <TextDiv>
          <p>The Fug Fam Blog - Coming Soon! We know, you are dying for more blog content.</p>
        </TextDiv>
      </div>
      <Img srcSet="static/fugnet-fuglite-ad-320w.png,
                   static/fugnet-fuglite-ad-640w.png 2x,
                   static/fugnet-fuglite-ad-1242w.png 3x"
          src="static/fugnet-fuglite-ad-320w.png"
          alt="FugLite Ad - Make it a Moment TM" />
    </div>
  </>
)

export default Home
