import { store } from "../redux/store";
import axios from "axios";
export const deleteAccount = () =>{
    try{
        axios.delete(`https://61b5fc90c95dd70017d40dbb.mockapi.io/accounts/${store.getState().id}`)
        .then(()=>{
            window.sessionStorage.clear();
            window.localStorage.clear();
            store.dispatch({type:"CLEAR"});
        })
    }
    catch(err){
        alert(err);
    }
    
}