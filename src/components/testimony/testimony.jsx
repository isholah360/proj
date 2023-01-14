import React, {useRef, useEffect, useState} from 'react'
import './testimony.css'
import gsap from "gsap";
import { Power3 } from 'gsap'
import Asset2a from '../../assets/Asset2a.png'
import Asset3a from '../../assets/Asset3a.png'
import tes1 from '../../assets/tes1.jpg'
import tes3 from '../../assets/tes3.jpg'

function Testimony() {
    const line1 = useRef(null)
    const line2 = useRef(null)
    const line3= useRef(null)
    const line4 = useRef(null)
    const line5 = useRef(null)

  const [isdislay, setIsdislay]=useState(false)
  const [dislay, setDislay]=useState(false)

  const firstAnimate =()=>{
    gsap.fromTo([line1.current, ], 
      { x:"-100rem"}, { x:"0rem", display:"flex",
      duration:0.7, ease:Power3.outIn,
      })
    
  }
  const secondAnimate =()=>{
    gsap.fromTo([line2.current,  
     ], 
      { x:"100rem"}, { x:"0", display:"flex",
      duration:0.7, ease:Power3.outIn,
      })
    
  }
  
  const first = ()=>{
    line2.current.style.display="none"
    line1.current.style.display="flex"
    setIsdislay(true)
    setDislay(false) 
  }
  
  const second= ()=>{ 
    line2.current.style.display="flex"
    line1.current.style.display="none"
      setIsdislay(false)
      setDislay(true)
  }
  const third= ()=>{ 
    line3.current.style.display="flex"
    line4.current.style.display="none"
    line5.current.style.display="none"
  }
  const fouth= ()=>{ 
    line3.current.style.display="none"
    line4.current.style.display="flex"
    line5.current.style.display="none"
  }
  const fiveth= ()=>{ 
    line3.current.style.display="none"
    line4.current.style.display="none"
    line5.current.style.display="flex"
      
  }
  useEffect(()=>{
    if(isdislay===true){
     firstAnimate();
    }
    if(dislay===true){
      secondAnimate();
     }
   }, [isdislay, dislay])
  return (
    <div>
      
    <div>
<div className="tesgencard">
  <div ref={line1} className="testcard onez">
    <div ref={line3} className="resone">
    <div  className="testycard">
    
    <div className="bothofthem">
              <div className="img-name">
                      <div className="img">
                      <img className='testimg' src={Asset2a} alt="" />
                      </div>
                      <div className="names">
                          <p className='thename'>Salika Brown</p>
                          <p>Envato Csutomer</p>

                      </div>
              </div>
              <div className="quote">
              &#8221;
              </div>
    </div>
    <div className="main-testimony">
          I am extremely satisfied with the service I 
          received at your company. The staff was 
          helpful and friendly, and my order was 
          processed and delivered quickly. The product
              exceeded my expectations and I will 
              definitely be returning in the future. 
              Thank you Eshola for your excellent service.
    </div>

</div>
</div>
<div ref={line4}  className="restwo">
    <div className="testycard">

    <div className="bothofthem">
    <div className="img-name">
          <div className="img">
          <img className='testimg' src={Asset3a} alt="" />
          </div>
          <div className="names">
              <p className='thename'>Jame Smith</p>
              <p>Envato Csutomer</p>

          </div>
    </div>
    <div className="quote">
    &#8221;
    </div>
    </div>
    <div className="main-testimony">
    I am extremely satisfied with the service I 
    received at your company. The staff was 
    helpful and friendly, and my order was 
    processed and delivered quickly. The product
    exceeded my expectations and I will 
    definitely be returning in the future. 
    Thank you Eshola for your excellent service.
    </div>

</div>
</div>
<div ref={line5} className="restree">
      <div  className="testycard okthird">

      <div className="bothofthem">
      <div className="img-name">
            <div className="img">
            <img className='testimg' src={Asset3a} alt="" />
            </div>
            <div className="names">
                <p className='thename'>Lucy Stone</p>
                <p>Envato Csutomer</p>

            </div>
      </div>
      <div className="quote">
      &#8221;
      </div>
      </div>
      <div className="main-testimony">
      I am extremely satisfied with the service I 
      received at your company. The staff was 
      helpful and friendly, and my order was 
      processed and delivered quickly. The product
      exceeded my expectations and I will 
      definitely be returning in the future. 
      Thank you Eshola for your excellent service.
      </div>

      </div>
      </div>
</div>
                    <div ref={line2} className="testcard twoz">
                      <div className="testycard ">

                                 <div className="bothofthem">
                                    <div className="img-name">
                                            <div className="img">
                                            <img className='testimgs' src={tes1} alt="" />
                                            </div>
                                            <div className="names">
                                                <p className='thename'>Leroy Stone</p>
                                                <p>Envato Csutomer</p>

                                            </div>
                                    </div>
                                    <div className="quote">
                                    &#8221;
                                    </div>
                           </div>
                           <div className="main-testimony">
                                I am extremely satisfied with the service I 
                                received at your company. The staff was 
                                helpful and friendly, and my order was 
                                processed and delivered quickly. The product
                                    exceeded my expectations and I will 
                                    definitely be returning in the future. 
                                    Thank you Eshola for your excellent service.
                           </div>

                      </div>
                      <div className="testycard">

                                 <div className="bothofthem">
                                    <div className="img-name">
                                            <div className="img">
                                            <img className='testimgs' src={tes3} alt="" />
                                            </div>
                                            <div className="names">
                                                <p className='thename'>Steward Rice</p>
                                                <p>Envato Csutomer</p>

                                            </div>
                                    </div>
                                    <div className="quote">
                                    &#8221;
                                    </div>
                           </div>
                           <div className="main-testimony">
                                I am extremely satisfied with the service I 
                                received at your company. The staff was 
                                helpful and friendly, and my order was 
                                processed and delivered quickly. The product
                                    exceeded my expectations and I will 
                                    definitely be returning in the future. 
                                    Thank you Eshola for your excellent service.
                           </div>

                      </div>
                    </div>
                </div>

                <div className="dotdiv">
                    <div onClick={first} className="dot"></div>
                    <div onClick={second} className="dot"></div>
                    <div onClick={third} className="dot third"></div>
                    <div onClick={fouth} className="dot third"></div>
                    <div onClick={fiveth} className="dot third"></div>
                </div>
    </div>
          
    </div>
  )
}

export default Testimony;
