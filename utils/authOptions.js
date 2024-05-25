import GoogleProvider from 'next-auth/providers/google'


export const authOptions = () => {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            authorization: {
                params: { access_type: 'offline', prompt: 'consent', response_type: 'code' },
            }
        }),
    ],
    callbacks: {
        //Invoked on successful sign in.
        async signIn( { profile }) {
            //1. Connect to Database
            //2. Check if user exists
            //3. If user does not exist, add user to database
            //4. Return true to allow the sign in
        }, 
        //Modifies the session object
        async session({ session }) {
            //1. Get user from database
            //2. Assign user-id to session
            //3. return session
        },
    },
  
};

