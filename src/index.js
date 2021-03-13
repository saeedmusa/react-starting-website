import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";

///const firebaseConfig = {
// apiKey: "AIzaSyBVQIsEnW2lvJFo7d1WoyL3a11qSgXi3JA",
// authDomain: "react-51e62.firebaseapp.com",
// projectId: "react-51e62",
// storageBucket: "react-51e62.appspot.com",
// messagingSenderId: "388458815072",
// appId: "1:388458815072:web:ff7920508a4310b0182d05",
//};

// Initialize Firebase
//firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
