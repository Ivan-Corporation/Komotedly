import React from 'react';
import { Link } from 'react-router-dom';



import Note from './Note';

const NoteFeed = ({ notes }) => {
  return (
    <div className="note-feed" style={{marginTop:'55px'}}>
      {notes.map(note => (
        <div key={note.id}>
          <Note note={note} />
          
        </div>
      ))}
    </div>
  );
};

export default NoteFeed;
