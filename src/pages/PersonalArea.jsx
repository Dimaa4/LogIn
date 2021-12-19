import {Navigate} from "react-router-dom";
import { store } from "../redux/store";
import { Button } from "@mui/material";
import {onLogOff} from "../scripts/onLogOff";
import { deleteAccount } from "../scripts/deleteAccount";
export const PersonalArea= ({navig})=>{
    return(
    <>
    {navig ? null : <Navigate to="/login"/>}
        <h1>Hi, {store.getState().name} !</h1>
        <div className='buttons'>
            <Button variant="outlined" onClick={onLogOff} size="large" sx={{width:200}}>
                Log off
            </Button>
            <Button variant="outlined" onClick={deleteAccount} color="error" size="large" sx={{width:220}}>
                Delete an account
            </Button>
        </div>
    </>
    )
}