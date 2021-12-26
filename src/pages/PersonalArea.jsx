import {Navigate} from "react-router-dom";
import React from "react";
import { store } from "../redux/store";
import { Button } from "@mui/material";
import {onLogOff} from "../scripts/onLogOff";
import { deleteAccount } from "../scripts/deleteAccount";
import { DataInputs } from "../components/DataInputs";
import { changeData } from "../scripts/changeData";
export const PersonalArea= ({navig})=>{
    
    return(
    <>
    {navig ? null : <Navigate to="/login"/>}
        <h1>Hi, {store.getState().acc ? store.getState().acc.name : ""} !</h1>
        <div className="formInputs">
            <DataInputs fillData={true}/>
            
            <Button onClick={() =>changeData() } variant="contained" size="large" sx={{m:2} } >Change Data</Button>
            
            <div className='buttons'>
                <Button variant="outlined" onClick={onLogOff} size="large" sx={{width:200}}>
                    Log off
                </Button>
                <Button variant="outlined" onClick={deleteAccount} color="error" size="large" sx={{width:220}}>
                    Delete an account
                </Button>
            </div>
        </div>
    </>
    )
}