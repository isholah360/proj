import React from "react";
import "./plan.css";

function Plan(props) {
  const { naming, source, amount } = props;
  return (
    <div>
      <div className="plcard">
        <img className="aboutimg" src={source} alt="" />
        <p className="standard">{naming}</p>
        <p className="amount">{amount}</p>
        <p>Mobile App Design</p>
        <p>Responsive Design</p>
        <p>Database Development</p>
        <p>Web Design</p>
        <p>Web Design</p>
        <p>24/7 Support</p>
        <button>Get Started</button>
      </div>
    </div>
  );
}

export default Plan;
