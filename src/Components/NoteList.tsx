import React, { useEffect, useRef, useState } from 'react';
import { useQuery } from '@apollo/client';
import { Box, Divider, List } from '@mui/material';
import { NOTES_QUERY_DESC } from '../App';
import { NoteInterface } from '../types';
import EditDialog from './EditDialog';
import NoteItem from './NoteItem';

const NoteList = () => {
	const [noteToUpdate, setNoteToUpdate] = useState<NoteInterface>({id: "0", text: ""})
	const [open, setOpen] = useState(false);
	const { error, data, loading } = useQuery(NOTES_QUERY_DESC, {pollInterval: 500})
	const isFirstRender = useRef(true);

	useEffect(() => {
		if (isFirstRender.current) {
			isFirstRender.current = false // toggle flag after first render/mounting
			return;
		}
		setOpen(true)
 	}, [noteToUpdate]);

	if (loading) return <p>Loading...</p>;
  
	if (error) {
		return (<p>Error :(</p>);
	}

	const mutableData = JSON.parse(JSON.stringify(data))

	const selectNoteToUpdate = (noteID: string) => {
		setNoteToUpdate({
			id: noteID, 
			text: mutableData.notes.find((note: NoteInterface) => note.id === noteID).text
		})
	}

	return (
	<Box sx={{ paddingTop: "10px"}}>
		<nav aria-label="secondary mailbox folders">
			<List>
				{mutableData.notes.map((note : NoteInterface) => (
					<NoteItem key={note.id} note={note} updateSelection={selectNoteToUpdate}/>
				))}
				<EditDialog note={noteToUpdate} open={open} setOpen={setOpen}/>
				<Divider variant="middle" component="li" />
			</List>
		</nav>
	</Box>
	)
}

export default NoteList