import { useSession, signIn, signOut } from "next-auth/react"        
import { useRouter } from "next/router"
import {useState, useEffect} from 'react'
import { CogIcon } from "@heroicons/react/outline"
import Link from 'next/link'
import { Navbar } from "../components/Navbar/Navbar"
import {  ContainerProfile }from './profile.styled'

import UserServices from '../services/user.service'

export default function Profile() {
    const { data: session } = useSession()    
    const router = useRouter()
    const { query : { emailUser} } = router

    const userServices = new UserServices()
    const [currentUser, setCurrentUser] = useState()


    const isUser = async (user) => {
        try {
            await userServices.createUser(user)
               .then((data) => {
                setCurrentUser(data?.data?.user)
                }
            )
            } catch (error) {
            return console.log(error)
        }
    }
    useEffect(() => {
        isUser(session?.user)
    },[session?.user])
    
    console.log(currentUser)

    if (session) {           
        return <>   
            <Navbar/>
            <ContainerProfile>
                {(currentUser?.role === "Admin") && 
                  <Link href={{
                        pathname : '/control-panel',
                  }}>
                      <div>
                        <CogIcon/>
                      </div>
                  </Link>
                }
                {/* <img src={session?.user?.image} alt="userimg"></img>  */}
                <br/>
                <h1>
                    {session?.user.email}<br /> 
                </h1>
                <h2>
                    Bienvenido {session?.user?.name}  
                </h2>
                <br></br>
                <Link href="/">
                    Home
                </Link>
            </ContainerProfile>
        </>
    }
    return <>
        Not signed in <br />
        <button onClick={() => signIn()}>Sign in </button>
    </>
}



