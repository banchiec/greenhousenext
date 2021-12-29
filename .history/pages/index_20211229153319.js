import { useSession } from 'next-auth/react'
import { useEffect, useState } from 'react'
import { Navbar } from '../components/Navbar/Navbar'
import { isUser } from '../utils/user.utils'

import UserServices from '../services/user.service'

export default function Home() {

  const { data: session } = useSession()
  const [currentUser, setCurrentUser] = useState({})

  const userServices = new UserServices()

  const isUser = (user) => {
    try {
      userServices.createUser(user)
        .then((data) => {
          setCurrentUser(data.data.user)
        }
        )
    } catch (error) {
      return console.log(error)
    }
  }


  useEffect(() => {
  }, [])

  return (
    <div className='ContainerApp'>
      <Navbar />
    </div>
  )
}
