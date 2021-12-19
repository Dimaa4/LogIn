import React from 'react';
import { SignUpInputs } from '../components/SignUpInputs';
import { Button } from '@mui/material';
import { onClickSignUp } from '../scripts/onClickSignUp';
import { Link, Navigate, useNavigate } from 'react-router-dom';
export const SignUp = ({navig})=>{
    const navigate = useNavigate();
    const onClickReg =()=>{
        onClickSignUp()
        .then(res=>{
            if ( res ){
                navigate('/login')
            }
            else{
                console.log(false) 
            }
        }) 
    }
    return(
        <>
        {navig && <Navigate to="/"/>}
            <h1>Sign-Up</h1>
            <p className='prescription'>Please tell us a little about yourself</p>
            <hr/>
            <div className='formInputs'>
                <SignUpInputs/>
                <br /> 
                <div className='buttons'>
                    <Button sx={{width:200}} onClick={onClickReg} variant="contained" size="large" margin="dense">
                        Sign-Up
                    </Button>
                    <Link to="/login">
                        <Button variant="outlined"  size="large" sx={{width:200}}>
                            Cancel
                        </Button>
                    </Link>
                    
                </div>
                
            </div>
            
        </>

    )
}