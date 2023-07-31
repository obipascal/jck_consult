import { Html, Head, Main, NextScript } from "next/document"

export default function Document() {
	return (
		<Html lang="en">
			<Head>
				{/* <!-- include summernote css/js --> */}
				<link href="https://cdn.jsdelivr.net/npm/summernote@0.8.18/dist/summernote.min.css" rel="stylesheet" />
			</Head>
			<body className="scroll-smooth dark:bg-light-bg dark:text-dark-text bg-light-bg text-light-text">
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}
