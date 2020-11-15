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

import "font-awesome/css/font-awesome.min.css";

import Froala from "froala-editor";
import FroalaEditor from "react-froala-wysiwyg";

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

  handleUploadFile() {}

  handleDownloadFile() {}

  render() {
    Froala.DefineIcon("upload", {
      FA5NAME: "upload",
      template: "font_awesome_5r"
    });
    Froala.RegisterCommand("upload", {
      title: "Upload",
      icon: "upload",
      focus: true,
      undo: false,
      refreshAfterCallback: true,
      callback: () => {
        this.handleUploadFile();
      }
    });
    Froala.DefineIcon("download", {
      FA5NAME: "download",
      template: "font_awesome_5r"
    });
    Froala.RegisterCommand("download", {
      title: "Download",
      icon: "download",
      focus: true,
      undo: false,
      refreshAfterCallback: true,
      callback: () => {
        this.handleDownloadFile();
      }
    });
    return (
      <div className="body-container">
        <FroalaEditor
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
                  "fontFamily",
                  "fontSize",
                  "textColor",
                  "backgroundColor",
                  "subscript",
                  "superscript",
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
                buttonsVisible: 6
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
                buttonsVisible: 6
              },
              moreMisc: {
                buttons: [
                  "undo",
                  "redo",
                  "upload",
                  "download",
                  "fullscreen",
                  "print",
                  "getPDF",
                  "spellChecker",
                  "selectAll",
                  "html",
                  "help"
                ],
                align: "right",
                buttonsVisible: 4
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
