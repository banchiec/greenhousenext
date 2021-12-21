import Image from 'next/image'
import Link from 'next/link'
import { useSession, signIn, signOut } from "next-auth/react"
import { Navbar } from '../components/Navbar/Navbar'



export default function Home() {

  return (
    <>
      <Navbar />
      <h1>Hola</h1>
    </>
  )
}

