import React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-scroll';

const options = [
  { label: 'ABOUT ME', id: 'aboutMe' },
  { label: 'TECH SKILLS', id: 'skills' },
  { label: 'TRAINING/COURSES', id: 'skills' },
  { label: 'MY PROJECTS', id: 'projects' },
  { label: 'CONTACTS', id: 'contacts' },
];

const ITEM_HEIGHT = 50;

const MenuHeader = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = (section) => {
    setActiveSection(section);
    handleClose();
  };

  return (
    <div>
      <MenuIcon
        aria-label='more'
        id='long-button'
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup='true'
        onClick={handleClick}
      >
        <MoreVertIcon />
      </MenuIcon>
      <Menu
        id='long-menu'
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 5.5,
            width: '30ch',
          },
        }}
      >
        {options.map((option) => (
           <MenuItem key={option.label} onClick={handleClose}>
           <Link to={option.id}  duration={500} style={{ textDecoration: 'none', color: 'inherit' }}>
             {option.label}
           </Link>
         </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default MenuHeader;
