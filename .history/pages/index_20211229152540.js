import { useSession } from 'next-auth/react'
import { useEffect, useState } from 'react'
import { Navbar } from '../components/Navbar/Navbar'
import { isUser } from '../utils/user.utils'

import UserServices from '../services/user.service'

export default function Home() {

  const { data: session } = useSession()
  const [currentUser, setCurrentUser] = useState({})

  const userServices = new UserServices()

  const isUser = async (user) => {
    try {
      const currentUser = await userServices.createUser(user)
      setCurrentUser(currentUser.data.user)

    } catch (error) {
      return console.log(error)
    }
  }

  session?.user && isUser(session?.user)

  // const userSession = ((isUser(session?.user)))
  // userSession.then((data) => setCurrentUser(data))
  useEffect(() => {
    // setCurrentUser(session?.user)
  }, [])

  return (
    <div className='ContainerApp'>
      <Navbar />
    </div>
  )
}
