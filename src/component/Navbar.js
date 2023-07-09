import '../App.css';
import { Link } from "react-router-dom";
import logo from '../school-logo.png'
function Navbar(){
    return(
        <div>
    <nav class="navbar navbar-expand-lg bg-dark">
        <div class="container-fluid">
        
          
          <div className="container">
            <a class="navbar-brand " style={{fontFamily:'serif'}} href='/' >
            <Link to="/Home"><img src={logo} alt="Bootstrap" width="40" height="40" />
            &nbsp;SBE School</Link></a>
         
           </div>

        <div class="justify-content-end" id="navbarNavAltMarkup">
        <div class="navbar-nav">
       

          <Link to="/about"  className="nav-link-item ">
            <button type="button" id='aboutbtn' className="btn btn-outline-success squad-btn text-right"  style={{width:'100%',  display: 'inline-block','white-space': 'nowrap'}} >About Us</button></Link>
          <Link to="/login" className="nav-link-item mx-2">
            <button type="button" className="btn btn-outline-success squad-btn">Login</button></Link>
          <Link to="/register" className="nav-link-item ">
            <button type="button" className="btn btn-outline-success squad-btn" style={{width:'100%',  display: 'inline-block','white-space': 'nowrap'}} >Sign Up</button></Link>

          
        </div>
      </div>
    </div>
  </nav>
  </div>
  );
}
    
export default Navbar