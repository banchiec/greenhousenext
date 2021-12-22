import { useSession } from "next-auth/react"
export default function Login({ data: session }) {
    const { data: session } = useSession()
    console.log(session)
    return (
        <div>
            <h1>login</h1>
        </div>
    )
}
