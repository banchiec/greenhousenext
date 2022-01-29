
import { useSession, signIn, signOut } from "next-auth/react"        


export default function Component() {
    const { data: session } = useSession()    

    if (session) {           
            
         console.log(session)
        return <>   
            <img src={session.user.image} alt="userimg"></img> 
            <br/>
           Your email {session.user.email} <br /> 
            Welcome {session.user.name}  
            <br></br>
            <button onClick={() => signOut()}>Sign out</button>
        </>
    }
    return <>
        Not signed in <br />
        <button onClick={() => signIn()}>Registrate </button>
    </>
}



