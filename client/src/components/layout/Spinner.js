import React, { Fragment } from "react";
import spinner from "./loader.gif";

export default () => (
  <Fragment>
    <img
      src={spinner}
      style={{
        height: "80px",
        width: "80px",
        margin: "auto",
        display: "block",
      }}
      alt="Loading..."
    />
  </Fragment>
);
