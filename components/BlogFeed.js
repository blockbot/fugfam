import Link from 'next/link'

const BlogFeed = (props) => (
  <>
  <p>Latest Posts:</p>

  <ul>
    {props.posts.map(post => (
      <li key={post.id}>
          <Link href={`/p/${post.slug}`}>
            <a>{post.title}</a>
          </Link>
      </li>
    ))}
  </ul>
  </>
)

export default BlogFeed;
