import React from "react";
import "./TextEditor.css";

import "font-awesome/css/font-awesome.min.css";

import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';

class TextEditor extends React.Component {
    constructor() {
        super();

        this.handleModelChange = this.handleModelChange.bind(this);
        this.handleUploadFile = this.handleUploadFile.bind(this);
        this.handleDownloadFile = this.handleDownloadFile.bind(this);
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

    handleUploadFile(e) {
        const reader = new FileReader();
        reader.onload = e => {
            this.setState({
                model: e.target.result
            });
        };
        reader.readAsText(e.target.files[0]);
    }

    handleDownloadFile() {
        this.saveFile("download.html", this.state.model);
    }

    saveFile(fileName, content) {
        const blob = new Blob([content], { type: "text/plain" });
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.download = fileName;
        link.href = url;
        link.click();
    }

    handleOpenUploadFile() {
        document.getElementById("file").click();
    }

    render() {
        const CustomToolbar = () => (
            <div id="toolbar">
                <span className="ql-formats">
                    <select className="ql-header" defaultValue={""} onChange={e => e.persist()}>
                        <option value="1"></option>
                        <option value="2"></option>
                        <option selected></option>
                    </select>
                </span>
                <span className="ql-formats">
                    <button className="ql-bold"></button>
                    <button className="ql-italic"></button>
                    <button className="ql-underline"></button>
                    <button className="ql-strike"></button>
                </span>
                <span className="ql-formats">
                    <button className="ql-blockquote"></button>
                    <select className="ql-color">
                        <option value="red"></option>
                        <option value="green"></option>
                        <option value="blue"></option>
                        <option value="orange"></option>
                        <option value="violet"></option>
                        <option value="#d0d1d2"></option>
                        <option selected></option>
                    </select>
                    <button className="ql-insertStar">
                        <span className="fa fa-plus" />
                    </button>
                </span>
            </div >
        );
        function insertStar() {
            const cursorPosition = this.quill.getSelection().index
            this.quill.insertText(cursorPosition, "★")
            this.quill.setSelection(cursorPosition + 1)
        }
        const formats = [
            "header",
            "font",
            "size",
            "bold",
            "italic",
            "underline",
            "strike",
            "blockquote",
            "list",
            "bullet",
            "indent",
            "link",
            "image",
            "color"
        ];

        const modules = {
            toolbar: {
                container: "#toolbar",
                handlers: {
                    insertStar: insertStar
                }
            },
            clipboard: {
                matchVisual: false,
            }
        };
        return (
            <div className="body-container">
                <input
                    type="file"
                    id="file"
                    style={{ display: "none" }}
                    onChange={e => this.handleUploadFile(e)}
                />
                <CustomToolbar />
                <ReactQuill modules={modules} formats={formats} value={this.state.model}
                    onChange={this.handleModelChange} />
            </div>
        );
    }
}

export default TextEditor;
