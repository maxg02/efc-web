import React from 'react'
import logo from "@/assets/logo_isotipo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareFacebook, faSquareInstagram, faSquareYoutube } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <div className='p-10 flex justify-between items-center'>
        <img className="h-32" src={logo} alt="logo" />
        <div>
            Site Map
            <ul className='list-disc list-inside'>
                <li><a href="">Home</a></li>
                <li><a href="">Seccion2</a></li>
                <li><a href="">Seccion3</a></li>
            </ul>
        </div>
        <div className='w-0.75 bg-gray-600 self-stretch'/>
        <div className='flex flex-col gap-y-3'>
            <div className='w-35 h-auto aspect-16/8 bg-gray-400'></div>
            <div className='flex w-full gap-2'>
                <div className='aspect-square flex-1 bg-[#3b5998]'></div>
                <div className='aspect-square flex-1 bg-[#DD2a7b]'></div>
                <div className='aspect-square flex-1 bg-[#c4302b]'></div>
            </div>
            <span >Direccion</span>
        </div>
    </div>
  )
}

export default Footer