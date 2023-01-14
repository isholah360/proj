import React from 'react'
import './blog.css'

const Data =[
  { id: '1', imageName:"assets/image21.jpg ", tags: '12 Aug 2022', info: 'Top Design Software',
  blog:"There are many design software programs available, and the best one for you will depend on your specific needs and design goals. Some popular design software "},
  { id: '2', imageName:"assets/image22.jpeg ", tags: '11 Jan 2023', info: 'Take a tour of my office', more: "More Info",
  blog:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, porro rem quod illo quam, eum alias id, repellendus magni, quas.'},
  { id: '3', imageName:"assets/image23.jpeg ", tags: '20 Dec 2022', info: 'How i became a Web Designer', more: "More Info",
  blog:"Becoming a web developer typically involves learning how to build and maintain websites and web applications. Here are some steps you can take to start your journey as a web developer:"},
  { id: '5', imageName:"assets/image25.jpeg ", tags: '15 Feb 2023', info: 'How to work from home', more: "More Info",
  blog:"Working from home can be a great way to increase productivity and flexibility, but it can also be challenging to adjust to if you're not used to it. Here are some tips for working from home effectively:"},
  { id: '18', imageName:"assets/image24.jpeg ", tags: '11 March 2023', info: 'Importance of website', more: "More Info" ,
  blog:"Having a website is important for any business or organization because it provides a way for people to learn about your products, services, or cause and to get in touch with you. "},
  { id: '17', imageName:"assets/image26.jpeg ", tags: '21 June 2023', info: 'Modern Web Design Framework', more: "More Info", 
  blog:"There are many modern web design frameworks available that can make it easier to create responsive, user-friendly websites. Some popular frameworks include"},
]

function Blog() {

  return (
    <>
    <div>
    <div className='blog-bg'>
        <div className="blog-head">
            <p>Check out my latest blog posts</p>
            <p className="blogme">Blogs</p>
            <hr className="horilinea"></hr>
        </div>

        <div className='whole'>
      <div className='data'>
        {Data.map(el =>
        <div key={el.id} className='blogcard'>
          <div className="date" key={el.imageName}>
           {el.tags}
          </div>
          <img className='rilimg' src={el.imageName} alt="story" />
          <div className="blogdetails" >
           <div className="blogtitle">
           {el.info}
           </div>
           <div className="mainblog">
            {el.blog}
           </div>
          </div>
        </div>)}
      </div>
      
    </div>
    </div>
  
    </div>
    </>
  )
}

export default Blog;
