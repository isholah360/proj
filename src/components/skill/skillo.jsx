import React from 'react'
import './skill.css'

function Skillo(props) {
    const {title1, title2, title3, size1, size2, size3} = props
  return (
    <div>
            <div className="complete">
                <div className="skiil-title">
                <p> {title1} </p>
                <p>{size1}</p>
                </div>
                <div className="bottom">
                    <div className='top4'></div>
                </div>
            </div>
            <div className="complete">
                <div className="skiil-title">
                <p> {title2} </p>
                   <p>{size2}</p>
                </div>
                <div className="bottom">
                    <div className='top5'></div>
                </div>
            </div>
            <div className="complete">
                <div className="skiil-title">
                <p> {title3} </p>
                <p>{size3}</p>
                </div>
                <div className="bottom">
                    <div className='top6'></div>
                </div>
            </div>
    </div>
  )
}

export default Skillo;
