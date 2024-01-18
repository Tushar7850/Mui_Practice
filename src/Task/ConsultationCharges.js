import React from 'react'
// 
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
// 
// 
import Department from './Department'
import Charges from './Charges'
// import ConsultationTable from './ConsultationTable'

function ConsultationCharges() {

    
  return (
    <section  >
      <h2 className='text-2xl text-indigo-800 font-bold text-center mt-5 '>Manage Consultationm Charges</h2>
      <main className='flex gap-2 '>

     <div className='w-[28%] mt-10 pl-5 '>
     <FormControl fullWidth>
        <InputLabel id="Unit">Tariff</InputLabel>
        <Select
          labelId="Unit"
          defaultValue={10}
         
          label="Unit"
        >
          <MenuItem value={10}>llience Multispeciality Hospital</MenuItem>
        </Select>
      </FormControl>
          
          <Department/>
    </div>
    <div className='w-[75%] flex flex-col gap-10 mx-5'>
      <Charges />
      {/* <ConsultationTable /> */}
    </div>
    </main>
    <div className='flex justify-end mt-10 mr-10'>
  <button className='bg-green-800 text-white px-4 py-2 font-bold rounded-md'>Save</button>
    </div>
    </section>
  )

}

export default ConsultationCharges