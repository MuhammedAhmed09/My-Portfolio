import React from 'react';
import cv from "../../assets/Muhammad-Ahmad-FlowCV-Resume-20250222.pdf";

const MyCv = () => {
  return (
    <section className='w-full max-h-max myCv'>
      <iframe src={cv} className='w-full h-full'></iframe>
    </section>
  )
}

export default MyCv