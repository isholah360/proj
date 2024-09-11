import React, { useRef, useState, useEffect } from "react";
import "./homepage.css";
import gsap from "gsap";
import Content from "../../components/headcontent/content";
import Animate from "../../components/animate/animate";
import Navbar from "../../components/navbar/navbar";
import { Power3 } from "gsap";

function Homepage() {
  const bgimg = useRef(null);
  const ref = useRef(null);
  const close = useRef(null);
  const state = useRef(null);
  const [display, setDisplay] = useState(true);

  const change = () => {
    ref.current.classList = "show";
    gsap.fromTo(
      [ref.current, state.current],
      { y: "100vh" },
      {
        y: "0",
        duration: 0.7,
        ease: Power3.outIn,
        transformOrigin: "left",
        delay: 0.5,
        stagger: { amount: 1 },
      }
    );
  };
  const closed = () => {
    gsap.fromTo(
      [state.current, ref.current],
      { y: "0vh" },
      {
        y: "100vh",
        duration: 0.7,
        ease: Power3.outIn,
        transformOrigin: "left",
        delay: 0.5,
        stagger: { amount: 1 },
      }
    );
  };

  return (
    <>
      <div className="maainpages">
        <div className="firspage">
          <Navbar />
          <Animate />
          <div ref={bgimg} className="mainbg">
            <div className="thehead">
              <div className="name"> Ishola Duro</div>
              <Content />
            </div>
            <div className="lang">
              <p>ENG</p>
              <p className="jap">JAP</p>
            </div>

            <div className="social-media">
              <img className="media" src="assets/instagram.png" alt="" />
              <img className="media" src="assets/facebook.png" alt="" />
              <img className="media" src="assets/twitter.png" alt="" />
              <img className="media" src="assets/github.png" alt="" />
              <img className="media" src="assets/linkedin-logo.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Homepage;
