import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./style/style.css";

import * as serviceWorker from "./serviceWorker";

const mountNode = document.getElementById("root");

ReactDOM.render(<App />, mountNode);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
