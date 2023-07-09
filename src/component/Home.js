import imghome from '../download (2).jpg'
import Footer from './Footer';
import '../App.css';




function Home(){
   
    return(
        <div id='home' modal-fullscree>
            <img src={imghome} className="img-fluid" alt="home img"></img>
           <div>
            <p className='mt-4 container fs-5 fw-normal'>SBE School is a renowned educational institution dedicated to providing a comprehensive and holistic learning experience for students.
                Located in a vibrant community, SBE School offers a nurturing environment that fosters academic excellence, personal growth, and social development.
                Beyond academics, SBE School promotes a strong sense of community and encourages active participation in community service and social initiatives. 
                We foster values such as empathy, respect, and responsibility, nurturing compassionate individuals who are equipped to make a positive impact on society.</p>
            </div>

            <Footer />


        </div>
        
    );
    
}
export default Home