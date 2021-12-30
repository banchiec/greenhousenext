import { useSession, signIn, signOut } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import { Navbar } from '../components/Navbar/Navbar'
import { ShowCase } from '../components/Showcase/ShowCase'
import { useEffect, useState } from 'react'
import { Collections } from '../components/Collections/Collections'

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

  useEffect(() => {
    isUser(session?.user)
  }, [session])


  return (


    <div className='ContainerApp'>
      <Navbar />
<<<<<<< HEAD
  <Collections />
  {
    currentUser?.name &&
      <h1>{currentUser.name}</h1>
  }
=======
      <ShowCase />  
>>>>>>> 8950226d9f9951b2f4feb93f2134a3d3e30fb5c0
    </div >
  )
}
