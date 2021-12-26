import axios from 'axios';
import { store } from '../redux/store';
export const onClickSignUp = async ()=>{
    
    const createAccount = async (acc)=>{
        
        let db = await axios.get("https://61b5fc90c95dd70017d40dbb.mockapi.io/accounts");
        
        if(db.data.filter((item)=>item.username===acc.username).length>0 || 
        db.data.filter((item)=>item.email===acc.email).length>0){
            store.dispatch({type:"OPEN", value:{title:"ERROR", 
            content:"Your User Name or Email was used earlier",
            color: "red"}})
            
            return false;
        }
        else{
            await axios.post("https://61b5fc90c95dd70017d40dbb.mockapi.io/accounts", result);
            return true;
            
                
            
        }
        
    }
    let result = {};
    result.name = document.querySelector("#name").value;
    result.email = document.querySelector("#email").value;
    result.country = document.querySelector("#country").value;
    result.number = document.querySelector("#number").value;
    
    result.username = document.querySelector("#userName").value;
    result.password = document.querySelector("#password").value;
    let err = [];
    if(result.name.length < 1){
        err.push("Name");
    }
    if(!result.email.includes("@") || !result.email.includes(".")){
        err.push("Email");
    }
    if(result.country.length < 1){
        err.push("Country");
    }
    if(result.number.includes("_")){
        err.push("Number");
    }
    if(result.username.length < 1){
        err.push("User Name");
    }
    if(result.password.length < 1){
        err.push("Password");
    }
    if (err.length>0){
        
        store.dispatch({type:"OPEN", value:{title:"ERROR", 
            content:`You entered incorrectly ${err.join(", ")}`,
            color: "red"}})
        
        return false;
    }
    else{
        
        return createAccount(result)
        
        
    }
    
                
}