/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { ContainerNavbar } from "./Navbar.styled"
import { ShoppingCartIcon } from "@heroicons/react/outline"
import { LoginIcon } from "@heroicons/react/outline"
import { useSession, signIn, signOut } from "next-auth/react"
import { existUser } from "../../utils/auth.utils"
import { useEffect, useState } from "react"

export const Navbar = () => {
    const { data: session } = useSession()
    const [currentUser, setCurrentUser] = useState({})
    const getCurrentUser = () => {
        console.log(session.user.email)
    }
    useEffect(() => {
        getCurrentUser()
    }, [])
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
