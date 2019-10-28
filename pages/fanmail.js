import styled from '@emotion/styled'
import { css } from 'emotion'
import { getFanMail } from '../api/posts'
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

const fanMail = (props) => (
  <>
    <GlobalStyles />
    <div className={css`
      margin: 0;
      padding: 0;
      max-width: 414px;
      width: 100%;
    `}>
      <Header />
      <Img srcSet="static/fugnet-fanmail-1242w.png,
                      static/fugnet-fanmail-1242w.png 2x,
                      static/fugnet-fanmail-1242w.png 3x"
              src="static/fugnet-fanmail-1242w.png"
              alt="The Clog - A coporate blog you can't trust." />
      <TextDiv>
        <p>
          Send us shit. Hate what we're doing? Tell us, still Fan Mail.
        </p>

        <p>
          Send it here:<br/><br/>

          Fug Fam, LLC<br/>
          c/o Joey Dehnert<br/>
          P.O. Box 23441<br/>
          San Diego, CA<br/>
          92193
        </p>
      </TextDiv>
      <RichBlogFeed posts={props.fanMail} />
    </div>
  </>
)

fanMail.getInitialProps = async () => {
  const fanMail = await getFanMail();

  return {
    fanMail: fanMail
  }
}

export default fanMail;
