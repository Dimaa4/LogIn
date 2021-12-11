import React from 'react';
import { SignUpInputs } from '../components/SignUpInputs';
import { Button } from '@mui/material';
import { onClickSignUp } from '../scripts/onClickSignUp';
export const SignUp = ()=>{
    return(
        <div className='container'>
            <h1>Sign-Up</h1>
            <p className='prescription'>Please tell us a little about yourself</p>
            <hr/>
            <div className='formInputs'>
                <SignUpInputs/>
                <br /> 
                <div className='buttons'>
                    <Button sx={{width:200}} onClick={onClickSignUp} variant="contained" size="large" margin="dense">
                        Sign-Up
                    </Button>
                    <Button variant="outlined" size="large" sx={{width:200}}>
                        Cancel
                    </Button>
                </div>
                
            </div>
            
        </div>

    )
}