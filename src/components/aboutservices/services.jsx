import React from 'react'
import './services.css'
import web from '../../assets/web.png'
import psd from '../../assets/psd.png'
import support from '../../assets/support.png'
import coding from '../../assets/coding.png'
import design from '../../assets/design.png'
import brand from '../../assets/brand.png'


function Services() {
  return (
    <div>
      <div>
            <div className="gencard">
                <div className="servicevard">
                  <div className="card">
                    <img className='servimg' src={web} alt="" />
                    <div className="title">Design Trends</div>
                    <div className="main-content">
                        Minimalistic and responsive is a design
                        that will not only wow your audience, but also 
                        persuade them to take action.
                    </div>
                  </div>
                  <div className="card">
                         <img className='servimg' src={psd} alt="" />
                            <div className="title">PSD Design</div>
                            <div className="main-content">
                            Custom graphics design work, 
                            that will work with you 
                            to create a unique design that meets
                             your specific needs and goals. 
                            </div>

                  </div>
                  <div className="card">
                            <img className='servimg' src={support} alt="" />
                            <div className="title">Customer Support</div>
                            <div className="main-content">
                            Are you a customer-focused professional 
                           ? i'm providing a customer support 
                             representative service to help you 
                             deliver top-notch service 
                             to your clients.
                            </div>
                  </div>
                </div>
                <div className="servicevard">
                  <div className="card">
                    <img className='servimg' src={coding} alt="" />
                    <div className="title">Web Development</div>
                    <div className="main-content">
                        Minimalistic and responsive is a design
                        that will not only wow your audience, but also 
                        persuade them to take action.
                    </div>
                  </div>
                      <div className="card">
                        <img className='servimg' src={design} alt="" />
                          <div className="title">UI/UX Design</div>
                          <div className="main-content">
                          Custom graphics design work, 
                          that will work with you 
                          to create a unique design that meets
                            your specific needs and goals. 
                          </div>

                  </div>
                  <div className="card">
                            <img className='servimg' src={brand} alt="" />
                            <div className="title">Customer Support</div>
                            <div className="main-content">
                            Are you looking forward to have a own brand 
                           ? look no further, as i'm here to help you down the hassle 
                            </div>
                  </div>
                </div>
            </div>
      </div>
    </div>
  )
}

export default Services;
