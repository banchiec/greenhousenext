import { ContainerNavbar } from "./Navbar.styled"
import { ShareIcon } from "@heroicons/react/outline"

export const Navbar = () => {
    return (
        <ContainerNavbar>
            <img src="logo.png" />
            <ShareIcon />
            Navbar
        </ContainerNavbar>
    )
}
