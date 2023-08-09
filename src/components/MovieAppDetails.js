import React from 'react';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import './css/FastmailDetails.css';
export function MovieAppDetails({ onClose }) {
    const MovieInfoLive = () => {
        window.open('https://anju-movie-info-app.netlify.app', '_blank');
    };
    const MovieInfoSourceCodeFrontend = () => {
        window.open('https://github.com/AnjuElza/movie_app_frontend', '_blank');
    };
    const MovieInfoSourceCodeBackend = () => {
        window.open('https://github.com/AnjuElza/movie_app_backend', '_blank');
    };
    return (
        <div className="modal-overlay">
            <div className="modal-content">
            <div className="close-button-container">
      <Button className="close-button" onClick={onClose} variant="contained" color="error" sx={{ p: '1px' }}>
        <IconButton color="inherit">
          <CloseIcon sx={{ fontSize: '20px' }} />
        </IconButton>
      </Button>
    </div>
                <h2>Movie Info App</h2>
                <h5>Project Overview</h5>
                <p>Movie Info App is an app giving details about movie like name,summary,rating,poster and trailer. Fetaures like Add movie, Edit movie
                    and Delete movie are isModalOpenusing CRUD operations. Formik is used for form validation.
                </p>

                <p> React is used for building UI. Material UI(mui) is also used. The movie is added to the database here.
                </p>
                <p>Frontend: React</p>
                <p>Database: MongoDB</p>
                <p>Backend: Node.js</p>
                <div className="button-container">
                <Button variant="contained" onClick={MovieInfoLive}>Live Project</Button>
                <Button variant="contained" onClick={MovieInfoSourceCodeFrontend}>Front-end Source Code</Button>
                <Button variant="contained" onClick={MovieInfoSourceCodeBackend}>Back-end Source Code</Button>
                </div>
            </div>
        </div>
    );
}
