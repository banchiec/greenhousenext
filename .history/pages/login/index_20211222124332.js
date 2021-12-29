export default function Login({ providers, session }) {
    console.log({ providers, session })
    return (
        <div>
            <h1>login</h1>
        </div>
    )
}

Login.getInitialProps = async (context) => {
    return {
        providers: await providers(context),
        session: await getSession(context)
    }
}
