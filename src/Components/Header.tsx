import React from 'react'
import { AppBar, Box, IconButton, Toolbar, Typography } from '@mui/material';

const Header = () => {
	return (
		<Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Note Taking App
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
	)
}

export default Header