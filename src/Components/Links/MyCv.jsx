import React from 'react';
import cv from "../../assets/Muhammad-Ahmad-FlowCV-Resume-20250222.pdf";

const MyCv = () => {
  return (
    <div className='w-full max-h-max myCv'>
      <iframe src={cv} className='w-full h-full'></iframe>
    </div>
  )
}

export default MyCv