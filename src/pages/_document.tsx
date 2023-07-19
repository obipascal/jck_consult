import { Html, Head, Main, NextScript } from "next/document"

export default function Document() {
	return (
		<Html lang="en">
			<Head />
			<body className="scroll-smooth dark:bg-light-bg dark:text-dark-text bg-light-bg text-light-text">
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}
