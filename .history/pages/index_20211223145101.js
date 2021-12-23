import { useSession } from 'next-auth/react'
import { useEffect, useState } from 'react'
import { Navbar } from '../components/Navbar/Navbar'
import { existUser } from '../utils/user.utils'

import UserServices from '../services/user.service'

export default function Home() {

  const { data: session } = useSession()
  const [currentUser, setCurrentUser] = useState({})

  session?.user && existUser(session?.user)
  console.log(session?.user.email)
  //y asignarle a currentUser

  useEffect(() => {
    setCurrentUser(session?.user)
  }, [currentUser])

  return (
    <div>
      <Navbar />
    </div>
  )
}

