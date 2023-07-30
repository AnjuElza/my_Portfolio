import './css/Introduction.css';
import Logo from "../constants/images/anju_logo.jpg";
function Introduction(){
    return(
        <div className="introduction">
        {/* <img src={Logo} alt="Logo" className="logo" /> */}

        <div className='name'>
          
       <h1 className='name_heading'>Hi, I am <span className="blue-letter">Anju </span></h1>
       
       <p>Frontend React developer <span className="blue-letter">| </span>Fullstack MERN developer</p>
       </div>
       </div>
    );
}

export default Introduction;