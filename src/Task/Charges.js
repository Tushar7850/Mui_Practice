import React, { useState } from 'react'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
// 

import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { renderTimeViewClock } from "@mui/x-date-pickers/timeViewRenderers";
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import ConsultationTable from './ConsultationTable';




function Charges() {

  const d = new Date();
  const day = d.getDay();


  const PostObj ={
    fromTime:'',
    toTime:'',
    consulationCharges:'',
    followUpcharges:'',
    isFree: false ,

  }

  const [postData, setpostData] = useState(PostObj)

  const [Data,setData] = useState([])

   
 const HandleChange = (event)=>{
  const { name, value, checked, type } = event.target;
    setpostData({...postData,[name]: type === 'checkbox' ? checked  : value})
    console.log(postData)
 }

 const AddFromTime =(e)=>{
setpostData({...postData,"fromTime":e.format("HH:MM A")})
console.log(postData);

 }

 const AddToTime =(e)=>{
setpostData({...postData,"toTime":e.format("HH:MM A")})
console.log(postData);
 }

 
  const HandleSubmit = ()=>{
    setData([...Data,postData])
  }



  
  

  
  return (
    <section>

   
    <div className='flex justify-between w-full gap-5 mt-10' >
      {/*  */}
        <div className='w-full flex flex-col gap-y-5'>
         <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="Tariff">Tariff</InputLabel>
        <Select
          labelId="Tariff"
         
          label="Tariff"
        >
          <MenuItem value={10}>Hospital</MenuItem>
        </Select>
      </FormControl>
    </Box>

    


    <LocalizationProvider  dateAdapter={AdapterDayjs}>

      
      <DemoContainer components={["TimePicker"]}>
        <TimePicker
          label="From Time"
          sx={{width:"100%"}}
          onChange={AddFromTime}
          viewRenderers={{
            hours: renderTimeViewClock,
            minutes: renderTimeViewClock,
            seconds: renderTimeViewClock,

          }}
          />
      </DemoContainer>
    </LocalizationProvider>

    <TextField id="outlined-basic" label="Consulatation charges" name='consulationCharges' value={postData.consulationCharges} onChange={HandleChange} variant="outlined" />
         
        
 
      
    
         </div>
         {/*  */}
        <div className='w-full flex flex-col gap-y-5'>
        <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="WeekDays">Week Days</InputLabel>
        <Select
          labelId="WeekDays"
          label="Week Days"
          defaultValue={day}
        
        >
          <MenuItem value={1}>Monday</MenuItem>
          <MenuItem value={2}>Tuesday</MenuItem>
          <MenuItem value={3}>Wednesday</MenuItem>
          <MenuItem value={4}>Thursday</MenuItem>
          <MenuItem value={5}>Friday</MenuItem>
          <MenuItem value={6}>Saturday</MenuItem>
          <MenuItem value={7}>Sunday</MenuItem>
        </Select>
      </FormControl>
    </Box>
    {/*  */}
    <LocalizationProvider  dateAdapter={AdapterDayjs}>
      <DemoContainer components={["TimePicker"]}>
        <TimePicker
          label="To Time"
          className='w-full '
          onChange={AddToTime}
          viewRenderers={{
            hours: renderTimeViewClock,
            minutes: renderTimeViewClock,
            seconds: renderTimeViewClock,
          }}
        />
      </DemoContainer>
    </LocalizationProvider>

    {/*  */}
    <TextField id="outlined-basic" label="Follow up Charges" name='followUpcharges' value={postData.followUpcharges} onChange={HandleChange}  variant="outlined" />
 
        </div>
        {/*  */}

        <div className='w-full mt-[8%]'>
          <div className='flex mb-6 '>

      
        <FormControlLabel control={<Checkbox checked={postData.isFree} name='isFree' onChange={HandleChange} />} label="Is Free" />
        <FormControlLabel control={<Checkbox  />} label="Follow Up Applicable" />
          </div>
          <div className='flex justify-between'>

        <FormControlLabel control={<Checkbox  />} label="Active" />
<div className='flex gap-x-2'>
  
<button className='border-2 border-red-500 py-2 px-4 text-xl font-semibold rounded-md text-red-500'>Reset</button>
        <button type='button' onClick={HandleSubmit} className='border-2 text-white border-indigo-900 py-2 px-4 text-xl font-semibold rounded-md bg-indigo-900'>Add</button>
</div>
        </div>
          </div>


    </div>
          <ConsultationTable Data={Data}/>

        
    </section>
  )
}

export default Charges