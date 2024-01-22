import React from 'react'
import { MdDeleteOutline } from "react-icons/md";

function ConsultationTable({Data}) {
 
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
                {
                    Data.map((elem)=>(

                        <tr className='border shadow-sm text-center'>
                        <td className='py-4 px-10'><MdDeleteOutline className='text-2xl text-red-500' /></td>
                        <td className='text-lg'>{elem.fromTime}</td>
                        <td className='text-lg'>{elem.toTime}</td>
                        <td className='text-lg'>{elem.consulationCharges}</td>
                        <td className='text-lg'>{elem.followUpcharges}</td>
                        <td className='text-lg'>{elem.active ? (
                        <button className='border-2 border-green-500 px-4 text-green-500 font-semibold pb-1  rounded-md'> Active</button>
                        ):(
                            <button className='border-2 border-red-500 px-4 text-red-500 font-semibold pb-1  rounded-md'> NO</button>
                        )}</td>
                        <td className='text-lg'>{elem.isFree === true ? 'Yes' : 'No'}</td>
                    </tr>
                        
                    ))
                }
               
               
            </tbody>
        </table>
    </div>
  )
}

export default ConsultationTable