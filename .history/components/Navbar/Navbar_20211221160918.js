import { ContainerNavbar } from "./Navbar.styled"
import { ShoppingCartIcon } from "@heroicons/react/outline"
import { useSession, signIn, signOut } from "next-auth/react"

export const Navbar = () => {
    return (
        <ContainerNavbar>
            <img src="logo.png" />
            <div>
                <ShoppingCartIcon />
            </div>
        </ContainerNavbar>
    )
}
