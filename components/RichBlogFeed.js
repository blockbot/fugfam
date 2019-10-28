import styled from '@emotion/styled'
import { css } from 'emotion'
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

const RichBlogFeed = (props) => (
  <div>
    <hr className={css`
      margin: 0 40px;
    `} />
    {props.posts.map(post => (
      <TextDiv key={post.id}>
        <h2>
          <Link href={`/p/${post.slug}`}>
            <a>{post.title}</a>
          </Link>
        </h2>
        <Link href={`/p/${post.slug}`}>
          <a><Img src={post.feature_image} /></a>
        </Link>
        <p>{post.excerpt}</p>
        <p>
          <Link href={`/p/${post.slug}`}>
            <a>Read Full Post</a>
          </Link>
        </p>
      </TextDiv>
    ))}
  </div>
)

export default RichBlogFeed;
