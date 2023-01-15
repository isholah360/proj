import React from "react";
import './contact.css'
function Contact() {
  return (
    <div>
       <div className='contact-bg'>
             <div className="outside"></div>
              <div className="contact-head">
                <p className="top-level">Feel free to contact me anytimes</p>
                <p className="contactme">Get In Touch</p>
                <hr className="horiline"></hr>
              </div>
              <div className="info-heading">
                <div className="themsg">Message</div>
                <div className="main-contact-head">Contact Info</div>
              </div>
          
           <div className="formandetail">
              <div className="test">
                    <input className="testing" type="text" name="" id="" placeholder="Name"/>
                    <br className="brake"/>
                    <br className="brake"/>
                    <input className="testingsec" type="text" name="" id="" placeholder="mail"/>
                    <br></br>
                    <br></br>
                    <input className="thesubject" type="text" name="" id="" placeholder="Subject"/>
                    <br></br>
                    <br></br>
                    <textarea className="themsgz" name="" id="" cols="55" rows="10" placeholder="Message"></textarea>
              </div>
              <div>
                <div className="moredetail">
                <div className="myinfo">
                  <div className="mainmyinfo">Message</div>
                  <div className="main-contact-body">Always available for 
                  freelance work if the right project comes 
                  along, Feel free to contact me!</div>
                  </div>
                </div>
                <div className="compl-personal-info"> 
                  <div className="cont">Contact Info</div>
                    <div className="infologo">
                      <img className="inforelogo" src="assets/name.png" alt="" />
                      <img className="inforelogo" src="assets/home.png" alt="" />
                      <img className="inforelogo" src="assets/telephone.png" alt="" />
                      <img className="inforelogo" src="assets/email.png" alt="" />
                    </div>
                </div>
                <hr className="classic"/>
                <div className="personalinfo">
                        <div className="individual-info">
                          <p className="myname" >Name</p>
                          <p className="information">Eshola Duro</p>
                        </div>
                        <div className="individual-info">
                          <p className="myname">Location</p>
                          <p className="information">Adekunle Fajuyi Barracks, Ojoo, Ibadan</p>
                        </div>
                        <div className="individual-info">
                          <p className="myname">Telephone</p>
                          <p className="information">+2348068235454</p>
                        </div>
                        <div className="individual-info">
                          <p className="myname">Email Me</p>
                          <p className="information">isholah360@gmail.com</p>
                        </div>
                    </div>

              </div>
              
           </div>
             
            
        </div>
           

    </div>
  )
}

export default Contact;
