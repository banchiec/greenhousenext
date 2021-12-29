/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { ContainerNavbar } from "./Navbar.styled"
import { ShoppingCartIcon } from "@heroicons/react/outline"
import { LoginIcon } from "@heroicons/react/outline"
import { useSession, signIn, signOut, getSession } from "next-auth/react"
import { useEffect, useState } from "react"

export const Navbar = ({ currentSession }) => {
    const { data: session, status, loading } = useSession()
    const [currentUser, setCurrentUser] = useState({})
    const getCurrentUser = async () => {
        await setCurrentUser(session?.user)
    }
    useEffect(() => {
        getCurrentUser()
    }, [session])
    return (
        <ContainerNavbar>
            <img src="logo.png" alt="Imagen logo" />
            <div>
                {
                    !session?.user ?
                        <LoginIcon onClick={() => signIn()} />
                        : (
                            <img src={session?.user?.image} alt={session?.user?.name} onClick={() => signOut()} />
                        )}
                <ShoppingCartIcon />
            </div>
        </ContainerNavbar>
    )
}
<<<<<<< HEAD
 



=======
Navbar.getInitialProps = async (context) => {
    return {
        currentSession: await getSession(context)
    }
}
>>>>>>> 72f042935e22fb06e4fa98af92e8552f08f4d386
