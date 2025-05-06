'use client';
import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import { Twirl as Hamburger } from 'hamburger-react';
import { Collapse } from '@mui/material';
import { ArrowDown } from 'lucide-react';
import { Link } from 'next-view-transitions';
import { coursesDataMock } from '@/app/courses-data-mock/courses-data-mock';
import { useParams } from 'next/navigation';


export default function DrawerNav() {
  const [open, setOpen] = React.useState(false);
  const [isOpenHamburger, setOpenHamburger] = React.useState(false);
  const [openSubMenu, setOpenSubMenu] = React.useState(false);
  const params = useParams()

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
    setOpenHamburger(newOpen);
  };

  const handleSubMenuToggle = (event: React.MouseEvent) => {
    event.stopPropagation(); // Evitar que el clic cierre el Drawer
    setOpenSubMenu(!openSubMenu);
  };

  const closeDrawer = () => {
    setOpen(false);
    setOpenHamburger(false);
  }

 React.useEffect(() => {
    setOpen(false)
    setOpenHamburger(false)
    setOpenSubMenu(false)
  }, [params]) 
  

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
      <Divider sx={{ background: 'white' }} />
      <List>
        <ListItem disablePadding>
          <ListItemButton onClick={closeDrawer}>
            <Link href={'/'}>
              Inicio
            </Link>
          </ListItemButton>
        </ListItem>


        <ListItem disablePadding >
          <ListItemButton>

            <Link href={'/courses'}>
              Todas las cursadas
            </Link>
          </ListItemButton>

        </ListItem>
        <ListItem disablePadding onClick={handleSubMenuToggle}>
          <ListItemButton>

            <Link href={'#pricing'}>
              Cursos destacadas
            </Link>
            <ArrowDown />
          </ListItemButton>
        </ListItem>
        <Collapse in={openSubMenu} timeout="auto" unmountOnExit>
          <List component="div" disablePadding sx={{ pl: 2 }}>
            {coursesDataMock.map((course) => (
              
                course.outstanding && (
                  <ListItem key={course.slug} disablePadding>
                    <ListItemButton onClick={closeDrawer}>
                      <Link className='text-white text-sm  py-2 border-b' href={`/academy/${course.slug}`}>
                        {course.title}
                      </Link>
                    </ListItemButton>
                  </ListItem>
                )    
              
           
            ))}
          </List>
        </Collapse>
        <ListItem disablePadding >
          <ListItemButton>

            <Link href={'/about-us'}>
              Sobre nosotros
            </Link>
          </ListItemButton>

        </ListItem>

        <ListItem disablePadding>
          <ListItemButton onClick={closeDrawer}>
            <Link href={'https://wa.me/+541123498925'}>
              Contacto
            </Link>
          </ListItemButton>
        </ListItem>
      </List>
      <p className="mb-4 text-center font-normal text-blue-gray-900 md:mb-0 absolute bottom-10">@ 2024 Oprik Software. derechos reservados.</p>
    </Box>
  );

  return (
    <div>
      <Button className='!p-0' onClick={toggleDrawer(true)}>
        <Hamburger color="white" size={22} toggled={isOpenHamburger} toggle={setOpenHamburger} />
      </Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}

      </Drawer>
    </div>
  );
}
