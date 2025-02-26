import React from 'react'
import { Link } from 'react-router-dom';
import { FaWhatsapp,FaFacebook, FaTwitter } from "react-icons/fa";
function Youtube() {
  return (
    <div >
        <div className='flex mt-2'>
            <div>Hindi News <span>/</span><span>Video</span></div>
        </div>
        <div className=''>
            <div><h2 className='text-bold font-bold'>Video</h2></div>
            <div className='flex justify-end '>
            <ul>
                <li><FaWhatsapp className='bg-green-600 rounded-4xl size-8' /></li>
                <li><FaFacebook className='  size-8' /></li>
                <li><FaTwitter  className='  size-8'/></li>
            </ul>
            </div>
        </div>


    </div>
  )
}

export default Youtube