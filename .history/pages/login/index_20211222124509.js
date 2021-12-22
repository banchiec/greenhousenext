import { useSession } from "next-auth/react"
export default function Login(useSession) {
    const { data: session } = useSession()
    return (
        <div>
            <h1>login</h1>
        </div>
    )
}
