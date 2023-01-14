import React from "react";
import './content.css'
import { TypeAnimation } from 'react-type-animation';

const Content = ()=>{
   
    return(
        <>

                    
             <div className="headercontent">
                    
                    <div className="thedev">
                      <div>I'm a</div>
                        <div>
                            <TypeAnimation
                                sequence={[
                                  'Developer', 
                                  2500, 
                                  'Freelancer', 
                                  2500, 
                                  'Designer', 
                                  2500,
                                  () => {
                                    console.log('Done typing!'); 
                                  }
                                ]}
                                wrapper="div"
                                speed= {5}
                                deletionSpeed={7}
                                cursor={true}
                                repeat={Infinity}
                                style={{ fontSize: '1em' }}
                              />
                        </div>
                      </div>
                  </div>
        
        </>

    );
}

export default Content;