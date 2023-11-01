import React from 'react';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import './css/FastmailDetails.css';
export function WhatToCooklDetails({ onClose }) {
    const WhatToCookLive = () => {
        window.open('https://anju-what-to-cook.netlify.app/', '_blank');
    };
    const WhatToCookSourceCodeFrontend = () => {
        window.open('https://github.com/AnjuElza/what_to_cook', '_blank');
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
                <h2>What To Cook</h2>
                <h5>Project Overview</h5>
                <p>This is a recipe finder app built using React and React Bootstrap. The user can search recipes by entering an ingredient in the
                    search bar.
                </p>

                <p> The recipe is fetched from the API 'www.themealdb.com/api/json/v1/1/filter.php' and is displayed. The detailed recipe is fetched
                    using the meal id. 
                </p>
                <p>Frontend: React, React Bootstrap</p>
                
                <div className="button-container">
                <Button variant="contained" onClick={WhatToCookLive}>Live Project</Button>
                <Button variant="contained" onClick={WhatToCookSourceCodeFrontend}>Front-end Source Code</Button>
                </div>
            </div>
        </div>
    );
}
