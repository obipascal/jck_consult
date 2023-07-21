import React, { useRef } from "react"
import { Editor } from "@tinymce/tinymce-react"
import { Editor as EDITOR } from "@tinymce/tinymce-react/lib/cjs/main/ts/components/Editor"

type WYSIWYGEditorProps = {
	/**
	 * Get the content of the editor.
	 * @param content The editor contents
	 */
	getContents?: (content: string) => string
	onChange?: any
	inputName?: string
	value?: string
}

export default function WYSIWYGEditor({ getContents, onChange, value, inputName = "course_content" }: WYSIWYGEditorProps) {
	return (
		<>
			<Editor
				onChange={typeof onChange === "function" ? onChange : null}
				apiKey={process.env.TINY_APIKEY}
				textareaName={inputName}
				onInit={(evt, editor) => (typeof getContents === "function" ? getContents(editor.getContent()) : "")}
				initialValue={value ? value : ""}
				init={{
					height: 200,
					menubar: false,
					plugins: ["advlist", "lists", "link", "fullscreen", "table", "help", "wordcount"],
					toolbar:
						"undo redo | casechange blocks | bold italic backcolor | " +
						"alignleft aligncenter alignright alignjustify | " +
						"bullist numlist checklist outdent indent | removeformat | a11ycheck code table help",
					content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }"
				}}
			/>
		</>
	)
}
