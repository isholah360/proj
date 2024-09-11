import React, { useRef, useState, useEffect } from "react";
import './portfolio.css'


const images =[
{ id: '1', imageName:"image1.jpeg ", tags: 'design', info: 'Web design'},
{ id: '2', imageName:"image2.jpeg ", tags: 'branding', info: 'Complete Branding', more: "More Info"},
{ id: '3', imageName:"image3.jpeg ", tags: 'branding', info: 'Complete Branding', more: "More Info"},
{ id: '4', imageName:"image4.jpg ", tags: 'branding', info: 'Product Design', more: "More Info"},
{ id: '5', imageName:"image5.jpg ", tags: 'branding', info: 'Coffee Cup Design', more: "More Info"},
{ id: '18', imageName:"image17.jpg ", tags: 'branding', info: 'Label Tag Mockup', more: "More Info"},
{ id: '17', imageName:"image18.jpg ", tags: 'branding', info: 'Modern Bag Mock', more: "More Info"},
{ id: '6', imageName:"image6.jpg ", tags: 'ui/ux', info: 'Health App', more: "More Info"},
{ id: '7', imageName:"image7.jpg ", tags: 'ui/ux', info: 'Crypto App', more: "More Info"},
{ id: '8', imageName:"image8.jpg ", tags: 'ui/ux', info: 'Crypto App', more: "More Info"},
{ id: '9', imageName:"image9.jpg ", tags: 'ui/ux', info: 'Bank App', more: "More Info"},
{ id: '10', imageName:"image10.png ", tags: 'design', info: 'Vacation Website', more: "More Info"},
{ id: '11', imageName:"image11.png ", tags: 'design', info: 'Saas Website', more: "More Info"},
{ id: '12', imageName:"image12.png ", tags: 'design', info: 'Award Website', more: "More Info"},
{ id: '13', imageName:"image13.png ", tags: 'design', info: 'Hair Website', more: "More Info"},
{ id: '14', imageName:"image14.png ", tags: 'design', info: 'Music Website', more: "More Info"},
{ id: '15', imageName:"image15.jpg ", tags: 'design', info: 'Drug Website ', more: "More Info"},
{ id: '16', imageName:"image16.jpg ", tags: 'design', info: 'Family Website', more: "More Info"},


]



const Portfolio = ()=>{
      const [tags, setTags] = useState('all')
      const [filtered, setFiltered] = useState([])


    useEffect(()=>{
          
        tags === 'all' ? setFiltered(images) : setFiltered(images.filter(image => image.tags === tags))
       
      },[tags])
   

    return(
        <>
        <div  className="port-folio">
            <div className='port-bg' handleTag={setTags}>
                <div className="port-head">
                    <p>Showcasing some of my best work</p>
                    <p className="portme">Portfolio</p>
                    <hr className="horiline"></hr>
                </div>
                <div className="btn-container" >
                <Button titles="all" handleTag={setTags}/>
                <Button titles="design" handleTag={setTags} />
                <Button titles="branding" handleTag={setTags}/>
                <Button titles="ui/ux" handleTag={setTags}/>
                </div>
                    <div className="image-container-outer">
                        <div className="image-container">
                            {filtered.map(image =>
                            <div key={image.id} className='img-card'>
                                <div key={image.imageName} className="carocover">
                                   <div className="fullinfo">
                                        <div className="info">{image.info}</div>
                                        <div className="moreinfo">{image.more}</div>
                                   </div>
                                </div>
                                <img className="realimg" src={`assets/${image.imageName}`} alt="" />
                            </div>)}

                        </div>
                    </div>
                    
            </div>
            
        </div>
            
        </>
    )
}

const Button= ({titles, handleTag}) =>{
    return(
        <div onClick={()=>{handleTag(titles)}}><button className="button-prop"
        >{titles.toUpperCase()}</button></div>
    )
}

export default Portfolio;
