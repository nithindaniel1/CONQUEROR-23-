import { Button, Card, CardContent, IconButton } from '@mui/material'
import React from 'react'
import { IoAddCircleOutline } from "react-icons/io5"
import { Link } from 'react-router-dom'
import { APPOINTMENT_FORM_PAGE } from '../../config/routes'

function HomePage() {
  const columns = [
    { field: "tokenNumber", headerName: "Token Number", width: 150 },
    {
      field: "name",
      headerName: "Name",
      width: 250,
      editable: true,
    },
    {
      field: "gender",
      headerName: "Gender",
      width: 150,
      editable: true,
    },
    {
      field: "age",
      headerName: "Age",
      width: 110,
      editable: true,
    },
    {
      field: "phoneNumber",
      headerName: "Phone Number",
      width: 250,
      editable: true,
    },
    {
      field: "email",
      headerName: "Email",
      width: 250,
      editable: true,
    },
  ];

  const rows = [
    {
      id: 1,
      tokenNumber: 1,
      name: "Snow",
      gender: "Jon",
      age: 35,
      phoneNumber: "Jon",
      email: "Jon",
    },
    {
      id: 1243,
      tokenNumber: 1,
      name: "Snow",
      gender: "Jon",
      age: 35,
      phoneNumber: "Jon",
      email: "Jon",
    },
    {
      id: 431,
      tokenNumber: 1,
      name: "Snow",
      gender: "Jon",
      age: 35,
      phoneNumber: "Jon",
      email: "Jon",
    },
    {
      id: 15,
      tokenNumber: 1,
      name: "Snow",
      gender: "Jon",
      age: 35,
      phoneNumber: "Jon",
      email: "Jon",
    },
    {
      id: 2351,
      tokenNumber: 1,
      name: "Snow",
      gender: "Jon",
      age: 35,
      phoneNumber: "Jon",
      email: "Jon",
    },
    {
      id: 51,
      tokenNumber: 1,
      name: "Snow",
      gender: "Jon",
      age: 35,
      phoneNumber: "Jon",
      email: "Jon",
    },
    {
      id: 23421,
      tokenNumber: 1,
      name: "Snow",
      gender: "Jon",
      age: 35,
      phoneNumber: "Jon",
      email: "Jon",
    },
    {
      id: 541,
      tokenNumber: 1,
      name: "Snow",
      gender: "Jon",
      age: 35,
      phoneNumber: "Jon",
      email: "Jon",
    },
  ];

  return (
    <main className='bg-disabled min-h-screen flex justify-center p-16'>
      <div className='rounded-xl bg-white w-[80%] flex items-center flex-col p-16 min-h-[50vh]'>
        <div className='text-center'>
          <p className='text-secondary text-[0.82em]'>Press the below button to book an<br /> appointment with doctor</p>
          <Link to={APPOINTMENT_FORM_PAGE}>
            <IconButton color="primary">
              <IoAddCircleOutline size={35} />
            </IconButton>
          </Link>
        </div>
        <div className='mt-8 w-full flex flex-col space-y-3 items-center'>
          <Card style={{ width: "70%" }} variant="outlined">
            <CardContent className='space-y-4'>
              <h3 className='text-xl font-semibold text-center'>Doctor Koottakaaran</h3>
              <div>
                <div className='flex justify-between items-center'>
                  <p className='text-secondary text-sm'>Date: 12-02-2022</p>
                  <p className='text-secondary text-sm'>Dept: Skin</p>
                </div>
                <div className='flex justify-between items-center'>
                  <p className='text-secondary text-sm'>Time: 10:00PM</p>
                  <p className='text-secondary text-sm'>Token No: 15</p>
                </div>
              </div>
              <div className='text-center'><Button variant="contained" size='small'>View Appointment</Button></div>
            </CardContent>
          </Card>
          <Card style={{ width: "70%" }} variant="outlined">
            <CardContent className='space-y-4'>
              <h3 className='text-xl font-semibold text-center'>Doctor Koottakaaran</h3>
              <div>
                <div className='flex justify-between items-center'>
                  <p className='text-secondary text-sm'>Date: 12-02-2022</p>
                  <p className='text-secondary text-sm'>Dept: Skin</p>
                </div>
                <div className='flex justify-between items-center'>
                  <p className='text-secondary text-sm'>Time: 10:00PM</p>
                  <p className='text-secondary text-sm'>Token No: 15</p>
                </div>
              </div>
              <div className='text-center'><Button variant="contained" size='small'>View Appointment</Button></div>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  )
}

export default HomePage;
