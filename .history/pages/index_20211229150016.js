import { useSession } from 'next-auth/react'
import { useEffect, useState } from 'react'
import { Navbar } from '../components/Navbar/Navbar'
import { isUser } from '../utils/user.utils'

import UserServices from '../services/user.service'

export default function Home() {

  const { data: session } = useSession()
  const [currentUser, setCurrentUser] = useState({})
  session?.user && isUser(session?.user)

  const userSession = ((isUser(session?.user)))

  setCurretUser(userSession.then((data) => console.log(data)))
  useEffect(() => {
    // setCurrentUser(session?.user)
  }, [])

  return (
    <div className='ContainerApp'>
      <Navbar />
    </div>
  )
}

