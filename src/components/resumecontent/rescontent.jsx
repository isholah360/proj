import React from 'react'
import './rescontent.css'
function Rescontent(props) {

    const {title, year, contents} =  props;

  return (
    <div>
      <div className="content">
            <p className="title">
                {title}
            </p>
            <p className="year">
                {year}
            </p>
            <p className="contentz">
         
                    {contents}
                      
            </p>
            <p className="contents">

                      
            </p>
      </div>
    </div>
  )
}


export default Rescontent;
