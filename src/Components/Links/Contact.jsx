import React from 'react'
import { FaFacebook, FaGithub, FaGlobe, FaPhone } from 'react-icons/fa'
import { IoLocationSharp } from 'react-icons/io5'
import { MdEmail } from 'react-icons/md'
import { RiInstagramFill } from 'react-icons/ri'
import Swal from 'sweetalert2'

const Contact = () => {

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "708bc748-2ea4-40c1-afd8-dd7d6e3104d8");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
        },
        body: json
    }).then((res) => res.json());

    if (res.success) {
        Swal.fire({
          position: "top-end",
          title: 'Success!',
          text: 'Message sent successfully!',
          icon: 'success',
          showConfirmButton: false,
          timer: 1500
        });
        event.target.reset();
    }
};


  return (
    <div className='contact'>
      <p className='text-2xl place-self-center p-contact font-bold text-[#80ed99]'>Contact Me</p>
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
          <p className='text-sm'><a href="https://muhammed-ahmed.vercel.app/" target="_blank">My Portfolio</a></p>
        </div>
        <div>

          <div className='grid md:grid-cols-2 gap-4 xl:gap-x-30 justify-center'>
            <div>
              <ul className='flex justify-around bg-[#212529] rounded-3xl'>
                <li><a href="https://github.com/MuhammedAhmed09" target="_blank"><FaGithub /></a></li>
                <li><a href="https://www.facebook.com/19muhammad19" target="_blank"><FaFacebook /></a></li>
                <li><a href="https://www.instagram.com/b7r090/" target="_blank"><RiInstagramFill /></a></li>
                <li><a href="https://muhammed-ahmed.vercel.app/" target="_blank"><FaGlobe /></a></li>
              </ul>
            </div>
            <div>
              <p className='font-bold'>Send Me A Message</p>
            </div>
          </div>

          <div>
            <form action="_target" onSubmit={onSubmit}>
              <div className='personal-input flex'>
                <input className='input-1' placeholder='Name' type="text" name='name' required/>
                <input className='input-2' placeholder='E-mail' name='email' type='text' required/>
              </div>
              <div>
                <textarea className='w-[100%] min-h-80' name='message' required/>
              </div>
              <div>
               <input className='submit' type='submit'/>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact