
import about1 from '../about1.jpg';
import about2 from '../about2.jpg';
import about3 from '../about3.webp';
import React from 'react';
import './About.css';

function About(){
    return(
        <>
<div class="about-section">
  <h1>About Us</h1>
  <p>In the halls of SBE School,dreams are nurtured,minds are empowered,and potential is realized.</p>
  <p>Eduction is the passport to the future,and at SBE School, We provides the tools and guidance to help students embark on their remarkable journeys.</p>
</div>

<h2 className='text-center mt-3'>Our Team</h2>
<div class="row">
  <div class="column">
    <div class="card">
      <img src={about1} alt="Raghav" style= {{width: '50%',borderRadius:'100%'}}/>
      <div class="container">
        <h2>Dr. Raghav Sharma</h2>
        <p class="title">Chairman</p>
        <p>Ph.D. in Education</p>
        <p>raghavsharma@gmail.edu</p>
        <p><button class="button">Contact</button></p>
      </div>
    </div>
  </div>

  <div class="column">
    <div class="card">
      <img src={about3} alt="Meera" style={{width:'50%',borderRadius:'100%'}}/>
      <div class="container">
        <h2>Mr. Sanjay Verma</h2>
        <p class="title">Principal</p>
        <p>M.Ed., B.Sc. (Honors)</p>
        <p>sanjayverma@gmail.edu</p>
        <p><button class="button">Contact</button></p>
      </div>
    </div>
  </div>

  <div class="column">
    <div class="card">
      <img src={about2} alt="Sanjay" style={{width:'50%',borderRadius:'100%'}}/>
      <div class="container">
        <h2>Mrs. Meera Kapoor</h2>
        <p class="title">Vice Principal</p>
        <p>M.A. in English, B.Ed.</p>
        <p>meerakapoor@gmail.edu</p>
        <p><button class="button">Contact</button></p>
      </div>
    </div>
  </div>
</div>
</>
    );
}
export default About