import Image from "next/image"
import { Inter } from "next/font/google"
import Layout from "@JCKConsultant/components/sites/Layout"

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
	return (
		<Layout>
			<p>Hello, world</p>
		</Layout>
	)
}
