import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import EmailIcon from '@mui/icons-material/Email';
import Button from '@mui/material/Button';
import { Link } from 'react-scroll';

import './css/About.css';
function About(){
    return(
       <>
       <div className='about_container' id="about">
       <p className='about_heading'><span className="blue-letter">A</span>BOUT <span className="blue-letter">M</span>E</p>
        <div className='about'>
       <Box className='about_box' sx={{}}>
       
       {/* <Paper elevation={3} 
       sx={{ width: '250px', height: '270px', ml: 50, mt: 3, padding:1, mb:3}}>
           <img
                src={Photo}
                alt="Anju"
                height={270} width={250}     
           />
       </Paper> */}
       
       </Box>
       
            <Paper elevation={3} 
                sx={{ width: '45%', height: 'fit-content', ml: '20vw', mt: 5, padding:3, mb:3, fontSize:18, display: 'flex', 
                flexDirection: 'column', alignItems: 'center', textAlign: 'justify'  }}>
            <><p>
               
                I am a motivated and detail-oriented fullstack MERN developer, also interested in Frontend React developer jobs. 
                My aim is to develop reusable, testable and 
                responsive web designs that help in meeting user expectations. 
            </p><p>
                    
                    In this fast moving industry, I am excited to constantly learn and improve my skills.
                    I am seeking a challenging role  where I can 
                utilize my expertise in HTML, CSS, JavaScript, and my proficiency in frameworks such as React and Node.js and
                 my problem-solving capabilities to develop high-performing web applications. Committed to delivering high-quality code, 
                 staying updated with emerging technologies, and collaborating effectively in cross-functional teams to achieve project goals.
                </p>
                
                <p>
                    Check out my projects and feel free to contact me if you have a suitable job matching my skills.
                </p>
                {/* <Button variant="contained" sx={{ mx: 2, color: 'black', mt:3, mb:3, justifyContent: 'center' }}>
                      <Link to="projects" smooth={true} duration={500} offset={-90}>
                        My Projects
                        </Link>
                        </Button> */}
                </>
        </Paper>
       
                </div>
                </div> 
        </>
    )
}

export default About;