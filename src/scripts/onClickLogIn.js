import axios from "axios";
import {store} from "../redux/store";

export const onClickLogIn= ()=>{
    
    const checkAccount = async (acc)=>{
        let db = await axios.get("https://61b5fc90c95dd70017d40dbb.mockapi.io/accounts");
        let dbAcc = db.data.filter((item)=>item.username===acc.username);
        if(dbAcc.length>0){
            if (dbAcc[0].password === acc.password){
                
                store.dispatch({type: "CHANGE", value:dbAcc[0]});
                if(acc.remember){
                    window.localStorage.setItem('acc', JSON.stringify( dbAcc[0]));
                }
                else{
                    window.sessionStorage.setItem('acc', JSON.stringify( dbAcc[0]));
                }
                
            }
            else {
                alert("password is incorrect")
            }
        }
        else {
            alert("User name is incorrect")
            return null;
        }
    }
    let result = {};
    result.username = document.querySelector("#userName").value;
    result.password = document.querySelector("#password").value;
    result.remember = document.querySelector("#rememberCheckbox").checked;
    let err = [];
    if(result.username.length < 1){
        err.push("User Name");
    }
    if(result.password.length < 1){
        err.push("Password");
    }
    if (err.length>0){
        alert(`You entered incorrectly ${err.join(", ")}`)
    }
    else{
        checkAccount(result)
    }
    
}