import { ContainerNavbar } from "./Navbar.styled"
import { shopping-cart} from "@heroicons/react/outline"

export const Navbar = () => {
    return (
        <ContainerNavbar>
            <img src="logo.png" />
            <shopping-cart />
            Navbar
        </ContainerNavbar>
    )
}
