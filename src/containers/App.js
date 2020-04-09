import React, { Component } from "react";
import "tachyons";
import Form from "../components/Form";
import ImageDisplay from "../components/ImageDisplay";
import Loader from "../components/Loader";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
class App extends Component {
  constructor() {
    super();
    this.state = {
      type: "",
      url: "https://www.robohash.org/1",
      name: "",
      loading: false,
    };
  }

  clicked = (event) => {
    let new_url = "https://www.robohash.org/".concat(this.state.name);
    if (this.state.type.localeCompare("cat") === 0) {
      new_url = new_url.concat("/set_set4");
    } else if (this.state.type.localeCompare("monster") === 0) {
      new_url = new_url.concat("/set_set2");
    } else if (this.state.type.localeCompare("heads") === 0) {
      new_url = new_url.concat("/set_set3");
    } else if (this.state.type.localeCompare("human") === 0) {
      new_url = new_url.concat("/set_set5");
    }
    URL.revokeObjectURL(this.state.url);
    this.setState({ url: new_url, loading: true });
    fetch(new_url)
      .then((response) => response.blob())
      .then((blobData) => {
        let fetchedUrl = URL.createObjectURL(blobData);
        this.setState({ loading: false, url: fetchedUrl });
      });
  };

  selectionChange = (e) => {
    this.setState({ type: e.target.value });
  };

  textChanged = (e) => {
    this.setState({ name: e.target.value });
  };
  render() {
    const loading = this.state.loading;

    //console.log(this.state.loading);
    return (
      <div className="container tc w-50">
        <div className="row">
          <div className="col-md-12">
            <h1 className="f2 avatar mt4">MakeMyAvatar</h1>
            <p
              style={{
                color: "#A31621",
                fontFamily: "Fanwood Text, serif",
                fontSize: "18px",
                fontStyle: "italic",
                fontWeight: "bold",
                paddingTop: "5px",
              }}
            >
              Ever wondered how would your name affect your AVATAR image?
              Well...check it out yourself! ;)
            </p>
          </div>
        </div>
        <div className="row">
          <div className="fl w-50 pa2 tc">
            {loading ? <Loader /> : <ImageDisplay url={this.state.url} />}
          </div>
          <div className="fl w-50 pa2 tc">
            <Form
              clicked={this.clicked}
              selectedChange={this.selectionChange}
              textChange={this.textChanged}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <span className="tc" style={{ fontFamily: "Monotype Corsiva" }}>
              Robots lovingly delivered by{" "}
              <a style={{ color: "yellow" }} href="https://www.robohash.org">
                Robohash.org
              </a>
            </span>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
