import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import {Divider, Drawer, List, ListItem, ListItemIcon, ListItemText} from "@mui/material";
import {useState} from "react";

import { 
    ShoppingCart, 
    Place, 
    RestaurantMenu 
} from '@mui/icons-material';

import { useNavigate } from 'react-router-dom';

export default function Navbar() {
  const navigate = useNavigate();  
  const [menu, setMenu] = useState(false);
  
  const handleMenu = () => {
    setMenu(!menu);
  }

  const redirect = (url) => {
    navigate(url);
    setMenu(false);
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Drawer open={menu} onClose={handleMenu}>
        <div style={{width: '150px', margin: 20}} align="center">
            LOGO 
        </div>  

        <Divider/>   

        <List>
            <ListItem button onClick={() => redirect('/endereco')}>
                <ListItemIcon> <Place/> </ListItemIcon>
                <ListItemText> Endereço </ListItemText>
            </ListItem>

            <ListItem button onClick={() => redirect('/carrinho')}>
                <ListItemIcon> <ShoppingCart/> </ListItemIcon>
                <ListItemText> Carrinho </ListItemText>
            </ListItem>

            <ListItem button onClick={() => redirect('/listar')}>
                <ListItemIcon> <RestaurantMenu/> </ListItemIcon>
                <ListItemText> Cardapio </ListItemText>
            </ListItem>
        </List>
      </Drawer>  

      <AppBar position="static">
        <Toolbar>
          <IconButton
            onClick={handleMenu}
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon/>
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Meu Ifood
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
