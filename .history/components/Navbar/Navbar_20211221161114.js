import { ContainerNavbar } from "./Navbar.styled"
import { ShoppingCartIcon } from "@heroicons/react/outline"
import { useSession, signIn, signOut } from "next-auth/react"

export const Navbar = () => {
    const { data: session } = useSession()
    return (
        <ContainerNavbar>
            <img src="logo.png" />
            <div>
                <img src={session?.user?.image} alt={session?.user ? name} />
                <ShoppingCartIcon />
            </div>
        </ContainerNavbar>
    )
}
