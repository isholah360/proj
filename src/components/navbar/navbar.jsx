import React, { useEffect, useRef, useState } from "react";
import "./navbar.css";
import gsap from "gsap";
import { Power3 } from "gsap";
import { About, Blog, Contact, Portfolio, Resume } from "../../pages";

const Navbar = () => {
  const node1 = useRef(null);
  const nodea = useRef(null);
  const nodeb = useRef(null);
  const nodec = useRef(null);
  const noded = useRef(null);
  const nodee = useRef(null);
  const showing = useRef(null);
  const showz = useRef(null);
  const state = useRef(null);
  const statez = useRef(null);
  const port = useRef(null);
  const ports = useRef(null);
  const blog = useRef(null);
  const blogIn = useRef(null);
  const contact = useRef(null);
  const contactIn = useRef(null);
  const hoverImg = useRef(null);
  const hoverPort = useRef(null);
  const hoverResume = useRef(null);
  const hoverCont = useRef(null);
  const hoverAbou = useRef(null);
  const hoverBlog = useRef(null);
  const premiere = useRef(null);
  const [displayz, setDisplayz] = useState(true);

  const show = () => {
    setDisplayz(!true);
    state.current.style.display = "show";
    gsap.fromTo(
      [showing.current, state.current],
      { y: "100vh" },
      {
        y: "0",
        display: "flex",
        duration: 0.7,
        ease: Power3.outIn,
        transformOrigin: "left",
        delay: 0.5,
        stagger: { amount: 1 },
      }
    );
  };
  const closer = () => {
    gsap.fromTo(
      [state.current, showing.current],
      { y: "0vh" },
      {
        y: "100vh",
        display: "none",
        duration: 0.7,
        ease: Power3.outIn,
        transformOrigin: "left",
        delay: 0.5,
        stagger: { amount: 1 },
      }
    );
    state.current.style.display = "about";
  };
  const showResume = () => {
    showz.current.classList = "showresume";
    gsap.fromTo(
      [showz.current, statez.current],
      { y: "100vh" },
      {
        y: "0",
        display: "flex",
        duration: 0.7,
        ease: Power3.outIn,
        transformOrigin: "left",
        delay: 0.5,
        stagger: { amount: 1 },
      }
    );
  };
  const closing = () => {
    gsap.fromTo(
      [statez.current, showz.current],
      { y: "0vh" },
      {
        y: "100vh",
        display: "none",
        duration: 0.7,
        ease: Power3.outIn,
        transformOrigin: "left",
        delay: 0.5,
        stagger: { amount: 1 },
      }
    );
  };
  const showPort = () => {
    port.current.classList = "portshow";
    gsap.fromTo(
      [port.current, ports.current],
      { y: "100vh" },
      {
        y: "0",
        display: "flex",
        duration: 0.7,
        ease: Power3.outIn,
        transformOrigin: "left",
        delay: 0.5,
        stagger: { amount: 1 },
      }
    );
  };
  const closePort = () => {
    gsap.fromTo(
      [ports.current, port.current],
      { y: "0vh" },
      {
        y: "100vh",
        display: "none",
        duration: 0.7,
        ease: Power3.outIn,
        transformOrigin: "left",
        delay: 0.5,
        stagger: { amount: 1 },
      }
    );
  };
  const showBlog = () => {
    blog.current.classList = "showblog";
    gsap.fromTo(
      [blog.current, blogIn.current],
      { y: "100vh" },
      {
        y: "0",
        display: "flex",
        duration: 0.7,
        ease: Power3.outIn,
        transformOrigin: "left",
        delay: 0.5,
        stagger: { amount: 1 },
      }
    );
  };
  const closeBlog = () => {
    gsap.fromTo(
      [blogIn.current, blog.current],
      { y: "0vh" },
      {
        y: "100vh",
        display: "none",
        duration: 0.7,
        ease: Power3.outIn,
        transformOrigin: "left",
        delay: 0.5,
        stagger: { amount: 1 },
      }
    );
  };
  const showContact = () => {
    contact.current.classList = "showcontact";
    gsap.fromTo(
      [contact.current, contactIn.current],
      { y: "100vh" },
      {
        y: "0",
        display: "flex",
        duration: 0.7,
        ease: Power3.outIn,
        transformOrigin: "left",
        delay: 0.5,
        stagger: { amount: 1 },
      }
    );
  };
  const closeContact = () => {
    gsap.fromTo(
      [contactIn.current, contact.current],
      { y: "0vh" },
      {
        y: "100vh",
        display: "none",
        duration: 0.7,
        ease: Power3.outIn,
        transformOrigin: "left",
        delay: 0.5,
        stagger: { amount: 1 },
      }
    );
  };
  const [navies, setNavies] = useState(true);
  const showMenu = () => {
    setNavies(!navies);
  };
  const chgAbo = () => (hoverAbou.current.style.opacity = "1");
  const changeAbo = () => (hoverAbou.current.style.opacity = "0");
  const chgResume = () => (hoverResume.current.style.opacity = "1");
  const changeResume = () => (hoverResume.current.style.opacity = "0");
  const changePort = () => (hoverPort.current.style.opacity = "0");
  const chgPort = () => (hoverPort.current.style.opacity = "1");
  const changeBlog = () => (hoverBlog.current.style.opacity = "0");
  const chgBlog = () => (hoverBlog.current.style.opacity = "1");
  const changeCont = () => (hoverCont.current.style.opacity = "0");
  const chgCont = () => (hoverCont.current.style.opacity = "1");

  useEffect(() => {
    if (navies === true) {
      gsap.fromTo(
        [
          nodea.current,
          nodeb.current,
          nodec.current,
          noded.current,
          nodee.current,
        ],
        { opacity: 0, y: "-5rem" },
        {
          opacity: 1,
          y: "0rem",
          duration: 2.5,
          ease: Power3.outIn,
          transformOrigin: "left",
          delay: 2.5,
          stagger: { amount: 1 },
        }
      );
    }

    gsap.fromTo(
      [
        nodea.current,
        nodeb.current,
        nodec.current,
        noded.current,
        nodee.current,
      ],
      { opacity: 0, y: "-5rem" },
      {
        opacity: 1,
        y: "0rem",
        duration: 2.5,
        ease: Power3.outIn,
        transformOrigin: "left",
        delay: 2.5,
        stagger: { amount: 1 },
      }
    );
  }, [navies]);

  return (
    <>
      <div>
        <div className={navies ? "navbar" : "nav"}>
          <ul ref={node1}>
            <li
              className="lots"
              ref={nodea}
              onClick={show}
              onMouseLeave={changeAbo}
              onMouseEnter={chgAbo}
            >
              About
            </li>
            <li
              ref={nodeb}
              onClick={showResume}
              onMouseLeave={changeResume}
              onMouseEnter={chgResume}
            >
              Resume
            </li>
            <li
              ref={nodec}
              onClick={showPort}
              onMouseLeave={changePort}
              onMouseEnter={chgPort}
            >
              Portfolio
            </li>
            <li
              ref={noded}
              onClick={showBlog}
              onMouseLeave={changeBlog}
              onMouseEnter={chgBlog}
            >
              Blog
            </li>
            <li
              ref={nodee}
              onClick={showContact}
              onMouseLeave={changeCont}
              onMouseEnter={chgCont}
            >
              Contact
            </li>
            <li></li>
          </ul>
        </div>
        <div className="farcover" onClick={showMenu}>
          <div className="farbar topit"></div>
          <div className="farbar"></div>
          <div className="farbar botomit"></div>
        </div>
      </div>

      <div ref={showing} className={displayz ? "about" : "show"}>
        <button ref={close} className="close" onClick={closer}>
          close
        </button>
        <div ref={state} className="inside">
          <About />
        </div>
      </div>
      <div ref={showz} className="aboutz">
        <button ref={close} className="close" onClick={closing}>
          close
        </button>
        <div ref={statez} className="inside">
          <Resume />
        </div>
      </div>
      <div ref={port} className="aboutz">
        <button ref={close} className="close" onClick={closePort}>
          close
        </button>
        <div ref={ports} className="inside">
          <Portfolio />
        </div>
      </div>
      <div ref={blog} className="aboutz">
        <button ref={close} className="close" onClick={closeBlog}>
          close
        </button>
        <div ref={blogIn} className="inside">
          <Blog />
        </div>
      </div>
      <div ref={contact} className="aboutz">
        <button ref={close} className="close" onClick={closeContact}>
          close
        </button>
        <div ref={contactIn} className="inside">
          <Contact />
        </div>
      </div>
      <img className="himg" ref={hoverAbou} src="assets/about.jpg" alt="" />
      <img className="himg" ref={hoverBlog} src="assets/blog.jpeg" alt="" />
      <img className="himg" ref={hoverCont} src="assets/contact.jpeg" alt="" />
      <img className="himg" ref={hoverResume} src="assets/resume.jpeg" alt="" />
      <img className="himg" ref={hoverPort} src="assets/port.jpg" alt="" />
    </>
  );
};

export default Navbar;
