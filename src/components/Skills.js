import React_icon from "../constants/icons/react_icon.png";
import Node_icon from "../constants/icons/node_icon.png";
import Express_icon from "../constants/icons/express_icon.png";
import Mongo_icon from "../constants/icons/mongo_icon.png";
import Mysql_icon from "../constants/icons/mysql_icon.png";
import Html_icon from "../constants/icons/html_icon.jpg";
import Css_icon from "../constants/icons/css_icon.png";
import Js_icon from "../constants/icons/js_icon.jpg";
import Redux_icon from "../constants/icons/redux_icon.png";
import Aws_icon from "../constants/icons/aws_icon.png";
import Bootstrap_icon from "../constants/icons/bootstrap_icon.jpg";
import Git_icon from "../constants/icons/github_icon1.png";
import Paper from '@mui/material/Paper';
import {Grid, useMediaQuery } from '@mui/material';
import Box from '@mui/material/Box';
import './css/Skills.css';

function Skills(){

    const skills=[
        {
            skill:"HTML",
            logo:Html_icon
        },
        {
            skill:"CSS",
            logo:Css_icon
        },
        {
            skill:"JAVASCRIPT",
            logo:Js_icon
        },
        {
            skill:"REACT JS",
            logo:React_icon
        },
       
        {
            skill:"BOOTSTRAP",
            logo:Bootstrap_icon
        },
        {
            skill:"NODE JS",
            logo:Node_icon
        },
        {
            skill:"EXPRESS JS",
            logo:Express_icon
        },
        {
            skill:"MONGO DB",
            logo:Mongo_icon
        },
        {
            skill:"MySQL",
            logo:Mysql_icon
        },
        
        {
            skill:"AWS",
            logo:Aws_icon
        },
        {
            skill:"GIT",
            logo:Git_icon
        }
    ];

    function SkillDetails({skill,logo}){
        
        return(

                <Paper elevation={4}
                    sx={{ width:'100px',
                    height: '100px',
                     mt: 2, padding: 1, mb: 2, borderBottom: '3px solid blue',
                     '@media (max-width: 768px)': {
                       width: '50px', /* Increased width for smaller screens */
                       height: '50px' /* Center the element by removing ml: '20vw' */
                       
                     }, }}>
                    <img className="skill_img"
                        src={logo}
                        alt="logo"
                        height={100} width={100} />
                    <h6 className="skill_name">{skill}</h6>
                </Paper>
          
             )
    }
    return(
        <div id="skills">
            <div id="skills_container">
        <><p className='skills_heading'><span className="blue-letter">S</span>KILLS</p>
        <Box className='skills_box' >
            {skills.map(({ skill, logo }) => (
                <SkillDetails skill={skill} logo={logo} />
            ))}
            </Box>
           </>
           </div>
        </div>
    )
}

export default Skills