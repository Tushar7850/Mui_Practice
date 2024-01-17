import React from 'react'
// 
import Select from 'react-select'
// 
import Department from './Department'
import Charges from './Charges'
import ConsultationTable from './ConsultationTable'

function ConsultationCharges() {

    const options = [
        { value: 'Allience Multispeciality Hospital', label: 'Allience Multispeciality Hospital' },
       
      ]
  return (
    <section  >
      <main className='flex gap-2 '>

     <div className='w-[28%] mt-5 pl-5'>
          <Select options={options}  defaultValue={options[0]} />
          <Department/>
    </div>
    <div className='w-[75%] flex flex-col gap-10 mx-5'>
      <Charges/>
      <ConsultationTable/>
    </div>
    </main>
    <div className='flex justify-end mt-10 mr-10'>
  <button className='bg-green-800 text-white px-4 py-2 font-bold rounded-md'>Save</button>
    </div>
    </section>
  )

}

export default ConsultationCharges