import { ContainerNavbar } from "./Navbar.styled"
import { ShoppingCartIcon } from "@heroicons/react/outline"

export const Navbar = () => {
    return (
        <ContainerNavbar>
            <img src="logo.png" />
            <ShoppingCartIcon />
            Navbar
        </ContainerNavbar>
    )
}
