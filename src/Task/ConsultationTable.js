import React from 'react'
import { MdDeleteOutline } from "react-icons/md";

function ConsultationTable() {
  return (
    <div className='w-full h-3/4 border-2 '>
        <table className='border-2 shadow-md rounded-md w-full '  >
            <thead>
                <tr className='bg-blue-200 '>
                    <th className='py-4 px-10'>Action</th>
                    <th className='py-4 px-10'>From Time</th>
                    <th className='py-4 px-10'>To Time</th>
                    <th className='py-4 px-10'> Consultation Charges</th>
                    <th className='py-4 px-10'> Follow Up  Charges</th>
                    <th className='py-4 px-10'>Active</th>
                    <th className='py-4 px-10'>Is Free</th>
                </tr>
            </thead>
            <tbody>
                <tr className='border shadow-sm text-center'>
                    <td className='py-4 px-10'><MdDeleteOutline className='text-2xl text-red-500' /></td>
                    <td className='text-lg'>9:00 AM</td>
                    <td className='text-lg'>3:00 PM</td>
                    <td className='text-lg'>350</td>
                    <td className='text-lg'>0</td>
                    <td className='text-lg'><button className='border-2 border-green-500 px-4 text-green-500 font-semibold pb-1  rounded-md'> Active</button></td>
                    <td className='text-lg'>No</td>
                </tr>
                <tr >
                    <td className='py-4 px-10'><MdDeleteOutline className='text-xl text-red-500' /></td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default ConsultationTable