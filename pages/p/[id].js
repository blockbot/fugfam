import Header from '../../components/Header'
import { useRouter } from 'next/router'

export default function Post() {
  const router = useRouter();

  return (
    <>
      <Header />
      <h1>{router.query.id}</h1>
      <p>This is the blog post content.</p>
    </>
  )
}
