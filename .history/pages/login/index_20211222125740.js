import { useSession } from "next-auth/react"
export default function Login() {
    const { data: session } = useSession()
    return (
        <div>
            <h1>login</h1>
        </div>
    )
}

Login.getInitialProps = async (context) => {
    return {
    }

}