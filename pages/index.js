import Image from 'next/image'   
import Link from 'next/link'  
import { useSession, signIn, signOut } from "next-auth/react"       
import { ShowCase } from './components/Showcase/ShowCase'
                                                    
 



export default function Home() { 
  
 
    return(   
      <>
       <ShowCase/>
      </>
    )
}    

