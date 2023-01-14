import React from "react";
import './about.css'
import Plan from "../../components/aboutplan/plan";
import Testimony from "../../components/testimony/testimony";
import Services from "../../components/aboutservices/services";
import Content from "../../components/aboutcontent/content";



function About() {

  return (
    
    <div>
      <div className='about-bg'>
       <div className="outside"></div>
          <div className="about-head">
            <p>Get to know me</p>
            <p className="aboutme">About Me</p>
            <hr className="horilinea"></hr>
          </div>
          
          <div className="about-details">
            <div className="myimg">
              <img className="realimga" src="assets/myimg.jpeg" alt="" />
            </div>
            <Content/>
        </div>
          <div className="services">
            <div className="myservices">
              <p className="offers">Services i offer to my clients</p>
              <p className="myoffers">My Services</p>
            </div>
           <Services/>
          </div>
          <div className="testimony">
            <div className="testimonies">
              <p className="Whatmy">What my clients think about me</p>
              <p className="Testimonials">Testimonials</p>
            </div>
           <div className="dot-card">
              <Testimony/>
           </div>
                
          </div>
          <div className="plan">
            
            <div className="get-plan">
              <div className="getstated">Get started with my services</div>
              <div className="chooseplan">Choose a Plan</div>
            </div>
            <div className="plancard">
              <Plan naming="Standard" amount="$19/month"
             source={('../../assets/standard.png')}/>
             <Plan naming="Professional" amount="$29/month"
             source={('../../assets/professional.png')}/>
             <Plan naming="Business" amount="$39/month"
             source={('../../assets/team.png')}/>
            </div>
          </div>   
        
      </div>
    </div>
    
  )
}

export default About;
