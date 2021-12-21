import { ContainerNavbar } from "./Navbar.styled"
import { BeakerIcon } from "@heroicons/react/outline"

export const Navbar = () => {
    return (
        <ContainerNavbar>
            <img src="logo.png" />
            <BeakerIcon />
            Navbar
        </ContainerNavbar>
    )
}
