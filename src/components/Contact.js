import EmailIcon from '@mui/icons-material/Email';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import './css/Contact.css';
function ContactMe(){
    return(
        <div id="contact_container">
            <div id="contact">
        <><p className='contact_heading'><span className="blue-letter">C</span>ONTACT <span className="blue-letter">M</span>E</p>
        <form name="contact" method="POST" data-netlify="true" className="contact-form">
  <input type="hidden" name="form-name" value="contact" />
  <div>
    <label for="name">Name:</label> 
    <input type="text" id="name" name="name" required />
  </div>
  <div>
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required />
  </div>
  <div>
    <label for="message">Message:</label>
    <textarea id="message" name="message" required></textarea>
  </div>
  <div>
    <button id="form_submit_button" type="submit">Send</button>
  </div>
</form>
        {/* <Button variant="contained" endIcon={<EmailIcon />} size="medium" sx={{ml:30, mt:3}}>
        <a href="mailto:anjuelz@gmail.com"> Contact Me</a>
        </Button> */}
        </>
        </div>
        </div>
    )
}

export default ContactMe;