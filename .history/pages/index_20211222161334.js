import { useSession } from 'next-auth/react'
import { useState } from 'react'
import { Navbar } from '../components/Navbar/Navbar'
import { existUser } from '../utils/user.utils'

export default function Home() {

  const { data: session } = useSession()
  const [currentUser, setCurrentUser] = useState()

  existUser(session?.user)

  return (
    <div>
      {
        console.log(session?.user)
      }
      <Navbar />
    </div>
  )
}

