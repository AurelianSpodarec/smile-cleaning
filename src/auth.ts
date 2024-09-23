import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
// import { authLoginByEmail, refreshToken } from "./services/apis/requests/auth"
import { parseCookies } from "./lib/utils"
// import { jwtDecode } from "jwt-decode"
// import { getUserprofile } from "./services/apis/requests/user"
import { authLogin, getUserProfile } from "./services/apis/requests/auth"

// function parseJwt (token) {
//   try {
//     return jwtDecode(token)
//   } catch (error) {
//     console.error("Failed to decode JWT", error)
//     return null
//   }
// }

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials, req) => {
        const { email, password } = credentials

        const res: any = await authLogin({
          email: "test@test.test",
          password: "password",
        })

        // if (!res) {
        //   throw new Error("User not found.")
        // }

        // const cookies = parseCookies(res.cookies)


        const user = res.user
        const accessToken = res.accessToken
        // const user = parseJwt(res.accessToken)

        console.log("WOOOO############", user)
        return {
          token: accessToken,
          // refresh: cookies,
          user: user
        }
      },
    }),
  ],
  callbacks: {
    async session({ token, session, user }) {
      // console.log({ sessionToken: token, session })
      // console.log("MMMMMMMMMMMMMMMMmmmm", token, session, user)

      // console.log("SESSIONNNNNNNNNNN", user)
      const existingUser = await getUserProfile()
      console.log("WOMOMOMOMOMOMOMOMO", existingUser)
      // console.log(parseCookies(existingUser))
      // console.log("exexe", existingUser)
      // session.user = existingUser || {};

      // if (token.sub && session.user) {
      //   session.user = session.user
      // }
      if(session.user) {
        session.user = token.user; 
      }
      return session
    },
    async jwt({ token, user }) {
      // const existingUser = await getUserProfile()
      // console.log("mmmmmmmmmm", existingUser)
      // console.log("toooookkk", token)
      console.log("woo", token)
      // const currentTime = Math.floor(Date.now() / 1000)
      // if (token?.exp && currentTime > token.exp) {
      // console.log("token expired", token, currentTime)
      // try {
      // const res = await refreshToken(token?.refresh)
      // const cookies = parseCookies(res.cookies)

      // const user = {
      //   token: res.accessToken,
      //   refresh: cookies.refresh
      // }

      return {
        ...token,
        ...user,
      }
      // } catch (error) {
      //   console.log("err", error)
      // }
    },
    async redirect({ url, baseUrl }) {
      return baseUrl
    },
  }
})
