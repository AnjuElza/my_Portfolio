import EmailIcon from '@mui/icons-material/Email';
import Button from '@mui/material/Button';
import './css/Contact.css';
function ContactMe(){
    return(
        <div id="contact">
        <><p className='contact_heading'>Contact Me</p>
        <Button variant="contained" endIcon={<EmailIcon />} size="medium" sx={{ml:30, mt:3}}>
        <a href="mailto:anjuelz@gmail.com"> Contact Me</a>
        </Button></>
        </div>
    )
}

export default ContactMe;