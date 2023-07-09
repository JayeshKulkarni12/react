import './App.css';
import Navbar from './component/Navbar';
//import Footer from './component/Footer';
import Login from './component/Login';
import Home from './component/Home';
import Register from './component/Register';
// import Footer from './component/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom/dist';
import About from './component/About';

function App() {  
  
  return (
    <>
    
    <BrowserRouter>
      <Navbar />
      
      <Routes>
     
      <Route>
          <Route path='/' exact element={<Home />}/>
          <Route path='/Home' element={<Home />}/>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/about" element={<About />} />
         
         

        </Route>
    
      </Routes>
      
    </BrowserRouter>
  

    </>

  );
}



export default App;
