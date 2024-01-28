import React from 'react';
import Sidebar from "./Sidebar";
import Main from "./Main";
import "./css/Index.css";

function Index() {
  return (
    <div className="stack-index">
    <div className="stack-index-content">
      <Sidebar />
      <Main />
    </div>
  </div>
  )
}

export default Index