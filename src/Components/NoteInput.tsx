import React, { useEffect, useRef, useState } from 'react';
import { Box, Button, TextField } from "@mui/material";
import { NoteInputProps } from '../types';


const NoteInput: React.FC<NoteInputProps> = ( {saveNoteToDB} ) => {

	const [newNote, newNoteSetter] = useState<string>("");
	const textAreaRef = useRef<HTMLDivElement>(null)

	const changeNoteInput = (value: string) => {
		let length = 180
		newNoteSetter(value.substring(0, length));
  }

	useEffect(() => {
    console.log(textAreaRef.current);
  }, [textAreaRef]);

	const saveNote = () => {
		saveNoteToDB(newNote)
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
					ref={textAreaRef}
          label="Note Text"
          multiline
					placeholder="180 Characters Max"
          onChange={(e) => {
						let length = 180
						let trimmedNote = e.target.value.substring(0, length)
						e.target.value = trimmedNote
						changeNoteInput(trimmedNote)}
					}
        />
      </div>
			<Button variant="outlined" onClick={saveNote}>Add Note</Button>
    </Box>
  )
}

export default NoteInput