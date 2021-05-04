import React, { useState } from "react";
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';
import PlusOneIcon from '@material-ui/icons/PlusOne';



function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  const [isExpaded, setIsExpanded] = useState(false)

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  function handleClick() {
    setIsExpanded(true);
  }

  return (
    <div>
      <form className="create-note">
      { isExpaded && <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        />}
        
        <textarea
          name="content"
          onClick={handleClick}
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={ isExpaded ? 3 : 1 }
        />
        <Zoom in={isExpaded}>
          <Fab onClick={submitNote}>
            <PlusOneIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
