import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuHeader from '../Menu';

import './Header.css';

export default function Header() {
  const headerStyle = {
    backgroundColor: '#000',
  };

  return (
    <Box sx={{ flexGrow: 1 }} style={headerStyle}>
      <AppBar position='static' sx={{ ...headerStyle }}>
        <Toolbar>
          <IconButton
            size='large'
            edge='end'
            color='inherit'
            aria-label='menu'
            sx={{ mr: 2 }}
          >
          <MenuHeader /> 
          </IconButton>
          <Typography variant='h6' component='div' fontFamily='Afacad' sx={{ flexGrow: 1 }}>
            NASTYA BAZLOVA
          </Typography>
          <div className='header__info'>
            Kyiv, Ukraine
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
