import './css/Introduction.css';
import Logo from "../constants/images/anju_logo.jpg";
function Introduction(){
    return(
        <div className="introduction">
          
       <h1 className='name_heading'>Hi,<br></br> 
          I am <span className="blue-letter">Anju </span></h1>
       
       <p>Frontend React Developer <span className="blue-letter">| </span>Fullstack MERN Developer</p>
       </div>
      
    );
}

export default Introduction;