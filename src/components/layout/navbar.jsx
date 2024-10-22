import React from 'react'
import { logo } from '../../images/index.js'

export default function navbar() {
  return (
    <div className=' w-full flex justify-between px-5 lg:px-20 md:p-3 items-center'>
      <div>
        <img className='scale-50 sm  sm:scale-75 md:scale-90 lg:scale-100 xl:scale-auto' src={logo} alt="Logo" />
      </div>
      <div>
        <ul className='gap-7 hidden md:flex'>
            <li className='hover:text-[#B4020A] text-[16px] font-semibold text-[#1034A6]'>
                Home
            </li>
            <li className='hover:text-[#B4020A] text-[16px] font-semibold text-[#1034A6]'>
                Who are we
            </li>
            <li>
                <select name="" id="" className='hover:text-[#B4020A] text-[16px] font-semibold text-[#1034A6]'>
                    <option value="">subject</option>
                </select>
            </li>
        </ul>
      </div>
    </div>
  )
}
