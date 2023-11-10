import React from 'react';
import { Card, CardActionArea, CardActions, CardContent, CardMedia, Typography, Button } from '@mui/material';

const ProjectCard = ({ image, title, description, openModal, isModalOpen, closeModal, detailsComponent }) => {
  return (
    <Card sx={{ width: 560, height: 500, elevation: 3, textAlign: 'justify' }} onClick={openModal}>
      <CardActionArea>
        <CardMedia component="img" height="220" image={image} alt={title} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="medium" color="primary" onClick={openModal}>
          Learn More
        </Button>
      </CardActions>
      {isModalOpen && detailsComponent && (
        React.cloneElement(detailsComponent, { isOpen: isModalOpen, onClose: closeModal })
      )}
      {/* {isModalOpen && (
           <detailsComponent isOpen={isModalOpen} onClose={closeModal} />
           )} */}
    </Card>
  );
};

export default ProjectCard;
//{isModal0Open && (
  //         <WhatToCooklDetails isOpen={isModal0Open} onClose={closeModal0} />
  //         )}