import { useSession } from 'next-auth/react'
import { useEffect, useState } from 'react'
import { Navbar } from '../components/Navbar/Navbar'
import { existUser } from '../utils/user.utils'

export default function Home() {

  const { data: session } = useSession()
  const [currentUser, setCurrentUser] = useState()

  session?.user && setCurrentUser(existUser(session?.user))
  console.log(currentUser)

  useEffect(() => {


  }, [])


  return (
    <div>
      {
        console.log(session?.user)
      }
      <Navbar />
    </div>
  )
}

