import { useQuery } from '@apollo/client';
import { Box, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import React from 'react';
import { NOTES_QUERY } from '../App';
import { NotesListManager } from '../types';

const NoteList: React.FC<NotesListManager> = ( props ) => {

	const { loading, error, data } = useQuery(NOTES_QUERY)
	if (loading) return <p>Loading...</p>;
  if (error) {
		console.log(data)
		console.log(error)
		return (<p>Error :(</p>)
	}

	return (
	<Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
		<nav aria-label="secondary mailbox folders">
			<List>
				<ListItem disablePadding>
					<ListItemButton>
						{data.map(() => (
							<ListItemText key={data.text} primary={data.text} />
						))}
					</ListItemButton>
				</ListItem>
			</List>
		</nav>
	</Box>
	)
}

export default NoteList