import { useSession, signIn, signOut } from 'next-auth/react'
import { Navbar } from '../components/Navbar/Navbar'
import { ShowCase } from '../components/Showcase/ShowCase'
import { useEffect, useState } from 'react' 
import { ProductForm } from '../components/ProductForm/ProductForm'
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


    <div className='container-app'>
      <Navbar />
      {/* {
        currentUser?.name &&
        <h1>{currentUser.name}</h1>
      } */}
       {
       <ShowCase />
      }
   
      {/* <Collections /> */}
    </div >
  )
}
