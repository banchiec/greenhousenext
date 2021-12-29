import { useSession } from 'next-auth/react'
import { useEffect, useState } from 'react'
import { Navbar } from '../components/Navbar/Navbar'
import { existUser } from '../utils/user.utils'

export default function Home() {

  const { data: session } = useSession()
  const [currentUser, setCurrentUser] = useState()

  session?.user && existUser(session?.user)

  useEffect(() => {
    setCurrentUser(session?.user)
  }, [currentUser])

  return (
    <div>
      <Navbar />
      {
        currentUser ?
          <h1>Favorites</h1> :
          <h2>F</h2>
      }

    </div>
  )
}

