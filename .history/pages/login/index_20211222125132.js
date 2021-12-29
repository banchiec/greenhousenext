import { useSession } from "next-auth/react"
export default function Login({ session }) {
    const { data: session } = useSession()
    console.log(session)
    return (
        <div>
            <h1>login</h1>
        </div>
    )
}

Login.getInitialProps = async (context) => {

    const { data: session } = useSession()
    return {
        provider: await session,
        session: "Pipo"
    }

}