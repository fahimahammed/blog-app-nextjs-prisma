import FromNewPost from '@/components/form-new-post'
import { getCurrentUser } from '@/lib/session'

export default async function Home() {
  const user = await getCurrentUser();
  console.log(user)
  return (
    <main className='max-w-4xl mx-auto my-5'>
      <FromNewPost />
    </main>
  )
}
