import { useSession } from 'next-auth/react'
import { useEffect, useState } from 'react'
import { Navbar } from '../components/Navbar/Navbar'
import { existUser } from '../utils/user.utils'

import UserServices from '../services/user.service'

export default function Home() {

  const { data: session } = useSession()
  const [currentUser, setCurrentUser] = useState(existUser(session?.user))

  const userService = new UserServices()

  //tengo que hacer una busqueda y traer el usuario que se encuentra en la bsae de datos
  //y asignarle a currentUser

  existUser(session?.user)
  useEffect(() => {
    setCurrentUser(session?.user)
  }, [currentUser])

  return (
    <div>
      <Navbar />
    </div>
  )
}

