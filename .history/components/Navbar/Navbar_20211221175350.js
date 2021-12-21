/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { ContainerNavbar } from "./Navbar.styled"
import { ShoppingCartIcon } from "@heroicons/react/outline"
import { LoginIcon } from "@heroicons/react/outline"
import { useSession, signIn, signOut } from "next-auth/react"
import { existUser } from "../../utils/auth.utils"
import { useEffect } from "react"

export const Navbar = () => {
    const { data: session } = useSession()
    const getCurrentUser = () => {
        console.log("objet")
        console.log(existUser(session?.user?.email))
    }
    useEffect(() => {
        getCurrentUser()
        console.log("objet")
    }, [])
    return (
        <ContainerNavbar>
            <img src="logo.png" alt="Imagen logo" />
            <div>
                {
                    !session ?
                        <LoginIcon onClick={() => {
                            signIn()
                        }
                        } /> : (
                            <img src={session?.user?.image} alt={session?.user?.name} onClick={() => signOut()} />
                        )}
                <ShoppingCartIcon />
            </div>
        </ContainerNavbar>
    )
}
