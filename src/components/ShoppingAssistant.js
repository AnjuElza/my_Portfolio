import React from 'react';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import './css/FastmailDetails.css';
export function MovieAppDetails({ onClose }) {
    const ShoppingAssistantLive = () => {
        window.open('https://easy-ray-slippers.cyclic.app', '_blank');
    };
const ShoppingAssistantSourceCodeFrontend = () => {
    window.open('https://github.com/AnjuElza/Shopping_assistant', '_blank');
};
const ShoppingAssistantSourceCodeBackend = () => {
    window.open('https://github.com/AnjuElza/Shpping_assistant_backend', '_blank');
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
            <h2> Shopping Assistant</h2>
            <h5>Project Overview</h5>
            <p>Shopping Assistant is an app which will help you in comparing the prices of an item(currently only mixers) in 
                two different ecommerce platforms.Web scrapping is done in node and node cron  is used to schedule the scrapping every 12 hours.
            </p>

            <p>Frontend: React</p>
            <p>Database: MongoDB</p>
            <p>Backend: Node.js</p>
            <div className="button-container">
            <Button variant="contained" onClick={ShoppingAssistantLive}>Live Project</Button>
            <Button variant="contained" onClick={ShoppingAssistantSourceCodeFrontend}>Front-end Source Code</Button>
            <Button variant="contained" onClick={ShoppingAssistantSourceCodeBackend}>Back-end Source Code</Button>
            </div>
        </div>
    </div>
);
}