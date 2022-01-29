
import { useSession, signIn, signOut } from "next-auth/react"        
import Link from 'next/link'
import { Navbar } from "../components/Navbar/Navbar"

export default function Profile(currentUser) {
    const { data: session } = useSession()    

    console.log(currentUser)
    if (session) {           
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



