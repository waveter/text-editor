import React from "react";
import "./TextEditor.css";
// Require Editor JS files.
import "froala-editor/js/froala_editor.pkgd.min.js";
import "froala-editor/js/plugins.pkgd.min.js";
import "froala-editor/js/third_party/embedly.min.js";
import "froala-editor/js/plugins/fullscreen.min.js";

// Require Editor CSS files.
import "froala-editor/css/froala_style.min.css";
import "froala-editor/css/froala_editor.pkgd.min.css";
import "froala-editor/css/third_party/embedly.min.css";
import "froala-editor/css/plugins/fullscreen.min.css";

import Froala from "react-froala-wysiwyg";
import FroalaEditorView from "react-froala-wysiwyg/FroalaEditorView";

class TextEditor extends React.Component {
  constructor() {
    super();

    this.handleModelChange = this.handleModelChange.bind(this);

    this.state = {
      model: "<h1>Example text</h1>"
    };
  }

  handleModelChange(model) {
    console.log(model);
    this.setState({
      model: model
    });
  }

  render() {
    return (
      <div className="body-container">
        <Froala
          model={this.state.model}
          onModelChange={this.handleModelChange}
          tag="textarea"
          config={{
            attribution: false,
            placeholder: "Start typing...",
            toolbarButtons: {
              moreText: {
                buttons: [
                  "bold",
                  "italic",
                  "underline",
                  "strikeThrough",
                  "subscript",
                  "superscript",
                  "fontFamily",
                  "fontSize",
                  "textColor",
                  "backgroundColor",
                  "inlineClass",
                  "inlineStyle",
                  "clearFormatting"
                ],
                buttonsVisible: 5
              },
              moreParagraph: {
                buttons: [
                  "alignLeft",
                  "alignCenter",
                  "formatOLSimple",
                  "alignRight",
                  "alignJustify",
                  "formatOL",
                  "formatUL",
                  "paragraphFormat",
                  "paragraphStyle",
                  "lineHeight",
                  "outdent",
                  "indent",
                  "quote"
                ],
                buttonsVisible: 5
              },
              moreRich: {
                buttons: [
                  "insertLink",
                  "insertImage",
                  "insertVideo",
                  "insertTable",
                  "emoticons",
                  "fontAwesome",
                  "specialCharacters",
                  "embedly",
                  "insertFile",
                  "insertHR"
                ],
                buttonsVisible: 5
              },
              moreMisc: {
                buttons: [
                  "undo",
                  "redo",
                  "fullscreen",
                  "print",
                  "getPDF",
                  "spellChecker",
                  "selectAll",
                  "html",
                  "help"
                ],
                align: "right",
                buttonsVisible: 5
              }
            },
            pluginsEnabled: [
              "table",
              "spell",
              "quote",
              "save",
              "quickInsert",
              "paragraphFormat",
              "paragraphStyle",
              "help",
              "draggable",
              "align",
              "link",
              "lists",
              "file",
              "image",
              "emoticons",
              "url",
              "video",
              "embedly",
              "colors",
              "entities",
              "inlineClass",
              "inlineStyle",
              // 'codeBeautif '
              // 'spellChecker',
              "imageTUI"
            ]
          }}
        />
      </div>
    );
  }
}

export default TextEditor;
