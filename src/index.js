import React from "react";
import ReactDOM from "react-dom";

import css from "./index.css";

const Index = () => {
  return <div className={css.app}>Chef salad! Yummy yummy!</div>;
};

ReactDOM.render(<Index />, document.getElementById("app"));
