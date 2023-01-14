import React from 'react'
import './skill.css'

function Skill(props) {
    const {title1, title2, title3, size1, size2, size3 } = props
  return (
    <div>
            <div className="complete">
                <div className="skiil-title">
                   <p> {title1} </p>
                   <p>{size1}</p>
                </div>
                <div className="bottom">
                    <div className='top'></div>
                </div>
            </div>
            <div className="complete">
                <div className="skiil-title">
                <p> {title2} </p>
                   <p>{size2}</p>
                </div>
                <div className="bottom">
                    <div className='top2'></div>
                </div>
            </div>
            <div className="complete">
                <div className="skiil-title">
                <p> {title3} </p>
                <p>{size3}</p>
                </div>
                <div className="bottom">
                    <div className='top3'></div>
                </div>
            </div>
    </div>
  )
}

export default Skill;
