import { useMutation } from '@apollo/client';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { UPDATE_NOTE } from '../App';
import { NoteDialogItem, NoteInterface } from '../types';

const EditDialog: React.FC<NoteDialogItem> = ({ note, open, setOpen }) => {
	
	const [updatedNote, setUpdatedNote] = useState<NoteInterface>({id: note.id, text: note.text});
	const [editNote] = useMutation(UPDATE_NOTE);

	const handleClose = () => {
		setOpen(false);
	}

	useEffect(() => {
		setUpdatedNote(
			{
				id: note.id, 
				text: note.text
			}
		)
	}, [note])

	const handleCloseSave = () => {
		setUpdatedNote(
			{
				id: updatedNote.id, 
				text: updatedNote.text
			}
		)
		editNote({ variables: { id: updatedNote.id, text: updatedNote.text} })
		handleClose()
	}

	return (
		<Dialog open={open} onClose={handleClose}>
		<DialogTitle>Change Note</DialogTitle>
		<DialogContent>
				<TextField
						autoFocus
						margin="dense"
						id="note"
						label="Enter note"
						type="text"
						placeholder=""
						fullWidth
						variant="standard"
						value={updatedNote.text}
						onChange={(e) => {
							setUpdatedNote({id: updatedNote.id, text: e.target.value})
						}}
				/>
		</DialogContent>
		<DialogActions>
				<Button autoFocus onClick={handleClose}>Cancel</Button>
				<Button autoFocus onClick={handleCloseSave}>Save</Button>
		</DialogActions>
		</Dialog>
	)
}

export default EditDialog