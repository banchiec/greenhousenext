import { ContainerNavbar } from "./Navbar.styled"
import { BeakerIcon } from '@heroicons/react'

export const Navbar = () => {
    return (
        <ContainerNavbar>
            <img src="logo.png" />
            <BeakerIcon />
            Navbar
        </ContainerNavbar>
    )
}
