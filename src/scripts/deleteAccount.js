import { store } from "../redux/store";
import axios from "axios";
export const deleteAccount = () =>{
    try{
        axios.delete(`https://61b5fc90c95dd70017d40dbb.mockapi.io/accounts/${store.getState().acc.id}`)
        .then(()=>{
            window.sessionStorage.clear();
            window.localStorage.clear();
            store.dispatch({type:"CLEAR"});
            store.dispatch({type:"OPEN", value:{title:"Success", 
                    content:"You have successfully deleted your account",
                    color: "#22862a"}})
        })
    }
    catch(err){
        store.dispatch({type:"OPEN", value:{title:"ERROR", 
        content:`Error: ${err}`,
        color: "red"}})
    }
    
}