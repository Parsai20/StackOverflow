import React from 'react'
import "./Header.css"
import SearchIcon from '@mui/icons-material/Search';
import Avatar from '@mui/material/Avatar';

function Index() {
  return (
    <header>
    <div className="header-container">

      <div className="header-left">
        <img src="https://www.vectorlogo.zone/logos/stackoverflow/stackoverflow-official.svg" alt="" />        
        <h3>Products</h3>
      </div>

      <div className="header-middle">
        <div className="header-search-container">
          <SearchIcon/>
          <input type="text" placeholder="Search..." />
        </div>
      </div>

      <div className="header-right">
        <div className="header-right-container">
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </div>
      </div>
    </div>
    </header>
  )
}

export default Index