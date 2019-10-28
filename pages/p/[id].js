import styled from '@emotion/styled'
import { css } from 'emotion'
import { getSinglePost } from '../../api/posts'
import GlobalStyles from '../../components/GlobalStyles'
import Header from '../../components/Header'

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

  return (
    <>
      <GlobalStyles />
      <div className={css`
        margin: 0;
        padding: 0;
        max-width: 414px;
        width: 100%;
      `}>
        <Header />
        <hr className={css`
          margin: 0 40px;
        `} />
        <TextDiv>
          <h1>{props.post.title}</h1>
          <Img src={props.post.feature_image} />
          <div dangerouslySetInnerHTML={postMarkup()}></div>
        </TextDiv>
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
