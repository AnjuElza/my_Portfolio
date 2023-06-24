import React from 'react';
import Button from '@mui/material/Button';

export function FastmailDetails({ onClose }) {
    const FastMailLive = () => {
        window.open('https://sparkly-sfogliatella-fde3d1.netlify.app/', '_blank');
    };
    const FastMailSourceCodeFrontend = () => {
        window.open('https://github.com/AnjuElza/gmail-clone-frontend', '_blank');
    };
    const FastMailSourceCodeBackend = () => {
        window.open('https://github.com/AnjuElza/gmail-clone-backend/', '_blank');
    };
    return (
        <div className="modal-overlay">
            <div className="modal-content">
                {/* Modal content */}
                <h2>FastMail</h2>
                <h5>Project Overview</h5>
                <p>FastMail is an emailing app like GMail. The user can register and will get a username like 'username@fastmail.com'. The users can login and
                    will be able to see the incoming and sent emails. They will also be able to compose and send emails.'Starred emails' and 'Delete email' option
                    is also provided. Then the user can Logout from their account after their use of the web app.
                </p>

                <p> React is used for building UI. Material UI(mui) is also used.The user can register and the password is hashed using the package Bcrypt. JWT token authentication
                    is provided for authorization purpose.
                </p>
                <p>Frontend:React<br />
                    Database:MongoDB<br />
                    Backend:Nodejs<br />
                </p>
                <Button variant="contained" onClick={FastMailLive}>Live Project</Button>
                <Button variant="contained" onClick={FastMailSourceCodeFrontend}>Front-end Source Code</Button>
                <Button variant="contained" onClick={FastMailSourceCodeBackend}>Back-end Source Code</Button>
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    );
}
