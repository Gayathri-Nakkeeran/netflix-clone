import NextAuth , {Account , DefaultSession, User , Session } from "next-auth";
import { JWT } from "next-auth/jwt"
import GithubProvider from 'next-auth/providers/github'
import GoogleProvider from 'next-auth/providers/google'
declare module "next-auth" {
    interface Session {
       user:{username:string , email:string , uid:string},

    }
}
const authOptions = {
    providers: [
        GoogleProvider({
            clientId: "359127261477-dof3mj7cc4fl1e8uiu1381jkujqbog6f.apps.googleusercontent.com", // 'Your Google Client ID'
            clientSecret: "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", //  'Your Google Client SECRET'
        }),
    ],
    callbacks: {
        async session({ session, token, user }: {session: Session, token: JWT, user: User}): Promise<Session> {
            session.user.username = session?.user?.email
                .split(" ")
                .join("")
                .toLocaleLowerCase();
            if(token.sub)
            session.user.uid = token.sub;

            return session;
        },
    },
    secret: "default_secret_key",
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
