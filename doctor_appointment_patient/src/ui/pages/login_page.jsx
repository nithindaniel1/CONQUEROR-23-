import { Button, TextField } from '@mui/material'
import React from 'react'
import { SIGNUP_PAGE } from '../../config/routes'

function LoginPage() {
  return (
    <main className='bg-disabled min-h-screen flex justify-center items-center'>
      <div className='rounded-xl bg-white w-[40%] flex justify-center items-center flex-col space-y-4 p-16'>
        <div className='w-[100%] space-y-4'>
          <h1 className='font-[500] text-primary text-3xl'>Welcome back</h1>
          <h1 className='text-secondary mt-2'>Welcome back! Please enter your details</h1>
          <div className='space-y-1 flex flex-col'>
            <label htmlFor="email" className='text-sm font-semibold'>Email</label>
            <TextField id='email' variant="outlined" type="email" size='small' />
          </div>
          <div className='space-y-1 flex flex-col'>
            <label htmlFor="password" className='text-sm font-semibold'>Password</label>
            <TextField id='password' variant="outlined" type="password" size='small' />
          </div>
          <Button variant="contained" className='w-full'>Sign in</Button>
          <div className='text-center'>
            <p className='text-secondary text-[0.86em]'>Don't have an account? <Button href={SIGNUP_PAGE}>
              <label className='font-[600] text-[0.88em]'>Sign up</label>
            </Button></p>
          </div>
        </div>
      </div>
    </main>
  )
}

export default LoginPage