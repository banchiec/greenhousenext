import { useSession, signIn, signOut } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import { Navbar } from '../components/Navbar/Navbar'
import { existUser } from '../utils/user.utils'

export default function Home() {

  const { data: session } = useSession()
  existUser(session?.user?.email)

  return (
    <div>
      {
        console.log(session?.user)
      }
      <Navbar />
    </div>
  )
}

