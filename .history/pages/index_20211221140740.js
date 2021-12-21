import Image from 'next/image'   
import Link from 'next/link'
import styles from  './../styles/Navbar.module.sass'    
import { useSession, signIn, signOut } from "next-auth/react"       
                                                    
 



export default function Home() { 
  
 
    return(   
      <>
        <nav className={styles.navbar}> 
        <ul className={styles.menu}> <li className="logo"> <a href="#"><Image width={100}  height={100} src="/logowhiteprototype 1.png" alt='logowhite'></Image></a></li> 
            <li className="item"><a href="#">Home</a></li> <li className="item"><Link href="/about"><a>About</a></Link></li> 
        <li className="item"><a href="#">Services</a></li> <li className="item"><a href="#">Features</a></li>
         <li className="item"><a href="#">Blog</a></li> <li className="item"><a href="#">Contact</a> </li>
            <li className="item button secondary"><a onClick={() => signIn()} href="#">Sign In</a></li> 
        <li className="toggle"><a href="#"><i className="fas fa-bars"></i></a></li> </ul>  
        </nav>
      </>
    )
}    

