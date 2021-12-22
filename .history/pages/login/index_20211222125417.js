import { useSession } from "next-auth/react"
export default function Login({ currentSession }) {
    const { data: session } = useSession()
    console.log(currentSession)
    return (
        <div>
            <h1>login</h1>
        </div>
    )
}

Login.getInitialProps = async (context) => {

    const { data: session } = useSession()
    return {
        currentSession: await session?.user,
    }

}