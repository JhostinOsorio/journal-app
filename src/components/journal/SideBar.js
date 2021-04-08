import React from 'react'
import JournalEntries from './JournalEntries'

const SideBar = () => {
  return (
    <aside className="journal__aside">
        <header className="aside__header">
          <i className="fas fa-user-circle fa-5x"></i>
          <h3 className="aside__title">Jhostin Osorio</h3>
        </header>
        <div className="aside__button">
          <button className="btn-entry">
            <i className="far fa-calendar-plus"></i>
            <span className="btn-entry__text">Nueva Nota</span>
          </button>
        </div>
        <JournalEntries />
      <div className="aside-navbar">
      </div>
    </aside>
  )
}

export default SideBar
