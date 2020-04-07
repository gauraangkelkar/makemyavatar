import React, { Fragment } from "react";
import "./Forms.css";

const Form = (props) => {
  return (
    <Fragment>
      <div className="tl pt2">
        <span className="tl f3">Enter your name:</span>
        <input
          className="f4 inputbox"
          style={{ width: "100%" }}
          type="text"
          placeholder="e.g. Gauraang Kelkar"
          onChange={props.textChange}
        />
        <br />
        <br />
        <span className="tl f3">Select the type:</span>
        <br />
        <input
          type="radio"
          value="cat"
          name="type"
          onChange={props.selectedChange}
        />
        <span className="radiotext">Cat </span> <br />
        <input
          type="radio"
          value="heads"
          name="type"
          onChange={props.selectedChange}
        />
        <span className="radiotext">Disembodied Heads</span> <br />
        <input
          type="radio"
          value="human"
          name="type"
          onChange={props.selectedChange}
        />
        <span className="radiotext">Human</span> <br />
        <input
          type="radio"
          value="monster"
          name="type"
          onChange={props.selectedChange}
        />
        <span className="radiotext">Monster</span> <br />
        <input
          type="radio"
          id="robot"
          value="robot"
          name="type"
          onChange={props.selectedChange}
        />
        <span className="radiotext">Robot</span>
        <br />
        <br />
        <button
          className="btn btn-primary"
          value="Submit"
          onClick={props.clicked}
        >
          Make It!
        </button>
      </div>
      <div className=""></div>
    </Fragment>
  );
};

export default Form;
