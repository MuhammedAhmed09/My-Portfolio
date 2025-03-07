import React from 'react'
import { AiFillInstagram } from 'react-icons/ai'
import { FaFacebook, FaGithub, FaGlobe, FaPhone } from 'react-icons/fa'
import { IoLocationSharp } from 'react-icons/io5'
import { MdEmail } from 'react-icons/md'
import { RiInstagramFill } from 'react-icons/ri'

const Contact = () => {
  return (
    <div className='contact'>
      <p className='text-2xl font-bold text-[#80ed99]'>Contact Me</p>
      <div className='grid md:grid-cols-2'>
        <div className='md:w-2/3 flex flex-col items-center'>
          <i><FaPhone /></i>
          <b>Mobile Number</b>
          <p className='text-sm'>+20-10-9718-2681</p>
          <i><IoLocationSharp /></i>
          <b>Location</b>
          <p className='text-sm'>Egypt / Beheara / Abo-Hommos</p>
          <i><MdEmail /></i>
          <b>E-mail</b>
          <p className='text-sm'>muhammedahmedragab@gmail.com</p>
          <i><FaGlobe /></i>
          <b>Website</b>
          {/* <p className='text-sm'>+20-10-9718-2681</p> */}////*****
        </div>
        <div className='grid md:grid-cols-2 gap-4 xl:gap-x-30 justify-center'>
          <div>
            <ul className='flex justify-around bg-[#212529] rounded-3xl'>
              <li><a href="https://github.com/MuhammedAhmed09"><FaGithub /></a></li>
              <li><a href="https://www.facebook.com/19muhammad19"><FaFacebook /></a></li>
              <li><a href="https://www.instagram.com/b7r090/"><RiInstagramFill /></a></li>
            </ul>
          </div>
          <div>
            <p className='font-bold'>Send Me A Message</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact