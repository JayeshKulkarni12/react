import React from 'react';
import { MDBFooter} from 'mdb-react-ui-kit';
import { BsFacebook,BsTwitter,BsInstagram } from 'react-icons/bs';
import { BiHelpCircle,BiLogoGmail } from 'react-icons/bi';


function Footer(){
    return(
        <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-3 border-bottom'>
        <div className='me-5 d-none d-lg-block text-center'>
          <p>Get connected with us on social networks</p>
        </div>

        <div>
          <h3>
              <a href='' className='me-4 text-reset'>
              <BsTwitter />  
              </a>
              <a href='' className='me-4 text-reset'>
              <BsFacebook />
              </a>
              <a href='' className='me-4 text-reset'>
              <BsInstagram />
              </a>
              <a href='' className='me-4 text-reset'>
              <BiHelpCircle />
              </a>
              <a href='' className='me-4 text-reset' >
              <BiLogoGmail />
              </a>
          </h3>
          
        </div>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2023 Copyright: 
        <a className='text-reset fw-bold' href='#'>
          SBE School
        </a>
      </div>
    </MDBFooter>
    );
}
export default Footer