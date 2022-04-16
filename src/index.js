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

const fontTheme = EditorView.theme({
  "&": {
    fontSize: "10.5pt",
  },
  ".cm-content": {
    fontFamily: "Menlo, Monaco, Lucida Console, monospace"
  }
});

let editor = new EditorView({
  state: EditorState.create({
    doc: initial_doc,
    extensions: [ oneDark, fontTheme, basicSetup, javascript(), defaultHighlightStyle.fallback, bracketMatching()]
  }),
  parent: editorDiv
});



