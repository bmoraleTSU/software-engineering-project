import "./App.css";
import AccessLogs from "./Views/AccessLogs";
import Home from "./Views/Home";
import ClientContacts from "./Views/ClientContacts";
import ClientInventories from "./Views/ClientInventories";

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
            <Route path="clientContacts" element={<ClientContacts/>}></Route>
            <Route path="clientInventories" element={<ClientInventories/>}></Route>
          </Route>
        </Routes>
    </Router>
  );
}

export default App;
