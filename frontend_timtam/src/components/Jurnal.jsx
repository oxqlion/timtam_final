import React, { useState } from "react";
import '../components/Jurnal.css'

const Jurnal = () => {
  const [notes, setNotes] = useState([]);
  const [currentNote, setCurrentNote] = useState({
    title: "",
    content: "",
  });

  function handleTitleChange(event) {
    setCurrentNote({
      ...currentNote,
      title: event.target.value,
    });
  }

  function handleContentChange(event) {
    setCurrentNote({
      ...currentNote,
      content: event.target.value,
    });
  }

  function handleSaveNote() {
    const newNote = {
      ...currentNote,
      date: new Date()
    };
    setNotes([newNote, ...notes]);
    setCurrentNote({
      title: '',
      content: ''
    });
  }

  function formatDate(date) {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('id-ID', options);
  }

  return (
    <div className="jurnal-outer">
      <div className="jurnal-input-container">
        <input
          className="jurnal-input"
          type="text"
          placeholder="Note Title"
          value={currentNote.title}
          onChange={handleTitleChange}
        />
        <textarea
          className="jurnal-textarea"
          placeholder="Note Content"
          value={currentNote.content}
          onChange={handleContentChange}
        ></textarea>
        <div className="jurnal-btn">
          <button onClick={handleSaveNote}>Save Note</button>
        </div>
      </div>
      <div className="jurnal-saved-outer">
        <div className="jurnal-saved-container">
          {notes.map((note, index) => (
            <div key={index} className="jurnal-card">
              <h1>{note.title}</h1>
              <p>{formatDate(note.date)}</p>
              <p>{note.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Jurnal;
