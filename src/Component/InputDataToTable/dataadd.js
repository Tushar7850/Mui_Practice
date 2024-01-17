import React from "react";
import TextField from "@mui/material/TextField";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import CloseIcon from "@mui/icons-material/Close";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import TableData from "./table";

function Adddata() {
  

  const postObj = {
    "suffix":"",
    "firstname":"",
    "middlename":"",
    "lastname":"",
    "email": "",
    "phone": "",
    "Age":"",
    "Gender":"",
    "Date":""
  }
  const [value, setvalue] = React.useState(postObj)
  const[alldata,setalldata]= React.useState([])
  
  const [closebutton,setclosebutton]=React.useState(false)
  

  const handlechange =(e)=>{
 
    setvalue({...value,[e.target.name]: e.target.value})
      }

      const getdata =()=>{
        setalldata([ ...alldata,value])
        setclosebutton(false)     
      }

  return (
    
    <div className="w-1/2 ml-64 border mt-20 p-2">

      <div className="flex justify-end bg-purple-300 p-2">
         { closebutton ?
         <div className="flex  " >
          <h1 className="text-lg font-bold text-purple-900 mr-2"> Close Form  </h1>

           <button onClick={()=>setclosebutton(false)}><CloseIcon sx={{ color: "white" }} fontSize="large" /> </button>
         </div>
          :
        <div className="flex  " >
          <h1 className="text-lg font-bold text-purple-900 mr-2">Open Form</h1>

          <button onClick={()=>setclosebutton(true)}><AddCircleOutlineIcon sx={{ color: "white" }} fontSize="large" /></button>  
        </div>
          }

      </div>
      

      { closebutton ? 
      
      <div className="bg-purple-50 p-4 ">
      <div className="flex justify-between ">

      <Box sx={{ minWidth: 80 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Mr.</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="mr"
          onChange={handlechange}
          name="suffix"
          
        >
          <MenuItem value="Ms." >Mr.</MenuItem>
          <MenuItem value="Mrs." >Mrs.</MenuItem>
          <MenuItem value="Mss" >Mss.</MenuItem>
       
        </Select>
      </FormControl>
     </Box>




        <TextField  className="w-48" onChange={handlechange} name="lastname" label="Last Name" variant="outlined" />
         <TextField  className="w-48 m-10" onChange={handlechange} name="firstname" label="First Name" variant="outlined" />
        <TextField  className="w-48" onChange={handlechange} name="middlename"  label="Middle Name" variant="outlined" />
         </div> <br />
      <div className="flex justify-between  mr-10 ">

        <TextField  className="w-48 " onChange={handlechange} name="phone" label="Mobile No" variant="outlined" />
        <TextField className="w-48 " onChange={handlechange} name="email" label="E-Mail" variant="outlined" />
        <TextField className="w-14" onChange={handlechange} name="Age" label="Age" variant="outlined" />

        <div>
          <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
          
            name="Gender"
            onChange={handlechange}
            
          >
            <FormControlLabel value="Male" control={<Radio />} label="Male" />
            <FormControlLabel value="Female" control={<Radio />} label="Female" />
            <FormControlLabel value="Other" control={<Radio />} label="Other" />
          </RadioGroup>
        </div>

        </div> <br /> 

<div className="flex ">

<div>
          
          <label> <h1 className="text-lg font-semibold">Hobbies : </h1></label>
          <FormControlLabel control={<Checkbox  />} label="Writing" />
          <FormControlLabel control={<Checkbox  />} label="Reading" />
          <FormControlLabel control={<Checkbox  />} label="Cycling" />
          <FormControlLabel control={<Checkbox  />} label="Running" /> 
  
          </div>
           
  <div>
    
  <LocalizationProvider  dateAdapter={AdapterDayjs}>
        <DemoContainer  components={['DatePicker']}>
          <DatePicker  label="Basic date picker" />  
        </DemoContainer>
      </LocalizationProvider>
  
  </div>
          
         
  
  
  
</div>
<br />
<div className="flex justify-end mr-10">

          <button  onClick={getdata} className="bg-blue-600 text-white border-2 border-blue-800 font-semibold px-4 py-2 rounded-full">SAVE</button>
</div>
       
      </div>
      :null   }


      <div className=" border-2 mt-12">
      <div className="flex justify-end">
        <button onClick={()=>setclosebutton(true)} className="bg-blue-500 p-2 text-white rounded-lg m-2 ">Add Data</button>
      </div>

       <TableData name={alldata}/>
      </div>





    </div>
  );  
}

export default Adddata;
