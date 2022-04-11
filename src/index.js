// To import packages:
// 1. Go to the `package.json` file, and click "Add Package"
// 2. In this file, import the package using the ES6 import syntax, like so:
import { EditorState, EditorView, basicSetup } from "@codemirror/basic-setup";
import { javascript } from "@codemirror/lang-javascript";

// Some example code, you can delete me!

let root = document.querySelector("#root");

let initial_doc = `function hello(who = "world") {
  console.log(\`Hello, \${who}!\`)
}`;

let editor = new EditorView({
  state: EditorState.create({
    doc: initial_doc,
    extensions: [basicSetup, javascript()]
  }),
  parent: root
});
