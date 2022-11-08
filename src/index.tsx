import React from "react";
import ReactDOM from "react-dom/client";
import "bulma/css/bulma.min.css";
import "./index.css";
import App from "./App";
import Header from "./Views/Header";
// import Footer from "./Views/Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    
    <Header/>
    <div className="section is-large is-fluid has-background-light">
      <App />
    </div>
    {/* <Footer/> */}
  </React.StrictMode>
);

