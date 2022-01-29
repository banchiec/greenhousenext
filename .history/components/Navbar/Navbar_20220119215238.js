/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { ContainerNavbar } from "./Navbar.styled"
import { ShoppingCartIcon } from "@heroicons/react/outline"
import { LoginIcon,LogoutIcon} from "@heroicons/react/outline"
import { useSession, signIn, signOut, getSession } from "next-auth/react"
import { useEffect, useState } from "react"

export const Navbar = (props) => {
    const { data: session, status, loading } = useSession()
    const [currentUser, setCurrentUser] = useState({})
    const getCurrentUser = async () => {
        await setCurrentUser(session?.user)
    }
    useEffect(() => {
        getCurrentUser()
    }, [session])
    console.log(session);
    
    return (
        <ContainerNavbar>
            <img src="casaverdelogoLetter.png" alt="Imagen logo" />
            <div>
                {
                    !session?.user ?
                        <LoginIcon onClick={() => signIn()} />
                        : (
                            <div>
                                <img 
                                    src={session?.user?.image} 
                                    alt={session?.user?.name}
                                   onClick={() => console.log("profile")}
                                />
                                <LogoutIcon onClick={()=>signOut()}/>
                            </div>
                        )}
                <ShoppingCartIcon />
            </div>
        </ContainerNavbar>
    )
}
Navbar.getInitialProps = async (context) => {
    return {
        currentSession: await getSession(context)
    }
}