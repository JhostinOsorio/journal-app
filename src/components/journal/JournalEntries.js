import React from 'react'
import JournalEntry from './JournalEntry';

const JournalEntries = () => {

  const entries = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

  return (
    <nav className="journal__nav">
      <ul className="journal__list">
        {entries.map(entry => (
          <JournalEntry key={entry} />
        ))}
      </ul>
    </nav>
  )
}

export default JournalEntries
