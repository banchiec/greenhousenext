/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react"
import Link from 'next/link'
import { ContainerNavbar } from "./Navbar.styled"
import { ShoppingCartIcon } from "@heroicons/react/outline"
import { LoginIcon,LogoutIcon} from "@heroicons/react/outline"
import { useSession, signIn, signOut, getSession } from "next-auth/react"

export const Navbar = ({currentUser}) => {
    const { data: session, status, loading } = useSession()
    const [user, setUser] = useState({})
    const getUser = async () => {
        await setUser(session?.user)
    }
    useEffect(() => {
        getUser()
    }, [session?.user])
    return (
        <ContainerNavbar>
            <Link href={{
                   pathname : '/',
                }}>
                <img src="casaverdelogoLetter.png" alt="Imagen logo" />
            </Link>
            <div>
                {
                    !session?.user ?
                        <LoginIcon onClick={() => signIn()} />
                        : (
                            <div>
                                <Link href={{
                                    pathname : '/profile/',
                                    query : { emailUser: session?.user?.email}
                                }}
                                >
                                <img 
                                    src={session?.user?.image} 
                                    alt={session?.user?.name}
                                />
                                </Link>
                                <LogoutIcon onClick={()=>signOut()}/>
                            </div>
                        )}
                <ShoppingCartIcon />
            </div>
        </ContainerNavbar>
    )
}
Navbar.getInitialProps = async (context) => {
    return {
        currentSession: await getSession(context)
    }
}
