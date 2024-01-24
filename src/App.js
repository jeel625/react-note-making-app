import './App.css';
import React, { useEffect } from "react";
import Sidebar from './Sidebar';
import { useState, } from 'react';
import Main from './Main';
import uuid from "react-uuid";

function App() {

  const [ notes, setNotes ] = useState(JSON.parse(localStorage.notes) || []);

  const [activeNote,setActiveNote] = useState(false);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes))
  },[notes])

  const onAddNote = () => {
      const newNote = {
        id : uuid(),
        title: "Untitled",
        body: "",
        lastModified:Date.now(),
      };

      setNotes([newNote,...notes]);
  };

  const onDeleteNote = (id) => {
    setNotes(notes.filter( item => item.id !== id));
  }

  const getActiveNote = () => { 
    return notes.find((note) => note.id === activeNote);
   }

   const onUpdateNote = (updatedNote) => {
    const updatedNotesArray = notes.map((note) => {
      if( note.id === activeNote){
        return updatedNote;
      }
      return note;
    });

    setNotes(updatedNotesArray);
   }

   return (
    <div className="App">
        <Sidebar notes={notes} 
                 onAddNote={onAddNote} 
                 onDeleteNote={onDeleteNote} 
                 activeNote={activeNote}
                 setActiveNote={setActiveNote}
                 />
        <Main activeNote={getActiveNote()} onUpdateNote={onUpdateNote} />
    </div>
  );
}

export default App;
