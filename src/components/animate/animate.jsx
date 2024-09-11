import React, { useEffect, useRef } from "react";
import "./animate.css";
import gsap from "gsap";
import { Power3 } from "gsap";

const Animate = () => {
  const node1 = useRef(null);
  const node2 = useRef(null);
  const node3 = useRef(null);
  const node11 = useRef(null);
  const node22 = useRef(null);
  const node33 = useRef(null);
  const writer = useRef(null);
  const resp = useRef(null);
  const respo = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      [writer.current],
      { opacity: 1, color: "white" },
      { color: "black", opacity: 0, duration: 3, ease: Power3.outIn }
    );
    gsap.fromTo(
      [node11.current, node22.current, node33.current],
      { width: "30rem", x: "0", opacity: 1 },
      {
        opacity: 0,
        width: "0rem",
        x: "30rem",
        overflow: "hidden",
        duration: 1.5,
        ease: Power3.outIn,
        transformOrigin: "left",
        delay: 4.4,
        stagger: { amount: 1.5 },
      }
    );

    gsap.fromTo(
      [node1.current, node2.current, node3.current],
      { opacity: 1, height: "20rem", y: 0 },
      {
        opacity: 0,
        height: "0rem",
        y: "20rem",
        overflow: "hidden",
        duration: 2.5,
        ease: Power3.outIn,
        transformOrigin: "left",
        delay: 2,
        stagger: { amount: 1.5 },
      }
    );
  }, []);

  return (
    <>
      <div>
        <div className="responsiveaninate">
          <div ref={resp} className="underdog"></div>
          <div ref={respo} className="underdog last"></div>
        </div>

        <div className="mice">
          <div className="underdog2"></div>
          <div className="underdog2 last"></div>
        </div>
        <div className="top-place">
          <div className="bigger">
            <div ref={writer} className="writer">
              Welcome
            </div>
            <div className="nodes">
              <div ref={node1} className="node1"></div>
              <div ref={node2} className="node2"></div>
              <div ref={node3} className="node3"></div>
            </div>
            <div className="nodez">
              <div className="nods">
                <div ref={node11} className="node11"></div>
                <div ref={node22} className="node22"></div>
                <div ref={node33} className="node33"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Animate;
