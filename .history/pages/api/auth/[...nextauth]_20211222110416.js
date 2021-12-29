import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'


export default NextAuth({
    providers: [

        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET,
            authorizationUrl:
                'https://accounts.google.com/o/oauth2/v2/auth?prompt=consent&access_type=offline&response_type=code',
        }),
    ],
    pages: {
        signIn: '/auth/login',
        signOut: '/auth/signout',
        error: '/auth/error', // Error code passed in query string as ?error=
        verifyRequest: '/auth/verify-request', // (used for check email message)
        newUser: '/auth/new-user' // New users will be directed here on first sign in (leave the property out if not of interest)
    },
    database: process.env.mongodburl,

})




