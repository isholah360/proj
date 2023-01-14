import React from "react";
import Rescontent from "../../components/resumecontent/rescontent";
import './resume.css'
import Skill from "../../components/skill/skill";
import Skillo from "../../components/skill/skillo";
import vide from "../../assets/vide.jpeg"

function Resume() {
  return (
    <div>
        <div className='resume-bg'>
             <div className="outside"></div>
              <div className="resume-head">
                <p>Get to know us</p>
                <p className="resumeme">Resume</p>
                <hr className="horilinea"></hr>
              </div>
              <div className="educ-experience">
                  <div className="education">
                     <div className="experince">
                        Education
                      </div>
                    <div className="edumenu">
                      <div className="sideline"></div>
                      <Rescontent 
                      title='Computer Science'
                      year="Cambridge University / 2020 - 2021"
                      contents='
                      Recent computer science graduate 
                      with a strong foundation in 
                      programming languages such as 
                      Java and Python. Proficient 
                      in data structures and algorithms, 
                      and experienced in developing web 
                      and mobile applications.
                      '
                      />
                    </div>
                    <div className="edumenu">
                      <div className="sideline"></div>
                      <Rescontent 
                      title='Bachelor Degree'
                      year="Ahmadu Bello University / 2016 - 2018"
                      contents='
                      Bachelor degree in Architecture and software 
                      development from prestigious Ahmadu Bello 
                      university Zaria.
                      '
                      />
                    </div>
                    <div className="edumenu last">
                      <div className="sideline"></div>
                      <Rescontent 
                      title='Deploma in Web Development'
                      year="Udemy/ 2016 - 2018"
                      contents='
                      Acquire Diploma in Web developemnt from
                      udemy Academy
                      '
                      />
                    </div>
                  </div>
                  <div className="education">
                      <div className="experince">
                         Experience
                      </div>
                      <div className="edumenu">
                        <div className="sideline"></div>
                          <Rescontent 
                            title='Software Engineer'
                            year="Adobe / 2015 - 2017"
                            contents='
                            Recent computer science graduate 
                            with a strong foundation in 
                            programming languages such as 
                            Java and Python. Proficient 
                            in data structures and algorithms, 
                            and experienced in developing web 
                            and mobile applications.
                            '
                            />
                      </div>
                      <div className="edumenu">
                        <div className="sideline"></div>
                        <Rescontent 
                            title='Back-End Developer'
                            year="Google / 2017 - 2018"
                            contents='
                            Completed the Google IT Support 
                            Professional Certificate program 
                            and has demonstrated the skills and 
                            knowledge necessary to provide technical 
                            support for businesses and organizations.
                            '
                            />
                      </div>
                      <div className="edumenu last">
                        <div className="sideline"></div>
                        <Rescontent 
                            title='UI/UX Designer'
                            year="Discord / 2019 - Present"
                            contents='
                            Recent computer science graduate 
                            with a strong foundation in 
                            programming languages such as 
                            Java and Python. Proficient 
                            in data structures and algorithms, 
                            and experienced in developing web 
                            and mobile applications.
                            '
                            />
                      </div>
                  </div>
              </div>
              <div className="services">
                <div className="myservices">
                  <p className="offers">My level of knowledge in some tools</p>
                  <p className="myoffers">My Skills</p>
                </div>
                <div className="skillsize">
                  <div className="main">
                  <Skill size1="85%" size2="90%" size3="95%"
                  title1="HTML"  title2="Javascript" title3="React Js"/>
                  <Skillo size1="95%" size2="87%" size3="97%"
                  title1="CSS"  title2="UI/UX" title3="Node"/>

                  </div>
                </div>
                <div className="office-video">
                    <div className="vid-content">
                      <p className="vid-title">Take a tour of my office</p>
                      <p className="paragraph"> I have well-organized workspace 
                         that helps me
                          stay focused and reduce 
                         stress. This include a clean 
                         desk, organized files, and a system 
                         for keeping track of projects and 
                         tasks. Ergonomic chairs
                          with lumbar support and adjustable 
                          armrests can help reduce stress 
                          on the back and shoulders.
                          <br />
                          <br />
                          Adding personal touches, such as 
                          pictures, plants, or artwork, 
                          can help make the office feel 
                          more like home and create a 
                          sense of comfort.
                      </p>
                    </div>
                  <div className="thevideo">
                    <img className="videoimg" src={vide} alt="" />
                  </div>
                </div>
              </div>
        </div>
        
    </div>
  )
}

export default  Resume;