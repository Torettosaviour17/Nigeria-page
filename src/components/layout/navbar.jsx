import React from 'react'
import { logo } from '../../images/index.js'

export default function navbar() {
  return (
    <div className='flex justify-between px-20 p-3 items-center'>
      <div>
        <img src={logo} alt="Logo" />
      </div>
      <div>
        <ul className='flex gap-7 '>
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
