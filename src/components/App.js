import React from "react";
import "./App.css";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import TextEditor from "./TextEditor";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="main-body">
        <Header />
        <TextEditor />
        <Footer />
      </div>
    );
  }
}

export default App;
