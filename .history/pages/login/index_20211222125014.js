import { useSession } from "next-auth/react"
export default function Login({ provider }) {
    const { data: session } = useSession()
    console.log(session)
    return (
        <div>
            <h1>login</h1>
        </div>
    )
}

Login.getInitialProps = async () => {
    return {
        provider: "pepe",
        session: "Pipo"
    }

}