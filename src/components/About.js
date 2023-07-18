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
                sx={{ width: '40%', height: 'fit-content', ml: 15, mt: 5, padding:3, mb:3, fontSize:18, display: 'flex', flexDirection: 'column', alignItems: 'center'  }}>
            <><p>
               
                I am a fullstack MERN developer, also interested in Frontend React developer jobs. My aim is to develop reusable, testable and 
                efficient codes that help in meeting user expectations. I love coding and I am passionate about my job.
            </p><p>
                    
                    In this fast moving industry, I am excited to constantly learn and improve my skills.
                    I am looking forward to work in a company where I will be able to contribute and also upskill myself.
                </p>
                <p>
                    Check out my projects and feel free to contact me if you have a suitable job matching my skills.
                </p>
                <Button variant="contained" sx={{ mx: 2, color: 'black', mt:3, mb:3, justifyContent: 'center' }}>
                      <Link to="projects" smooth={true} duration={500} offset={-90}>
                        My Projects
                        </Link>
                        </Button>
                </>
        </Paper>
       
                </div>
                </div> 
        </>
    )
}

export default About;