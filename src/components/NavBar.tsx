import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Drawer, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { useState } from 'react';
import { DrawerData } from '../definitions/DrawerData';

export const NavBar = () => {
  const [open, setOpen] = useState(false);
  
  const getList = () => (
    <div style={{ width: 250 }} onClick={() => setOpen(false)}>
      {DrawerData.map((item, index) => (
        <ListItem  key={index}>
          <ListItemIcon>{item.icon}</ListItemIcon>
          <ListItemText primary={item.name} />
        </ListItem>
      ))}
    </div>
  );
  
  return (
    <Box>
    <AppBar position="static">
    <Toolbar>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ mr: 2 }}
        onClick={() => setOpen(true)}
      >
        <MenuIcon />
      </IconButton>
      <Drawer open={open} anchor={"left"} onClose={() => setOpen(false)}>
      {getList()}
      </Drawer>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        SVG
      </Typography>
      <Button color="inherit">Login</Button>
    </Toolbar>
  </AppBar>
    </Box>
  )
}
