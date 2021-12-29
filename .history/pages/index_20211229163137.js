import { useSession } from 'next-auth/react'
import { useEffect, useState } from 'react'
import { Navbar } from '../components/Navbar/Navbar'

import UserServices from '../services/user.service'

export default function Home() {

  const { data: session } = useSession()
  const [currentUser, setCurrentUser] = useState()

  const userServices = new UserServices()

  const isUser = (user) => {
    try {
      userServices.createUser(user)
        .then((data) => {
          console.log(data.data.user)
          setCurrentUser(data.data.user)
        }
        )
    } catch (error) {
      return console.log(error)
    }
  }

  useEffect(() => {
    isUser(session?.user)
  }, [])

  return (
    <div className='ContainerApp'>
      <Navbar />
      <h1>{currentUser.name}</h1>
    </div>
  )
}
