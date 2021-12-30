import { useSession } from 'next-auth/react'
import { useEffect, useState } from 'react'
import { Navbar } from '../components/Navbar/Navbar'

import UserServices from '../services/user.service'

export default function Home() {

  const { data: session } = useSession()
  const [currentUser, setCurrentUser] = useState()

  const userServices = new UserServices()

  const isUser = async (user) => {

    try {
      await userServices.createUser(user)
        .then((data) => {
          setCurrentUser(data.data.user)
        }
        )
    } catch (error) {
      return console.log(error)
    }

  }

  console.log(currentUser)
  useEffect(() => {
    isUser(session?.user)
  }, [session])


  return (
    <div className='ContainerApp'>
      <Navbar />
    </div>
  )
}
