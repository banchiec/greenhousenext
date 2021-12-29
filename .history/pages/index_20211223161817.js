import { useSession } from 'next-auth/react'
import { useEffect, useState } from 'react'
import { Navbar } from '../components/Navbar/Navbar'
import { isUser } from '../utils/user.utils'

import UserServices from '../services/user.service'

export default function Home() {

  const { data: session } = useSession()
  const [currentUser, setCurrentUser] = useState({})

  session?.user && isUser(session?.user)

  setCurrentUser((isUser(session?.user)))

  useEffect(() => {
    setCurrentUser(session?.user)
  }, [currentUser])

  return (
    <div>
      <Navbar />
    </div>
  )
}

