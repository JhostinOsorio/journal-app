import React from 'react'
import NavBar from './NavBar'
import NothingSelected from './NothingSelected'
import SideBar from './SideBar'

const JournalScreen = () => {
  return (
    <div className="journal__main-content">
      <SideBar />
      <div className="journal__right">
        <NavBar />
        <main className="journal__main">
          <NothingSelected />
        </main>
      </div>
    </div>
  )
}

export default JournalScreen
