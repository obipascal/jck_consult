import { UserInterface } from "@JCKConsultant/types/user"
import { useSession } from "next-auth/react"

export const useUser = (): UserInterface => {
	const session: any = useSession()
	const User: UserInterface = session?.data?.profile

	return User
}
