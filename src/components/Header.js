
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-scroll';
import { IconButton, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Logo from "../constants/images/anju_logo.jpg";
import './css/Header.css';
import  { useEffect, useState } from 'react';
const resumePdfLink = 'https://drive.google.com/file/d/1HyKIkJlNl8KmaFivxzaBG8G1geWcALEo/view?usp=drive_link';



function Header() {
  const [menuAnchor, setMenuAnchor] = useState(null);
  const [offset, setOffset] = useState(-90); // Default offset
  const openMenu = (event) => {
    setMenuAnchor(event.currentTarget);
  };

  const closeMenu = () => {
    setMenuAnchor(null);
  };

  const pages = ['About', 'Skills', 'Projects', 'Contact'];
  

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        // Adjust the offset for smaller screens
        setOffset(80); // You can adjust this value
      } else {
        // Default offset for larger screens
        setOffset(-90);
      }
    };

    // Set initial offset
    handleResize();

    // Update offset on window resize
    window.addEventListener('resize', handleResize);

    // Clean up the event listener
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <AppBar
      className='navbar'
      position="fixed"
      style={{ backgroundColor: 'white' }}
      sx={{ height: '90px', display: 'flex', justifyContent: 'center' }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <div className="logo_name_container">
            <div className="photo">
              <img src={Logo} alt="Logo" height={60} width={60} />
            </div>
            <Typography
              variant="h4"
              noWrap
              component="a"
              sx={{
                fontFamily: 'Source Sans Pro, sans-serif',
                fontWeight: 600,
                fontSize: '1.5rem',
                color: 'black',
                textDecoration: 'none',
                '@media (max-width: 768px)': {
                  fontSize: '1rem', // Adjust font size for smaller screens
                  margin: '0',
                },
              }}
            >
              ANJU ELZA ACHENKUNJU
            </Typography>
          </div>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page, index) => (
                <Button
                
                  key={index}
                  sx={{ mx: 2, color: 'black'}}
                >
                  {/* <Link to={page.toLowerCase()} smooth={true} duration={500} offset={-90}>
                    {page}
                  </Link> */}
                 <Link to={page.toLowerCase()} smooth={true} duration={500} offset={offset}>
      {page}
    </Link>

                </Button>
             
              ))}
              <Button
                sx={{ mx: 2, color: 'black' }}
                href={resumePdfLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </Button>
            </Box>
            <Box sx={{ display: { xs: 'block', md: 'none' } }}>
              <IconButton
                edge="end"
                color="black"
                aria-label="menu"
                onClick={openMenu}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                anchorEl={menuAnchor}
                open={Boolean(menuAnchor)}
                onClose={closeMenu}
              >
                {pages.map((page, index) => (
                  <MenuItem
                    key={index}
                    onClick={() => {
                      closeMenu();
                      document
                        .getElementById(page.toLowerCase())
                        .scrollIntoView({ behavior: 'smooth', block: 'center' });
                    }}
                  >
                    {page}
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
