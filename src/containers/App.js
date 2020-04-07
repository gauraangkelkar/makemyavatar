import React, { Component } from "react";
import "tachyons";
import Form from "../components/Form";
import ImageDisplay from "../components/ImageDisplay";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
class App extends Component {
  constructor() {
    super();
    this.state = {
      type: "",
      url: "https://www.robohash.org/1",
      name: "",
    };
  }

  clicked = (event) => {
    let new_url = "https://www.robohash.org/".concat(this.state.name);
    //console.log(this.state.type);
    //console.log(this.state.type.localeCompare("monster"));
    if (this.state.type.localeCompare("cat") === 0) {
      new_url = new_url.concat("/set_set4");
    } else if (this.state.type.localeCompare("monster") === 0) {
      new_url = new_url.concat("/set_set2");
    } else if (this.state.type.localeCompare("heads") === 0) {
      new_url = new_url.concat("/set_set3");
    } else if (this.state.type.localeCompare("human") === 0) {
      new_url = new_url.concat("/set_set5");
    }
    this.setState({ url: new_url });
  };

  selectionChange = (e) => {
    this.setState({ type: e.target.value });
  };

  textChanged = (e) => {
    this.setState({ name: e.target.value });
  };
  render() {
    return (
      <div className="container tc w-50">
        <div className="row">
          <div className="col-md-12">
            <h1 className="f2 avatar mt4">MakeMyAvatar</h1>
          </div>
        </div>
        <div className="row">
          <div className="fl w-50 pa2 tc">
            <ImageDisplay url={this.state.url} />
          </div>
          <div className="fl w-50 pa2 tc">
            <Form
              clicked={this.clicked}
              selectedChange={this.selectionChange}
              textChange={this.textChanged}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
