import { useCallback, useState } from "react";
import { EditorView, keymap } from "@codemirror/view";
import { defaultKeymap } from "@codemirror/commands";
import { autocompletion } from "@codemirror/autocomplete";
import placeholders from "../../../utils/placeholder";
import autoCompleteList from "../../../utils/autoCompleteList";

import CodeMirror from "@uiw/react-codemirror";

const CustomInput = () => {
	const [inputFormula, setInputFormula] = useState("");
	const onChange = useCallback((val) => {
		setInputFormula(val);
	}, []);

	const baseTheme = EditorView.theme({
		"&.cm-editor, &.cm-focused": {
			outline: "none",
			padding: "8px",
			border: "1px solid rgb(241 245 249)",
			borderRadius: "6px",
		},
	});
	console.log(inputFormula);
	return (
		<CodeMirror
			value={inputFormula}
			basicSetup={{
				lineNumbers: false,
				highlightActiveLineGutter: false,
				foldGutter: false,
				dropCursor: false,
				allowMultipleSelections: false,
				indentOnInput: false,
				bracketMatching: false,
				closeBrackets: false,
				autocompletion: false,
				rectangularSelection: false,
				crosshairCursor: false,
				highlightActiveLine: false,
				highlightSelectionMatches: false,
				closeBracketsKeymap: false,
				searchKeymap: false,
				foldKeymap: false,
				completionKeymap: false,
				lintKeymap: false,
			}}
			extensions={[
				keymap.of(defaultKeymap),
				baseTheme,
				placeholders,
				autocompletion({
					override: [autoCompleteList],
				}),
			]}
			onChange={onChange}
		/>
	);
};

export default CustomInput;
