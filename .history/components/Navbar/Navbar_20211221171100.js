/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { ContainerNavbar } from "./Navbar.styled"
import { ShoppingCartIcon } from "@heroicons/react/outline"
import { LoginIcon } from "@heroicons/react/outline"
import { useSession, signIn, signOut } from "next-auth/react"

export const Navbar = () => {
    const { data: session } = useSession()
    return (
        <ContainerNavbar>
            <img src="logo.png" alt="Imagen logo" />
            <div>
                <img src={session?.user?.image} alt={session?.user?.name} />
                {
                    !session.user &&
                    <LoginIcon />

                }
                <ShoppingCartIcon />
            </div>
        </ContainerNavbar>
    )
}
