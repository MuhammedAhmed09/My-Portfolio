import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='nav w-full grid md:grid-cols-2 gap-8 items-center text-left'>
      <div>
        <p className='font-bold text-2xl'>Hi! I'm <span className='text-[#80ed99]'>Muhammed</span>,</p>
        <p className='font-bold'>A <span className='text-[#80ed99]'>Front-End Developer</span></p>
        <p>Self-taught Frontend Developer skilled in designing and developing modern user interfaces using HTML, CSS, JavaScript, React, Redux, Tailwind CSS, and Bootstrap. Experienced in data management with Firebase, and have completed several projects showcasing my ability to create smooth and responsive user experiences. You can explore my work by visiting </p>
        <div>
          <button className='bg-[#1d8637] font-bold hover:bg-[#51861f]'><Link to='/contact'>Contact Me</Link></button>
        </div>        
      </div>
      <div className='side-image relative'>
        <div className='absolute right-7 top-0 rotate-[90deg]'>
          <hr className='w-[150px] h-[10px] border-none bg-[#80ed99] rounded-tr-sm rounded-br-sm'/>
          <hr className='w-[10px] h-[120px] rounded-bl-sm bg-[#80ed99] border-none rounded-br-sm'/>
        </div>
        <img src="\Image\B7R.jpg" className='w-[90%]' alt="My-Photo"/>
        <div className='absolute -left-5 bottom-0 rotate-[-90deg]'>
          <hr className='w-[150px] h-[10px] border-none bg-[#80ed99] rounded-tr-sm rounded-br-sm'/>
          <hr className='w-[10px] h-[120px] rounded-bl-sm bg-[#80ed99] border-none rounded-br-sm'/>
        </div>
      </div>
    </div>
  )
}

export default Home