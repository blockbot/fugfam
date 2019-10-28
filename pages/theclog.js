import styled from '@emotion/styled'
import { css } from 'emotion'
import { getClogPosts } from '../api/posts'
import GlobalStyles from '../components/GlobalStyles'
import Header from '../components/Header'
import RichBlogFeed from '../components/RichBlogFeed'

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

const theClog = (props) => (
  <>
    <GlobalStyles />
    <div className={css`
      margin: 0;
      padding: 0;
      max-width: 414px;
      width: 100%;
    `}>
      <Header />
      <Img srcSet="static/fugnet-theclog-320w.png,
                      static/fugnet-theclog-640w.png 2x,
                      static/fugnet-theclog-1242w.png 3x"
              src="static/fugnet-theclog-320w.png"
              alt="The Clog - A coporate blog you can't trust." />
      <TextDiv>
        <h1>The Clog aka Crandal's Blog</h1>
        <p>
          Words from our visionary founder about disrupting the business world
          and making the world a better place through the promise of tech,
          always helping us remember that worker's rights are our rights and that
          corporate power is a threat to us all, and thoughts on marketing trends and
          other hot tips to keep your customer happy and the bottom line FAT.
        </p>
      </TextDiv>
      <RichBlogFeed posts={props.clogPosts} />
    </div>
  </>
)

theClog.getInitialProps = async () => {
  const clogPosts = await getClogPosts();

  return {
    clogPosts: clogPosts
  }
}

export default theClog
