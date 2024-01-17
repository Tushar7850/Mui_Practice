import React from 'react'
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




function Charges() {

//  const  PostObj={
//   formTime:'',
//   toTime:'',
//   consultationCharges:'',
//   followUpCharges:'',
//   isFree : false ,
//   }
   
//   const [userData,setUserData]=useState(PostObj)
   
  
  

  
  return (
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
          viewRenderers={{
            hours: renderTimeViewClock,
            minutes: renderTimeViewClock,
            seconds: renderTimeViewClock,
          }}
          />
      </DemoContainer>
    </LocalizationProvider>

    <TextField id="outlined-basic" label="Consulatation charges" variant="outlined" />
         
        
 
      
    
         </div>
         {/*  */}
        <div className='w-full flex flex-col gap-y-5'>
        <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="WeekDays">Week Days</InputLabel>
        <Select
          labelId="WeekDays"
          label="Week Days"
        >
          <MenuItem value={"Monday"}>Monday</MenuItem>
          <MenuItem value={"Tuesday"}>Tuesday</MenuItem>
          <MenuItem value={"Wednesday"}>Wednesday</MenuItem>
          <MenuItem value={"Thursday"}>Thursday</MenuItem>
          <MenuItem value={"Friday"}>Friday</MenuItem>
          <MenuItem value={"Saturday"}>Saturday</MenuItem>
          <MenuItem value={"Sunday"}>Sunday</MenuItem>
        </Select>
      </FormControl>
    </Box>
    {/*  */}
    <LocalizationProvider  dateAdapter={AdapterDayjs}>
      <DemoContainer components={["TimePicker"]}>
        <TimePicker
          label="To Time"
          className='w-full'
          viewRenderers={{
            hours: renderTimeViewClock,
            minutes: renderTimeViewClock,
            seconds: renderTimeViewClock,
          }}
        />
      </DemoContainer>
    </LocalizationProvider>

    {/*  */}
    <TextField id="outlined-basic" label="Follow up Charges" variant="outlined" />
 
        </div>
        {/*  */}

        <div className='w-full mt-[8%]'>
          <div className='flex mb-6 '>

      
        <FormControlLabel control={<Checkbox  />} label="Is Free" />
        <FormControlLabel control={<Checkbox  />} label="Follow Up Applicable" />
          </div>
          <div className='flex justify-between'>

        <FormControlLabel control={<Checkbox  />} label="Active" />
<div className='flex gap-x-2'>
  
<button className='border-2 border-red-500 py-2 px-4 text-xl font-semibold rounded-md text-red-500'>Reset</button>
        <button className='border-2 text-white border-indigo-900 py-2 px-4 text-xl font-semibold rounded-md bg-indigo-900'>Add</button>
</div>
        </div>
          </div>

        
    </div>
  )
}

export default Charges