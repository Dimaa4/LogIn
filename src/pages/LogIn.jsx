import React from 'react';
import { LogInInputs } from '../components/LogInInputs';
import { Button } from '@mui/material';
import { onClickLogIn } from '../scripts/onClickLogIn';
import { Link } from 'react-router-dom';
export const LogIn = ()=>{
    return(
        <>
            <h1>LogIn</h1>
            <p className='prescription'>Please Login To Your Account</p>
            <hr/>
            <div className='formInputs'>
                <LogInInputs/>
                
                <br /> 
                
                <div className='buttons'>
                    
                    <Button sx={{width:200}} onClick={onClickLogIn}  variant="contained" size="large" margin="dense">
                        LogIn
                    </Button>
                    
                        <Link to="/signup">
                        <Button variant="outlined" size="large" sx={{width:200}}>
                            Register
                        </Button>
                        </Link>
                    
                </div>
                
            </div>
            
        </>

    )
}