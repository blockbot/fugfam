import styled from '@emotion/styled'
import { css } from 'emotion'
import { getFlogPosts } from '../api/posts'
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

const theFlog = (props) => (
  <>
    <GlobalStyles />
    <div className={css`
      margin: 0;
      padding: 0;
      max-width: 414px;
      width: 100%;
    `}>
      <Header />
      <Img srcSet="static/fugnet-theflog-320w.png,
                      static/fugnet-theflog-640w.png 2x,
                      static/fugnet-theflog-1242w.png 3x"
              src="static/fugnet-theflog-320w.png"
              alt="The Flog - It's trash, obviously" />
      <TextDiv>
        <h1>The Fug Fam Blog aka The Flog aka Shit Post City.</h1>
      </TextDiv>
      <RichBlogFeed posts={props.flogPosts} />
    </div>
  </>
)

theFlog.getInitialProps = async () => {
  const flogPosts = await getFlogPosts();

  return {
    flogPosts: flogPosts
  }
}

export default theFlog
