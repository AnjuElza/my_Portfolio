import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Button from '@mui/material/Button';

import './css/Projects.css';
import { FastmailDetails } from './FastmailDetails';

function Projects(){
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Function to handle opening the modal
    const openModal = () => {
      setIsModalOpen(true);
    };
  
    // Function to handle closing the modal
    const closeModal = () => {
      setIsModalOpen(false);
    };
    return(
        <div id="projects">
        <><p className='proj_heading'>Projects</p>
        <div className='projects_cards'>
            <Card sx={{ maxWidth: 400, height:350 }} onClick={openModal}>
                <CardActionArea >
                    <CardMedia
                        component="img"
                        height="170"
                        image="/static/images/cards/contemplative-reptile.jpg"
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
                    <Button size="small" onClick={openModal}>Learn More</Button>
                </CardActionArea>
            </Card>
            {isModalOpen && (
            <FastmailDetails isOpen={isModalOpen} onClose={closeModal} />
            )}
            <Card sx={{ maxWidth: 400, height:350, elevation:3 }}>
                <CardActionArea >
                    <CardMedia
                        component="img"
                        height="170"
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
                    <Button size="small" onClick={openModal}>Learn More</Button>
                </CardActionArea>
            </Card>

            <Card sx={{ maxWidth: 400, height:350, elevation:3 }}>
                <CardActionArea >
                    <CardMedia
                        component="img"
                        height="170"
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
                </CardActionArea>
            </Card>
        </div></>
        </div>
    )
}

export default Projects;