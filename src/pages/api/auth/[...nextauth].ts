import NextAuth, { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import { http_client } from "@JCKConsultant/configs/api"
import { AuthorizeDashboardAccess } from "@JCKConsultant/services/auth/auth.apis"
import { FetchAccount } from "@JCKConsultant/services/account/account.apis"

export const authOptions: NextAuthOptions = {
	session: {
		strategy: "jwt"
	},

	providers: [
		CredentialsProvider({
			type: "credentials",
			credentials: {},
			async authorize(credentials, req) {
				/* make api call here to fetch  */
				const res: any = await AuthorizeDashboardAccess(credentials)

				if (res?.status) {
					return { ...res?.data }
				}

				if (res?.data) {
					throw new Error(res?.data?.join(" "))
				}

				throw new Error(res?.message)
			}
		})
	],
	pages: {
		signIn: "/login",
		error: "/login",
		signOut: "/login"
	},
	callbacks: {
		async jwt({ token, user, profile }) {
			if (user) {
				token.profile = user
			}
			return token
		},
		async session({ session, user, token }) {
			// @ts-ignore
			if (token?.profile) {
				try {
					http_client.interceptors.request.use(async (configs: any) => {
						// check if authorization token is in session

						const url = configs?.url?.split(":")
						if (url) {
							/* only add authorization header when access level for that 
							resource is protected */
							const isProtected = url[0]
							const path = url[1]

							if (isProtected === "protected") {
								if (typeof configs?.headers != "undefined") {
									// @ts-ignore
									configs.headers.Authorization = `Bearer ${token?.profile?.api_token}`
								}
							}

							if (path) configs.url = path
						}

						return configs
					})

					// @ts-ignore
					const response = await FetchAccount(token?.profile?.user_id)

					if (response?.status) {
						// @ts-ignore
						session.profile = response?.data
					}
					// @ts-ignore
					else session.profile = token?.profile
				} catch (error) {
					// @ts-ignore
					session.profile = token?.profile
				}
			}

			return session
		}
	},
	secret: process.env.JWT_SECRET
}

export default NextAuth(authOptions)
