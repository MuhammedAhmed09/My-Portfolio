import React, { useState } from 'react'
import { AiFillMessage } from 'react-icons/ai';
import { FaBars, FaUser } from 'react-icons/fa';
import { FaBarsStaggered, FaPhotoFilm } from 'react-icons/fa6';
import { IoMdClose } from 'react-icons/io';
import { MdHome } from 'react-icons/md';
import { Link } from 'react-router-dom';

const SideNav = () => {
    const Links = [
        { id: 1, icon: <MdHome />, page: "Home", path: "/" },
        { id: 2, icon: <FaUser />, page: "About Me", path: "/about" },
        { id: 4, icon: <FaBarsStaggered />, page: "Services", path: "/service" },
        { id: 5, icon: <FaPhotoFilm />, page: "Gallery", path: "/gallery" },
        { id: 3, icon: <AiFillMessage />, page: "Contact Me", path: "/contact" },
      ];
    
      const [selectIndex, setSelectIndex] = useState(0);
      const [isOpen, setIsOpen] = useState(false);
    
      return (
        <div className='sideNav'>
            <div className='bars'>
            {!isOpen ? (<i onClick={() => setIsOpen(true)}><FaBars /></i>) : (<i onClick={() => setIsOpen(false)}><IoMdClose /></i>)}
            </div>
            {Links.length === 0 && <p>Nav not found</p>}
            <ul className={isOpen ? "show" : "hide"}>
                {Links.map((link, index) => 
                <li key={link.id}><Link className={selectIndex === index ? "active" : ""} onClick={() => setSelectIndex(index)} to={link.path} ><p>{link.icon}</p><p>{link.page}</p> </Link> <hr /></li>
                )}
            </ul>
        </div>
      )
    }

export default SideNav