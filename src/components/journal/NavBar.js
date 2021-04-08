import React from 'react'

const NavBar = () => {
  return (
    <div className="journal__navbar">
      <div className="navbar__left">
        <i class="fas fa-bars fa-lg navbar__bar"></i>
        <h1 className="navbar__title">JournalApp</h1>
      </div>
      <div className="navbar__right">
        <button
          className="btn-logout"
        >
          Logout
        </button>
      </div>
    </div>
  )
}

export default NavBar
