import React from 'react'

const JournalEntry = () => {
  return (
    <li className="journal__item">
      <div className="item__picture">
        <img 
          className="item__img"
          src="https://images.unsplash.com/photo-1522252234503-e356532cafd5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=625&q=80"
          alt="Imagen" 
        />
      </div>
      <div className="item__body">
        <h4 className="item__title">
          Titulo
        </h4>
        <p className="item__content">
          Lorem sdfasdf ewr asdf asdlkfj asdljf laksdjf alksdf
        </p>
      </div>
      <div className="item__date">
        <span className="item__month">Monday</span>
        <h4 className="item__day">20</h4>
      </div>
    </li>
  )
}

export default JournalEntry
