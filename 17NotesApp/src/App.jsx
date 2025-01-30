import React from 'react'
import { useState } from 'react'

function App() {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [notes, setNotes] = useState([]);
  const [editIndex, setEditIndex] = useState(null)


  const handleSubmit = () => {

    if (title.trim() === "" || description.trim() === "") return ;

    if (editIndex !== null) {
      const updatedNote = notes.map((note, index) =>
        index === editIndex ? {title, description} : note
    );
    setNotes(updatedNote);
    setEditIndex(null);
    }else{

    setNotes([...notes, {title, description}])
    }
  }



  const handleDeleteNote = (index) => {
    const newNotes = notes.filter((_, notesindex) => (index !== notesindex))
      setNotes(newNotes)
  }

  const handleEditNote = (index) => {
    setTitle(notes[index].title);
    setDescription(notes[index].description);
    setEditIndex(index)
  }


  return (
    <>
    <div className='bg-gray-800 h-screen'>

    <input 
    type="text" 
    value={title}
    placeholder="Add Note Title"
    onChange={(e) => setTitle(e.target.value)}
    />

    <input 
    type="text" 
    value={description}
    placeholder="Add Note Description"
    onChange={(e) => setDescription(e.target.value)}
    />

    <button onClick={handleSubmit}>
      {editIndex !== null ? "Update Note" : "Add Note"}
    </button>

    <ul>
      {notes.map((note, index) => (
        <li key = {index}> {note.title} <br /> {note.description}

          <br />
        <button onClick={() => handleEditNote(index)}>
        Edit Note
        </button>


        <button onClick={() => handleDeleteNote(index)}>
          Delete
        </button>
        

        </li>
      )
    )}
    </ul>
    </div>
    </>
    
  )
}

export default App