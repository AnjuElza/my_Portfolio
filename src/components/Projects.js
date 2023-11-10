import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
// import { CardActionArea } from '@mui/material';
// import Button from '@mui/material/Button';
import { Button, CardActionArea, CardActions } from '@mui/material';
import WhatToCook_image from "../constants/images/what_to_cook_logo.png";
import Fmail_image from "../constants/images/fmail_image.png";
import movie_app_logo from "../constants/images/movie_app_logo.png";
import shopping_logo from "../constants/images/shopping_logo.png";
import ProjectCard from './ProjectCard';
import './css/Projects.css';
import { WhatToCooklDetails } from './WhatToCook';
import { FastmailDetails } from './FastmailDetails';
import { MovieAppDetails } from './MovieAppDetails';
import { ShoppingAssistantDetails } from './ShoppingAssistant';
function Projects(){
    const [isModal0Open, setIsModal0Open] = useState(false);
    const [isModal1Open, setIsModal1Open] = useState(false);
    const [isModal2Open, setIsModal2Open] = useState(false);
    const [isModal3Open, setIsModal3Open] = useState(false);
    // Function to handle opening the modal
    const openModal0 = () => {
        setIsModal0Open(true);
      };
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
    const closeModal0 = () => {
        setIsModal0Open(false);
      };
    const closeModal1 = () => {
      setIsModal1Open(false);
    };
    const closeModal2 = () => {
        setIsModal2Open(false);
      };
      const closeModal3 = () => {
        setIsModal3Open(false);
      };
      // const projectData = [
      //   {
      //     image: WhatToCook_image,
      //     title: 'What to Cook',
      //     description: "'What to Cook' is a React app. We can search recipes for an ingredient in this app. Frontend: Reactjs, React Bootstrap",
      //     openModal: openModal0,
      //     isModalOpen: isModal0Open,
      //     closeModal: closeModal0,
      //     detailsComponent: <WhatToCooklDetails />,
      //   },
      //   {
      //       image: Fmail_image,
      //       title: 'FastMail',
      //       description: `FastMail is a fullstack emailing app similar to GMail, usig MERN stack.
      //                                Frontend: Reactjs
      //                                Database: MongoDB
      //                                Backend: Nodejs, Expressjs
                                     
                                     
      //                                `,
      //       openModal: openModal1,
      //       isModalOpen: isModal1Open,
      //       closeModal: closeModal1,
      //       detailsComponent: <FastmailDetails />,
      //     },
      //     {
      //       image: movie_app_logo,
      //       title: 'Movie Info',
      //       description: `'Movie Info' is a movie app giving information about movies.
      //                                Frontend: Reactjs, Material UI
      //                                Database: MongoDB
      //                                Backend: Nodejs, Expressjs
                                     
                                     
      //                                `,
      //       openModal: openModal2,
      //       isModalOpen: isModal2Open,
      //       closeModal: closeModal2,
      //       detailsComponent: <MovieAppDetails />,
      //     },
      //     {
      //       image: shopping_logo,
      //       title: 'Shopping Assistant',
      //       description: `'Shopping Assistant' is a web scraping app giving details about items from two different ecommerce websites.
      //                                Frontend: Reactjs
      //                                Database: MongoDB
      //                                Backend: Nodejs, Expressjs
                                     
      //                                `,
      //       openModal: openModal3,
      //       isModalOpen: isModal3Open,
      //       closeModal: closeModal3,
      //       detailsComponent: <ShoppingAssistantDetails />,
      //     },
      // ];
    return(
    //     <div id="projects">
    //     <p className='proj_heading'><span className="blue-letter">P</span>ROJECTS</p>
    //     <div className='projects_cards'>
    //     {projectData.map((project, index) => (
    //       <ProjectCard key={index} {...project} />
    //     ))}
    //   </div>
    //   </div>
    // )
        <div id="projects">
        <><p className='proj_heading'><span className="blue-letter">P</span>ROJECTS</p>
        <div className='projects_cards'>
        <Card sx={{ width: 560, height:500 , elevation:3, textAlign: 'justify' }} onClick={openModal0}>
                <CardActionArea >
                    <CardMedia
                        component="img"
                        height="220"
                        image={WhatToCook_image}
                        alt="What To Cook" />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            What to Cook
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            'What to Cook' is a React app. We can search recipes for an ingredient in this app.<br></br>
                            Frontend: Reactjs, React Bootstrap<br></br><br></br><br></br>
                            {/* <Button size="small" onClick={openModal0}>Learn More</Button> */}
                        </Typography>
                    </CardContent>
                    
                </CardActionArea>
                <CardActions>
        <Button size="medium" color="primary" onClick={openModal0}>
        Learn More
        </Button>
      </CardActions>
            </Card>
            {isModal0Open && (
            <WhatToCooklDetails isOpen={isModal0Open} onClose={closeModal0} />
            )}
            <Card sx={{ width: 560, height:500 , elevation:3 }} onClick={openModal1}>
                <CardActionArea >
                    <CardMedia
                        component="img"
                        height="220"
                        image={Fmail_image}
                        alt="Fast Mail" />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            FastMail
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            FastMail is a fullstack emailing app similar to GMail, usig MERN stack.<br></br>
                            Frontend: Reactjs<br></br>
                            Database: MongoDB<br></br>
                            Backend: Nodejs, Expressjs<br></br><br></br>
                            {/* <Button size="small" onClick={openModal1}>Learn More</Button> */}
                        </Typography>
                    </CardContent>
                    
                </CardActionArea>
                <CardActions>
        <Button size="medium" color="primary" onClick={openModal1}>
        Learn More
        </Button>
      </CardActions>
            </Card>
            {isModal1Open && (
            <FastmailDetails isOpen={isModal1Open} onClose={closeModal1} />
            )}
            <Card sx={{ width: 560, height:500, elevation:3 }} onClick={openModal2}>
                <CardActionArea >
                    <CardMedia
                        component="img"
                        height="220"
                        image={movie_app_logo}
                        alt="Movie Info" />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Movie Info
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            'Movie Info' is a movie app giving information about movies.<br></br>
                            Frontend: Reactjs, Material UI<br></br>
                            Database: MongoDB<br></br>
                            Backend: Nodejs, Expressjs<br></br><br></br>
                            {/* <Button size="small" onClick={openModal2}>Learn More</Button> */}
                        </Typography>
                    </CardContent>
                   
                </CardActionArea>
                <CardActions>
                <Button size="medium"  color="primary" onClick={openModal2}>Learn More</Button>
                </CardActions>
            </Card>
            {isModal2Open && (
            <MovieAppDetails isOpen={isModal2Open} onClose={closeModal2} />
            )}
            <Card sx={{ width: 560, height:500, elevation:3 }} onClick={openModal3}>
                <CardActionArea >
                    <CardMedia
                        component="img"
                        height="220"
                        image={shopping_logo}
                        alt="Shopping Assistant" />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        Shopping Assistant
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            'Shopping Assistant' is a web scraping app giving details about items from two different ecommerce websites.<br></br>
                            Frontend: Reactjs<br></br>
                            Database: MongoDB<br></br>
                            Backend: Nodejs, Expressjs<br></br>
                            {/* <Button size="small" onClick={openModal3}>Learn More</Button> */}
                        </Typography>
                    </CardContent>
                    
                </CardActionArea>
                <CardActions>
                <Button size="medium"  color="primary" onClick={openModal3}>Learn More</Button>
                </CardActions>
            </Card>
            {isModal3Open && (
            <ShoppingAssistantDetails isOpen={isModal3Open} onClose={closeModal3} />
            )}
        </div></>
        </div>
    )
}

export default Projects;