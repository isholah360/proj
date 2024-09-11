import React from "react";
import "./content.css";

function Content() {
  return (
    <div>
      <div>
        <div className="about-content">
          <p className="whoim">Who am i?</p>
          <p className="namedetail">
            I'm Eshola Duro, a visual UX/UI Designer and Web Developer
          </p>
          <p className="detailcontent">
            I am a freelancer based in the United Kingdom and i have been
            building noteworthy UX/UI designs and websites for years, which
            comply with the latest design trends. I help convert a vision and an
            idea into meaningful and useful products. Having a sharp eye for
            product evolution helps me prioritize tasks, iterate fast and
            deliver faster.
          </p>
          <hr className="namehr" />
          <div className="age-mail">
            <div className="fullname">
              <p>
                Name:<span className="detcolor">Eshola Duro</span>
              </p>
              <p className="botomcolor">
                Age: <span className="detcolor">25</span>
              </p>
            </div>
            <div className="fullmail">
              <p>
                Email:<span className="mailcolor">isholah360@gmail.com</span>
              </p>
              <p className="botomcolor">
                From: <span className="detcolor">Ibadan, Nigeria.</span>
              </p>
            </div>
          </div>
          <div className="btn-social">
            <div className="buton">
              <button>Download..CV</button>
            </div>
            <hr className="horizontal" />
            <div className="social-medias">
              <img className="mediaz" src="/assets/instagram.png" alt="" />
              <img className="mediaz" src="/assets/facebook.png" alt="" />
              <img className="mediaz" src="/assets/twitter.png" alt="" />
              <img className="mediaz" src="/assets/github.png" alt="" />
              <img className="mediaz" src="/assets/linkedin-logo.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
