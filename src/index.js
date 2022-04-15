import { EditorState, EditorView, basicSetup } from "@codemirror/basic-setup";
import { javascript } from "@codemirror/lang-javascript";
import { defaultHighlightStyle } from "@codemirror/highlight"
import { bracketMatching } from "@codemirror/matchbrackets"
import { oneDark } from "@codemirror/theme-one-dark"

import "./styles.css"

let editorDiv = document.querySelector("#editor");

let initial_doc = `function hello(who = "world") {
  console.log(\`Hello, \${who}!\`)
}`;


let editor = new EditorView({
  state: EditorState.create({
    doc: initial_doc,
    extensions: [oneDark, basicSetup, javascript(), defaultHighlightStyle.fallback, bracketMatching()]
  }),
  parent: editorDiv
});