import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div className='about w-full grid items-center text-left '>
      <div>
        <p className='text-2xl font-bold text-[#80ed99]'>About Me</p>
        <p className='font-bold'>I'm <span className='text-[#80ed99]'>Muhammed</span>, A <span className='text-[#80ed99]'>Front-End Developer</span></p>
        <p className='text-sm text-gray-300'>Self-taught Frontend Developer skilled in designing and developing modern user interfaces using HTML, CSS, JavaScript, React, Redux, Tailwind CSS, and Bootstrap. Experienced in data management with Firebase, and have completed several projects showcasing my ability to create smooth and responsive user experiences. You can explore my work by visiting Self-taught Frontend Developer skilled in designing and developing modern user interfaces using HTML, CSS, JavaScript, React, Redux, Tailwind CSS, and Bootstrap. Experienced in data management with Firebase, and have completed several projects showcasing my ability to create smooth and responsive user experiences. You can explore my work by visiting <span className='text-[#80ed99] inline-block hover:text-[20px]'><Link to='/service'>my projects</Link></span>.</p>       
      </div>
      <div className='details-about grid md:grid-cols-2'>
        <div className='table-about grid sm:grid-cols-2'>
          <ul>
            <li className='text-sm'><span className='text-[#80ed99] font-semibold'>Experiance</span>: 3+ Years</li> <hr/>
            <li className='text-sm'><span className='text-[#80ed99] font-semibold'>Avability</span>: 20/7</li> <hr/>
            <li className='text-sm'><span className='text-[#80ed99] font-semibold'>Age</span>: 20 </li> <hr/>
            <li className='text-sm'><span className='text-[#80ed99] font-semibold'>Language Used</span>: HTMl & JSX</li> <hr/>
          </ul>  
          <ul>
            <li className='text-sm'><span className='text-[#80ed99] font-semibold'>Country</span>: Egypt</li> <hr/>
            <li className='text-sm'><span className='text-[#80ed99] font-semibold'>Satisfied Clients</span>: +100</li> <hr/>
            <li className='text-sm'><span className='text-[#80ed99] font-semibold'>Phone</span>: +20-10-9718-2681 </li> <hr/>
            <li className='text-sm'><span className='text-[#80ed99] font-semibold'>Degree</span>: BIS</li> <hr/>
          </ul>  
        </div>   
        <div className='w-full'>
          <ul className='progress-bars'>
            <li>HTML</li> <hr className='after:w-[95%]'/>
            <li>CSS</li> <hr className='after:w-[75%]'/>
            <li>JavaScript</li> <hr className='after:w-[80%]'/>
            <li>Bootstrap & Tailwind</li> <hr className='after:w-[65%]'/>
            <li>React JS</li> <hr className='after:w-[85%]'/>
          </ul>
        </div>  
      </div>
    </div>
  )
}

export default About