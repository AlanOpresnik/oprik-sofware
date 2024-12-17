'use client';
import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { Twirl as Hamburger } from 'hamburger-react';
import { Collapse } from '@mui/material';
import { ArrowDown } from 'lucide-react';

export default function DrawerNav() {
  const [open, setOpen] = React.useState(false);
  const [isOpenHamburger, setOpenHamburger] = React.useState(false);
  const [openSubMenu, setOpenSubMenu] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
    setOpenHamburger(newOpen);
  };

  const handleSubMenuToggle = (event: React.MouseEvent) => {
    event.stopPropagation(); // Evitar que el clic cierre el Drawer
    setOpenSubMenu(!openSubMenu);
  };

  const closeDrawer = () => setOpen(false);

  const DrawerList = (
    <Box
      sx={{
        width: 290,
        backgroundColor: '#121215',
        color: 'white',
        height: '100%',
      }}
      role="presentation"
    >
      <div className="px-4 py-6">
        <h1 className="text-2xl font-bold">Oprik <span className='text-primary'>software</span></h1>
      </div>
        <Divider sx={{background: 'white'}}/>
      <List>
        <ListItem disablePadding>
          <ListItemButton onClick={closeDrawer}>
            <ListItemText primary="Inicio" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton onClick={closeDrawer}>
            <ListItemText primary="Clientes" />
          </ListItemButton>
        </ListItem>
        
        <ListItem disablePadding onClick={handleSubMenuToggle}>
          <ListItemButton>
            <ListItemText primary="Planes de desarrollo" />
            <ArrowDown />
          </ListItemButton>
        </ListItem>
        <Collapse in={openSubMenu} timeout="auto"  unmountOnExit>
          <List  component="div" disablePadding sx={{ pl: 2 }}>
            <ListItem disablePadding>
              <ListItemButton onClick={closeDrawer}>
                <ListItemText primary="Plan Personal" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton onClick={closeDrawer}>
                <ListItemText primary="Plan Emprendimiento" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton onClick={closeDrawer}>
                <ListItemText  primary="Plan Personalizado" />
              </ListItemButton>
            </ListItem>
          </List>
        </Collapse>
      
        <ListItem disablePadding>
          <ListItemButton onClick={closeDrawer}>
            <ListItemText primary="Contacto" />
          </ListItemButton>
        </ListItem>
      </List>
      <p className="mb-4 text-center font-normal text-blue-gray-900 md:mb-0 absolute bottom-10">@ 2024 Oprik Software. derechos reservados.</p>
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer(true)}>
        <Hamburger color="white" size={26} toggled={isOpenHamburger} toggle={setOpenHamburger} />
      </Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
        
      </Drawer>
    </div>
  );
}
