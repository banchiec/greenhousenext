import { useSession } from 'next-auth/react'
import { Navbar } from '../components/Navbar/Navbar'
import { existUser } from '../utils/user.utils'

export default function Home() {

  const { data: session } = useSession()
  existUser(session?.user?.email)

  return (
    <div>
      {
        console.log(session?.user)
      }
      <Navbar />
    </div>
  )
}

