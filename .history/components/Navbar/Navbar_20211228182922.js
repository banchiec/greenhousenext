/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { ContainerNavbar } from "./Navbar.styled"
import { ShoppingCartIcon } from "@heroicons/react/outline"
import { LoginIcon } from "@heroicons/react/outline"
import { useSession, signIn, signOut, getSession } from "next-auth/react"
import { useEffect, useState } from "react"

export const Navbar = ({ image }) => {
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
                            <img src={image} alt={session?.user?.name} onClick={() => signOut()} />
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
