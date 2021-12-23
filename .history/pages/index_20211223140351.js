import { useSession } from 'next-auth/react'
import { useEffect, useState } from 'react'
import { Navbar } from '../components/Navbar/Navbar'
import { existUser } from '../utils/user.utils'

import UserServices from '../services/user.service'

export default function Home() {

  const { data: session } = useSession()
  const [currentUser, setCurrentUser] = useState({})


  session?.user && existUser(session?.user)
  console.log(currentUser)
  //tengo que hacer una busqueda y traer el usuario que se encuentra en la bsae de datos
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

