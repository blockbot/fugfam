import styled from '@emotion/styled'
import { css } from 'emotion'
import FugLetterForm from '../components/FugLetterForm'
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

      <div id="fugfarts" className={css`
          position: relative;
        `}>
        <Img srcSet="static/fugnet-fug-fARTs-320w.gif,
                     static/fugnet-fug-fARTs-640w.gif 2x,
                     static/fugnet-fug-fARTs-1242w.gif 3x"
             src="static/fugnet-fug-fARTs-320w.gif"
             alt="Fug Farts - I've Seen Better" />
        <div className={css`
          height: 700px;
          position: absolute;
          top: 0;
          width: 100%;
        `}>
          {
            // need to tighten this non dynamic css shit up -->
          }
          <a href="https://www.dropbox.com/sh/wfnjn9h0ygu1alz/AABfLTPzwGSVrwBLxqKNtffLa?dl=0" target="_blank" className={css`
            display: block;
            height: 335px;
            left: 0;
            position: absolute;
            top: 110px;
            width: 50%;
          `}></a>
          <a href="https://www.dropbox.com/sh/8qdvowhl64vub5s/AACICxmhhvxqljMMgm1c_F6pa?dl=0" target="_blank" className={css`
            display: block;
            height: 335px;
            right: 0;
            position: absolute;
            top: 110px;
            width: 50%;
          `}></a>
          <a href="https://www.dropbox.com/sh/vvj982u5ulcxyr4/AACLyXaeGCZD6jt9P0HtWgGFa?dl=0" target="_blank" className={css`
            bottom: 0;
            display: block;
            height: 260px;
            left: 0;
            position: absolute;
            width: 100%;
          `}></a>
        </div>
        <TextDiv>
          <p>We put the ART in FART.</p>
          <p>Click on a speech bubble and go on a journey you might regret.</p>
        </TextDiv>
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
            We can't promise that you'll like it, but there is a chance!
          </P>
          <P>
            What we can guarantee is this: it'll be inconsistent, inappropriate, and probably incoherent.
          </P>
          <P>
            Insert your email into this box and let's commit to each other.
          </P>
          <FugLetterForm />
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
          <BlockLink href="https://www.dropbox.com/sh/pw7k5ky2xs2g9bp/AADJ9BBlQxBjMBARuhBKCx-Ia?dl=0" target="_blank">Issue 1: "A Positive Affirmation Journal"</BlockLink>
          <BlockLink href="https://www.dropbox.com/sh/q71oazdts0r1ge4/AADn-qz6gvGwUvC4ObeDsrEqa?dl=0" target="_blank">Issue 2: "The Internet, What a Concept"</BlockLink>
        </TextDiv>
      </div>
      <div id="theflog">
        <Img srcSet="static/fugnet-theflog-320w.png,
                     static/fugnet-theflog-640w.png 2x,
                     static/fugnet-theflog-1242w.png 3x"
             src="static/fugnet-theflog-320w.png"
             alt="The Flog - It's trash, obviously" />
        <TextDiv>
          <p>The Fug Fam Blog aka The Flog aka Shit Post City - Coming Soon! We know, you are dying for more blog content.</p>
        </TextDiv>
      </div>
      <div id="theclog">
        <Img srcSet="static/fugnet-theclog-320w.png,
                     static/fugnet-theclog-640w.png 2x,
                     static/fugnet-theclog-1242w.png 3x"
             src="static/fugnet-theclog-320w.png"
             alt="The Clog - A coporate blog you can't trust." />
        <TextDiv>
          <p>The Clog aka Crandal's Blog - Coming Soon!</p>
          <p>
            Bringing words from our visionary founder about disrupting the business world
            and making the world a better place through the promise of tech,
            always helping us remember that worker's rights are our rights and that
            corporate power is a threat to us all, and thoughts on marketing trends and
            other hot tips to keep your customer happy and the bottom line FAT.
          </p>
        </TextDiv>
      </div>
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
    </div>
  </>
)

export default Home
