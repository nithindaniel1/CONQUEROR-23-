import { Button, FormControl, FormControlLabel, MenuItem, Radio, RadioGroup, Select, TextField } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dayjs from 'dayjs';
import React, { useState } from 'react';

function AppointmentFormPage() {
  const [date, setDate] = useState(dayjs(new Date()));

  return (
    <main className='bg-disabled min-h-screen flex justify-center items-center p-16'>
      <div className='rounded-xl bg-white w-[60%] flex justify-center items-center flex-col space-y-4 p-16'>
        <div className='w-[100%] space-y-4'>
          <h1 className='font-[500] text-primary text-3xl text-center mb-5'>Appointment Form</h1>
          <div className='space-y-1 flex flex-col'>
            <label htmlFor="fullName" className='text-sm font-semibold'>Full Name</label>
            <TextField id='fullName' variant="outlined" size='small' />
          </div>
          <div className='space-y-1'>
            <FormControl>
              <label htmlFor="demo-radio-buttons-group-label" className='text-sm font-semibold'>Gender</label>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="female"
                name="radio-buttons-group"
                style={{
                  flexDirection: "row"
                }}
              >
                <FormControlLabel value="female" control={<Radio />} label="Female" />
                <FormControlLabel value="male" control={<Radio />} label="Male" />
              </RadioGroup>
            </FormControl>
          </div>
          <div className='space-y-1 flex flex-col'>
            <label htmlFor="age" className='text-sm font-semibold'>Age</label>
            <TextField id='age' variant="outlined" size='small' type="number" />
          </div>
          <div className='space-y-1 flex flex-col'>
            <label htmlFor="phoneNumber" className='text-sm font-semibold'>Phone Number</label>
            <TextField id='phoneNumber' variant="outlined" size='small' type="tel" />
          </div>
          <div className='space-y-1 flex flex-col'>
            <label htmlFor="email" className='text-sm font-semibold'>Email</label>
            <TextField id='email' variant="outlined" size='small' type="email" />
          </div>
          <div className='space-y-1 flex flex-col'>
            <label htmlFor="department-select-label" className='text-sm font-semibold'>Department</label>
            <Select
              labelId="department-select-label"
              id="department-select"
              size='small'
              defaultValue={10}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </div>
          <div className='space-y-1 flex flex-col'>
            <label htmlFor="doctorName" className='text-sm font-semibold'>Doctor Name</label>
            <TextField id='doctorName' variant="outlined" size='small' />
          </div>
          <div className='space-y-1 flex flex-col'>
            <label htmlFor="appointmentDate" className='text-sm font-semibold'>Appointment Date</label>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DesktopDatePicker
                value={date}
                onChange={setDate}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
          </div>
          <div className='space-y-1 flex flex-col'>
            <label htmlFor="appointmentTime" className='text-sm font-semibold'>Appointment Time</label>
            <Select
              labelId="department-select-label"
              id="department-select"
              size='small'
              defaultValue={10}
            >
              <MenuItem value={10}>10:00 AM</MenuItem>
              <MenuItem value={20}>3:00 PM</MenuItem>
              <MenuItem value={30}>7:00 PM</MenuItem>
            </Select>
            {/* <TextField id='appointmentTime' variant="outlined" size='small' /> */}
          </div>


          <div className='space-y-1 flex flex-col'>
            <label htmlFor="doctorfee" className='text-sm font-semibold'>Doctor Fee</label>
            <TextField id='doctorfee' variant="outlined" size='small' />
          </div>
          <Button variant="contained" className='w-full'>Pay</Button>
        </div>
      </div>
    </main>
  )
}

export default AppointmentFormPage