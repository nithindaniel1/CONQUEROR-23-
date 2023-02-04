import { Button, TextField } from '@mui/material'
import React from 'react'
import { LOGIN_PAGE } from '../../config/routes'

function SignupPage() {
  return (
    <main className='bg-disabled min-h-screen flex justify-center items-center'>
      <div className='rounded-xl bg-white w-[40%] flex justify-center items-center flex-col space-y-4 p-16'>
        <div className='w-[100%] space-y-4'>
          <h1 className='font-[500] text-primary text-3xl'>Create Account</h1>
          <h1 className='text-secondary mt-2'>Sign up for new account</h1>
          <div className='space-y-1 flex flex-col'>
            <label htmlFor="fullName" className='text-sm font-semibold'>Full Name</label>
            <TextField id='fullName' variant="outlined" size='small' />
          </div>
          <div className='space-y-1 flex flex-col'>
            <label htmlFor="email" className='text-sm font-semibold'>Email or Phone</label>
            <TextField id='email' variant="outlined" type="email" size='small' />
          </div>
          <div className='space-y-1 flex flex-col'>
            <label htmlFor="password" className='text-sm font-semibold'>Password</label>
            <TextField id='password' variant="outlined" type="password" size='small' />
          </div>
          <div className='space-y-1 flex flex-col'>
            <label htmlFor="confirmPassword" className='text-sm font-semibold'>Confirm Password</label>
            <TextField id='confirmPassword' variant="outlined" type="password" size='small' />
          </div>
          <Button variant="contained" className='w-full'>Sign up</Button>
          <div className='text-center'>
            <p className='text-secondary text-[0.86em]'>Already have an account? <Button href={LOGIN_PAGE}>
              <label className='font-[600] text-[0.88em]'>Sign in</label>
            </Button></p>
          </div>
        </div>
      </div>
    </main>
  )
}

export default SignupPage