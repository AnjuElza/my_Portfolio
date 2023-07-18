import React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import CssBaseline from '@mui/material/CssBaseline';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import './css/Footer.css';


function Footer(){
 
    const navigateToLinkedIn = () => {
        window.open('https://www.linkedin.com/in/anju-elza-achenkunju', '_blank');
      };
      const navigateToGithub = () => {
        window.open('https://github.com/AnjuElza', '_blank');
      };
    return(
        <Box>
      
            <Paper className='bottomBar' 
            sx={{ position: 'fixed', bottom: 0, left: 0, right: 0,  borderLeft: '15px solid blue', 
                  borderRight: '15px solid blue', display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: 'column' }} 
            elevation={3} 
            >
        <BottomNavigation >
        {/* <a href="https://www.linkedin.com/in/anju-elza-achenkunju" target="_blank"> 
        <a href="https://github.com/AnjuElza" target="_blank"
         <a href="mailto:anjuelz@gmail.com">
        */}
          <BottomNavigationAction label="Linkedin" icon={<LinkedInIcon />} onClick={navigateToLinkedIn} />
        
            <BottomNavigationAction label="Github" icon={<GitHubIcon/>} onClick={navigateToGithub}/>
            {/* <BottomNavigationAction label="Contact Me" icon={<EmailIcon />} /> */}
            <a href="mailto:anjuelz@gmail.com">
  <BottomNavigationAction label="Contact Me" icon={<EmailIcon />} />
</a>

        </BottomNavigation> 
        {/* <div className="divider" /> */}
<p className='footer_note'> ©2023.Made by Anju Elza</p>
          
        
        </Paper>
        </Box>
    )
}

export default Footer;
