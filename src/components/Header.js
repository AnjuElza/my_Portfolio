import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import EmailIcon from '@mui/icons-material/Email';
import { Link } from 'react-scroll';
import './css/Header.css';

function Header(){
    const pages = ['About', 'Skills', 'Projects','Contact Me'];
  
    return(
          
            <AppBar className='navbar' position="fixed"  style={{ backgroundColor: 'white' }}
            sx={{ height: '90px', display: 'flex', justifyContent: 'center' }}>
            <Container maxWidth="xl">
              <Toolbar disableGutters sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <div>
                  <Typography variant="h4" noWrap component="a" sx={{
                    fontFamily: 'Source Sans Pro, sans-serif',
                    fontWeight: 600,
                    fontSize: '1.5rem',
                    color: 'black',
                    textDecoration: 'none',
                  }}>
                    ANJU ELZA ACHENKUNJU
                  </Typography>
                </div>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Box sx={{flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                  
                  <Button sx={{ mx: 2, color: 'black' }}>
                      <Link to="about" smooth={true} duration={500} offset={-90}>
                      About
                      </Link>
                  </Button>
                     
                      <Button sx={{ mx: 2, color: 'black' }}>
                      <Link to="skills" smooth={true} duration={500} offset={-90}>
                        Skills
                        </Link>
                        </Button>
                        <Button sx={{ mx: 2, color: 'black' }}>
                      <Link to="projects" smooth={true} duration={500} offset={-90}>
                        Projects
                        </Link>
                        </Button>
                      <Button sx={{ mx: 2, color: 'black' }}>
                      <Link to="contact" smooth={true} duration={500} offset={-90}>
                        Contact Me
                        </Link>
                        </Button>
                   
                  </Box>
                 
                </Box>
              </Toolbar>
            </Container>
          </AppBar>
          
    )
}

export default Header;