import React from 'react';

import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Autocomplete from '@mui/material/Autocomplete';
import NumberFormat from 'react-number-format';
import { countries } from '../countries';
import { fillDataInputs } from '../scripts/fillDataInputs';
export const DataInputs = ({usernameInput, fillData})=>{
    const data = fillDataInputs();
    let countryData = 228;
    if(data.country){
        countryData = countries.findIndex(item=>item.label===data.country);
    }
    
    const [country, changeCountry] = React.useState(countries[countryData]);
    const [name, setName] = React.useState(data.name);
    const [email, setEmail] = React.useState(data.email);
    const [number, setNumber] = React.useState(data.number);
    const [username, setUsername] = React.useState(data.username);
    const [password, setPassword] = React.useState("");
    const changeInput = (setData, data)=>{
        setData(data);
    }
    
    return(
        <>
                <TextField
                    onChange={(e)=>{e.target.value = e.target.value.trim(); changeInput(setName, e.target.value)}}
                    value={name}
                    required
                    id="name"
                    label="Name"
                    margin="dense"
                />
                <TextField
                    onChange={(e)=>{e.target.value = e.target.value.trim(); changeInput(setEmail, e.target.value)}}
                    value={email}
                    required
                    id="email"
                    label="Email"
                    margin="dense"
                />

                <div className='countryAndPhone'>
                <Autocomplete
                    
                    id="country"
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
                    <NumberFormat onChange={(e)=>changeInput(setNumber, e.target.value)} value={number} id="number" disabled={country ? false : true} sx={{ width: 300 }} customInput={TextField} format={`+${country ? country.phone : ""} (###) ###-####`} allowEmptyFormatting mask="_" />
                </div>
                
                {
                    usernameInput &&
                    <TextField
                        onChange={(e)=>{e.target.value = e.target.value.trim(); changeInput(setUsername, e.target.value)}}
                        required
                        value={username}
                        id="userName"
                        label="User Name"
                        margin="dense"
                    />
                }
                <TextField
                    onChange={(e)=>{e.target.value = e.target.value.trim(); changeInput(setPassword, e.target.value)}}
                    value={password}

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

