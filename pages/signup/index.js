import React from 'react';
import TextField from '@mui/material/TextField';
import Image from 'next/image'
import reelslogo from '../../assets/reels.jpg'
import { Button } from '@mui/material';

function index() {
  return (
    <div className='signup-container'>
        <div className='signup-card'>
        <Image src={reelslogo} />
        <TextField id="outlined-basic" fullWidth size='small' margin='dense' label="Email" variant="outlined" />
        <TextField id="outlined-basic" fullWidth size='small' margin='dense' label="Password" type="password" variant="outlined" />
        <TextField id="outlined-basic" fullWidth size='small' margin='dense' label="Full Name" variant="outlined" />
        <Button variant="outlined" fullWidth component="label" style={{marginTop:'1rem'}} >
            <input type="file" accept="image/*" style={{display:'none'}} />
            Upload
        </Button>
        <Button variant="contained" fullWidth component="span" style={{marginTop:'1rem'}} >
            Sign Up
        </Button>
        </div>
        <div className='bottom-card' >
            Already have an account?
            <span style={{color:'blue'}}>
                Login
            </span>
        </div>
        
    </div>
  )
}

export default index