import React, { useRef, useState } from 'react';
import { Box, Button, TextField } from "@mui/material";
import { useMutation } from '@apollo/client';
import { ADD_NOTE } from '../App';

const NoteInput = () => {

	const [newNote, newNoteSetter] = useState<string>("");
	const textAreaRef = useRef<HTMLTextAreaElement>(null)

  const [addNote, { error }] = useMutation(ADD_NOTE);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let length = 180
    let limitedText = event.target.value.substring(0, length)
    // Used `limitedText` as newNote is updates async
		newNoteSetter(limitedText);
    if (textAreaRef.current !== null) textAreaRef.current.value = limitedText
  };

	const saveNote = () => {
    if (textAreaRef.current !== null) {
      addNote({ variables: { text: newNote } });
      if (error) alert("Something went wrong :( " + error)
      textAreaRef.current.value = ""
    }
	}

  return (
		<Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id="outlined-multiline-flexible"
					inputRef={textAreaRef}
          label="Note Text"
          multiline
					placeholder="180 Characters Max"
          onChange={handleChange}
        />
      </div>
			<Button variant="outlined" onClick={saveNote}>Add Note</Button>
    </Box>
  )
}

export default NoteInput