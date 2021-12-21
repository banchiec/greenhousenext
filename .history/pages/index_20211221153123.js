import { useSession, signIn, signOut } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import { Navbar } from '../components/Navbar/Navbar'



export default function Home() {

  const { data: session } = useSession()
  return (
    <div>
      <Navbar />
      {console.log(session.user)}
    </div>
  )
}

