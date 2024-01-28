import React from 'react';
import './App.css';
import Stackoverflow from "./components/Stackoverflow/Index";
import Header from "./components/Header/Index";
import AddQuestion from "./components/AddQuestion/Index";
import ViewQuestion from "./components/ViewQuestion/Index";
import Auth from "./components/Auth/Index";

import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/auth" Component={Auth} />
          {/* <Route exact path="/auth" element={<Auth />} /> */}
          <Route exact path="/" Component={Stackoverflow} />
          <Route exact path="/add-question" Component={AddQuestion} />
          <Route exact path="/question" Component={ViewQuestion} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
