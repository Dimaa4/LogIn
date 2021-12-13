import React from 'react';

import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Autocomplete from '@mui/material/Autocomplete';
import NumberFormat from 'react-number-format';
import { countries } from '../countries';
export const SignUpInputs = ()=>{
    const [country, changeCountry] = React.useState(countries[228]);
    
    
    return(
        <>
            <TextField
                    onChange={(e)=>e.target.value = e.target.value.trim()}
                    required
                    id="name"
                    label="Name"
                    margin="dense"
                />
                <TextField
                    onChange={(e)=>e.target.value = e.target.value.trim()}
                    required
                    id="email"
                    label="Email"
                    margin="dense"
                />

                <div className='countryAndPhone'>
                <Autocomplete
                    
                    id="country-select"
                    sx={{ width: 300 }}
                    value={country}
                    onChange={(e, value)=>changeCountry(value)}
                    options={countries}
                    autoHighlight
                    getOptionLabel={(option) => option.label}
                    renderOption={(props, option) => (
                        
                        <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
                        <img
                            loading="lazy"
                            width="20"
                            src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                            srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                            alt=""
                        />
                        {option.label} ({option.code}) +{option.phone}
                        </Box>
                        
                    )}
                    renderInput={(params) => (
                        <TextField
                        {...params}
                        label="Choose a country"
                        inputProps={{
                            ...params.inputProps,
                            autoComplete: 'new-password', // disable autocomplete and autofill
                        }}
                        />
                    )}
                    />
                    <NumberFormat disabled={country? false : true} sx={{ width: 300 }} customInput={TextField} format={`+${country ? country.phone : ""} (###) ###-####`} allowEmptyFormatting mask="_" />
                </div>
                
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
        </>
    )
}

