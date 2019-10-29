import { css } from 'emotion'
import Link from 'next/link'


const BlogFeed = (props) => (
  <>
  <p>Latest Posts:</p>

  <ul className={css`
    padding: 0;

    &:after{
      content: "";
      clear: both;
      display: table;
    }
  `}>
    {props.posts.map(post => (
      <li key={post.id} className={css`
        float: left;
        list-style-type: none;
        margin: 0;
        padding: 0;
        width: 46%;

        &:first-child{
          margin-right: 4%
        }
      `}>
          <Link href={`/p/${post.slug}`}>
            <img src={post.feature_image} className={css`
              width: 100%;
            `} />
          </Link>
          <Link href={`/p/${post.slug}`}>
            <a>{post.title}</a>
          </Link>
      </li>
    ))}
  </ul>
  </>
)

export default BlogFeed;
