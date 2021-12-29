import { useSession, signIn } from "next-auth/react"

export default function Login() {
    const { data: session } = useSession()
    console.log(session)
    if (session) return null
    return (
        <div>
            <h1>login</h1>
            <button onClick={() => signIn()}>login</button>
        </div>
    )
}

Login.getInitialProps = async (context) => {
    return {
    }

}