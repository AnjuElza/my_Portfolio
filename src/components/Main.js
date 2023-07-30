import Header from './Header';
import Footer from './Footer';
import Introduction from './Introduction';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import ContactMe from './Contact';
import './css/Main.css';
import { Container, Grid } from '@mui/material';
function Main(){
    return(
        <Container maxWidth="xl">
        <>
        
        
            <Header />
        
        <Introduction />
        
        <About />
        <Skills />
        
        <Projects />
        
        <ContactMe />
        
        <Footer />
        
        </>
        </Container>
    )
}

export default Main;