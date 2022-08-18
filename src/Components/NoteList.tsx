import { useMutation, useQuery } from '@apollo/client';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Divider, List, ListItem, ListItemButton, ListItemText, TextField } from '@mui/material';
import { Stack } from '@mui/system';
import React, { useEffect, useRef, useState } from 'react';
import { UPDATE_NOTE, NOTES_QUERY } from '../App';
import { NoteInterface } from '../types';

const NoteList = () => {
	const [updatedNote, setUpdatedNote] = useState<NoteInterface>({id: "0", text: ""});
	const { error, data, loading } = useQuery(NOTES_QUERY, {pollInterval: 500})
	const [editNote] = useMutation(UPDATE_NOTE);
	const [open, setOpen] = useState(false);

	if (loading) return <p>Loading...</p>;
  
	if (error) {
		return (<p>Error :(</p>);
	}


	const mutableData = JSON.parse(JSON.stringify(data))
	const sortedData = mutableData.notes.reverse()

	const editClick = (noteID: string) => {
		setUpdatedNote({
			id: noteID, 
			text: sortedData.find((note: NoteInterface) => note.id === noteID).text
		})
		console.log(updatedNote)
		setOpen(true);
	}

	const handleClose = () => {
		setOpen(false);
	}

	const handleCloseSave = () => {
		setUpdatedNote(
			{
				id: updatedNote.id, 
				text: sortedData.find((note: NoteInterface) => note.id === updatedNote.id).text
			}
		)
		editNote({ variables: { id: updatedNote.id, text: updatedNote.text} })
		setOpen(false);
	}


	return (
	<Box sx={{ paddingTop: "10px"}}>
		<nav aria-label="secondary mailbox folders">
			<List>
					{sortedData.map((note : NoteInterface) => (
						<div key={note.id}>
							<Divider variant="middle" component="li" />
							<ListItem>
								<ListItemButton>
									<Box sx={{ width: '80%', maxWidth: '80%vw' }}>
										<ListItemText 
											primary={note.text.substring(0, 180)}
											secondary={note.id}
											sx={{ wordBreak: "break-all" }}
										/>
									</Box>
								</ListItemButton>
								<Stack direction="row" justifyContent="end">
									<Button variant="outlined" onClick={() => {
										editClick(note.id)
									}}>
										Edit
									</Button>
								</Stack>
							</ListItem>
						</div>
						))}
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
						<Divider variant="middle" component="li" />
			</List>
		</nav>
	</Box>
	)
}

export default NoteList