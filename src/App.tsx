import "./App.css";
import AccessLogs from "./Views/AccessLogs";
import Home from "./Views/Home";

import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
          <Route path="/">
            <Route index element={<Home/>}></Route>
            <Route path="accessLogs" element={<AccessLogs/>}></Route>
          </Route>
        </Routes>
    </Router>
  );
}

export default App;
