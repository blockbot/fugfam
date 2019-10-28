import styled from '@emotion/styled'
import { css } from 'emotion'
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

const secretStatusClub = (props) => (
  <>
    <GlobalStyles />
    <div className={css`
      margin: 0;
      padding: 0;
      max-width: 414px;
      width: 100%;
    `}>
      <Header />
      <Img srcSet="static/fugnet-secret-status-club-320w.png,
                      static/fugnet-secret-status-club-640w.png 2x,
                      static/fugnet-secret-status-club-1242w.png 3x"
              src="static/fugnet-secret-status-club-320w.png"
              alt="Secret Status Club" />
      <TextDiv>
        <h1>Secret Status Club - A Diamond Elite Level Club</h1>
        <h2>
          How to join?
        </h2>
        <p>
          Send $4 USD cash and a fan letter (preferably with a drawing) to:<br/><br/>

          Fug Fam, LLC<br/>
          c/o Joey Dehnert<br/>
          P.O. Box 23441<br/>
          San Diego, CA<br/>
          92193
        </p>
        <h2>What do you get?</h2>
        <p>
          <ul>
            <li>A Membership Card</li>
            <li>Preferential Treatment</li>
          </ul>
        </p>
      </TextDiv>
    </div>
  </>
)

export default secretStatusClub
