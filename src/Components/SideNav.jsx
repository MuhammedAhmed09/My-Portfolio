import { useState } from 'react'
import { AiFillMessage } from 'react-icons/ai';
import { FaBars, FaUser } from 'react-icons/fa';
import { FaBarsStaggered, FaPhotoFilm } from 'react-icons/fa6';
import { IoMdClose } from 'react-icons/io';
import { MdHome } from 'react-icons/md';
import { Link } from 'react-router-dom';

const SideNav = () => {
  const [selectIndex, setSelectIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const Links = [
      { id: 1, icon: <MdHome />, page: "Home", path: "/" },
      { id: 2, icon: <FaUser />, page: "About Me", path: "/about" },
      { id: 4, icon: <FaBarsStaggered />, page: "C.V", path: "/my-cv" },        
      { id: 3, icon: <AiFillMessage />, page: "Contact Me", path: "/contact" },
    ];
  
    return (
    <>
    <div onClick={() => setIsOpen(false)} className= {isOpen? 'openSideNav' : 'sideNav'}>
      {Links.length === 0 && <p>Nav not found</p>}
      <ul className={isOpen ? "show" : "hide"}>
          {Links.map((link, index) => 
          <li key={link.id}><Link className={selectIndex === index ? "active" : ""} onClick={() => setSelectIndex(index)} to={link.path} ><p>{link.icon}</p><p>{link.page}</p> </Link> <hr /></li>
          )}
      </ul>
    </div> 
    <div className='bars'>
      <p className='barIcons'>
        {!isOpen ? (<FaBars onClick={() => setIsOpen(true)} />) : (<IoMdClose onClick={() => setIsOpen(false)}/>)}
      </p>
    </div>
    </>
    )
  }

export default SideNav