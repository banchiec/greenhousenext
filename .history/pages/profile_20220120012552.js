
import { useSession, signIn, signOut } from "next-auth/react"        
import Link from 'next/link'
import { Navbar } from "../components/Navbar/Navbar"

export default function Component() {
    const { data: session } = useSession()    

    if (session) {           
            
         console.log(session)
        return <>   
        <Navbar/>
            <img src={session.user.image} alt="userimg"></img> 
            <br/>
           Your email {session.user.email} <br /> 
            Welcome {session.user.name}  
            <br></br>
            <Link href="/">
             Home
            </Link>
            <button onClick={() => signOut()}>Sign out</button>
        </>
    }
    return <>
        Not signed in <br />
        <button onClick={() => signIn()}>Sign in </button>
    </>
}



