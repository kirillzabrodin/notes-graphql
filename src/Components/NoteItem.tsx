import { Box, Button, Divider, ListItem, ListItemButton, ListItemText, Stack } from '@mui/material';
import React from 'react';
import { NoteItemInterface } from '../types';

const NoteItem: React.FC<NoteItemInterface> = ( {note , updateSelection} ) => {
    return (
      <div key={note.id}>
				<Divider variant="middle" component="li" />
				<ListItem>
					<ListItemButton>
						<Box sx={{ width: '80%', maxWidth: '80%vw' }}>
							<ListItemText 
								primary={note.text.substring(0, 180)}
								secondary={note.id}
								sx={{ wordBreak: "break-all" }}
								onClick={() => {
									updateSelection(note.id)
								}}
							/>
						</Box>
					</ListItemButton>
					<Stack direction="row" justifyContent="end">
						<Button variant="outlined" onClick={() => {
							updateSelection(note.id)
						}}>
							Edit
						</Button>
					</Stack>
				</ListItem>
			</div>  
    )
}

export default NoteItem