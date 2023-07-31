import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Button from '@mui/material/Button';
import Fmail_image from "../constants/images/fmail_image.png";
import './css/Projects.css';
import { FastmailDetails } from './FastmailDetails';
import { MovieAppDetails } from './MovieAppDetails';
import { ShoppingAssistantDetails } from './ShoppingAssistant';
function Projects(){
    const [isModal1Open, setIsModal1Open] = useState(false);
    const [isModal2Open, setIsModal2Open] = useState(false);
    const [isModal3Open, setIsModal3Open] = useState(false);
    // Function to handle opening the modal
    const openModal1 = () => {
      setIsModal1Open(true);
    };
    const openModal2 = () => {
        setIsModal2Open(true);
      };
      const openModal3 = () => {
        setIsModal3Open(true);
      };
  
    // Function to handle closing the modal
    const closeModal1 = () => {
      setIsModal1Open(false);
    };
    const closeModal2 = () => {
        setIsModal2Open(false);
      };
      const closeModal3 = () => {
        setIsModal3Open(false);
      };
    return(
        <div id="projects">
        <><p className='proj_heading'><span className="blue-letter">P</span>ROJECTS</p>
        <div className='projects_cards'>
            <Card sx={{ maxWidth: 500, height:400 , elevation:3 }} onClick={openModal1}>
                <CardActionArea >
                    <CardMedia
                        component="img"
                        height="200"
                        image={Fmail_image}
                        alt="Fast Mail" />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            FastMail
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            FastMail is an emailing app similar to GMail.
                            Frontend: Reactjs
                            Database: MongoDB
                            Backend: Nodejs, Expressjs
                            Bcrypt is used for encrypting the passwords and JWT is used for authentication.
                        </Typography>
                    </CardContent>
                    <Button size="small" onClick={openModal1}>Learn More</Button>
                </CardActionArea>
            </Card>
            {isModal1Open && (
            <FastmailDetails isOpen={isModal1Open} onClose={closeModal1} />
            )}
            <Card sx={{ maxWidth: 500, height:400, elevation:3 }} onClick={openModal2}>
                <CardActionArea >
                    <CardMedia
                        component="img"
                        height="200"
                        image="/static/images/cards/contemplative-reptile.jpg"
                        alt="Movie Info" />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Movie Info
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            ' Movie Info' is a movie app giving information about movies.
                            Frontend: Reactjs
                            Database: MongoDB
                            Backend: Nodejs, Expressjs
                           
                        </Typography>
                    </CardContent>
                    <Button size="small" onClick={openModal2}>Learn More</Button>
                </CardActionArea>
            </Card>
            {isModal2Open && (
            <MovieAppDetails isOpen={isModal2Open} onClose={closeModal2} />
            )}
            <Card sx={{ maxWidth: 500, height:400, elevation:3 }} onClick={openModal3}>
                <CardActionArea >
                    <CardMedia
                        component="img"
                        height="200"
                        image="/static/images/cards/contemplative-reptile.jpg"
                        alt="Shopping Assistant" />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        Shopping Assistant
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            'Shopping Assistant' is a web scraping app giving details about items from two different ecommerce websites.
                            Frontend: Reactjs
                            Database: MongoDB
                            Backend: Nodejs, Expressjs
                           
                        </Typography>
                    </CardContent>
                    <Button size="small" onClick={openModal3}>Learn More</Button>
                </CardActionArea>
            </Card>
            {isModal3Open && (
            <ShoppingAssistantDetails isOpen={isModal3Open} onClose={closeModal3} />
            )}
        </div></>
        </div>
    )
}

export default Projects;