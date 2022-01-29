import { useSession, signIn, signOut } from "next-auth/react"        
import { useRouter } from "next/router"
import Link from 'next/link'
import axios from 'axios'
import { Navbar } from "../components/Navbar/Navbar"
import {  ContainerProfile }from './profile.styled'


import UserServices from '../services/user.service'
import Sidebar from "../components/Sidebar/Sidebar"

export default function Profile() {
    const { data: session } = useSession()    
    const router = useRouter()
    const { query : { emailUser} } = router

    const userServices = new UserServices()
    
    async function getCurrentUser (){
      const currentUser = await axios.get('http://localhost:3000/api/user',{
          params:{ 
              email : emailUser
          }
      })
      console.log(currentUser);
    }
    getCurrentUser()
    if (session) {           
        return <>   
            <Navbar/>
            <ContainerProfile>
                <Sidebar/>
                <img src={session?.user?.image} alt="userimg"></img> 
                <br/>
                    Your email {session?.user.email}<br /> 
                    Welcome {session?.user?.name}  
                <br></br>
                <Link href="/">
                    Home
                </Link>
                <button onClick={() => signOut()}>Sign out</button>
            </ContainerProfile>
        </>
    }
    return <>
        Not signed in <br />
        <button onClick={() => signIn()}>Sign in </button>
    </>
}


