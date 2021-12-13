import React from 'react';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
export const LogInInputs = ()=>{
    
    
    return(
        <>
                <TextField
                    onChange={(e)=>e.target.value = e.target.value.trim()}
                    required
                    id="userName"
                    label="User Name"
                    margin="dense"
                />
                <TextField
                    onChange={(e)=>e.target.value = e.target.value.trim()}
                    required
                    id="password"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                    margin="dense"
                />
                <FormControlLabel control={<Checkbox id = "rememberCheckbox" defaultChecked />} label="Remember Me" />
        </>
    )
}
