import axios from "axios";
import { store } from "../redux/store";
export const checkAcc = ()=>{
    let stateLocalStore = JSON.parse(window.localStorage.getItem('acc'));
    if(stateLocalStore){
        axios.get("https://61b5fc90c95dd70017d40dbb.mockapi.io/accounts")
        .then(result=>{
            const accountDB = result.data.filter(item => item.id = stateLocalStore.id)[0];
            if(accountDB.username === stateLocalStore.username &&
                accountDB.password === stateLocalStore.password){
                    window.localStorage.setItem('acc', JSON.stringify(  accountDB));   
            }
            else{
                window.localStorage.clear();
            }
        })
        .then (()=>{
            store.dispatch({type:"CHANGE", value: JSON.parse(window.localStorage.getItem('acc'))});
            return;
        })
        ;
        
    } 
    else{
        let stateSessionStorage = JSON.parse(window.sessionStorage.getItem('acc'));
        if(stateSessionStorage){
            axios.get("https://61b5fc90c95dd70017d40dbb.mockapi.io/accounts")
            .then(result=>{
                const accountDB = result.data.filter(item => item.id = stateLocalStore.id)[0];
                if(accountDB.username === stateSessionStorage.username &&
                    accountDB.password === stateSessionStorage.password){
                        window.sessionStorage.setItem('acc', JSON.stringify(accountDB));
                        
                }
                else{
                    window.sessionStorage.clear();
                }
            })
            .then(()=>{
                
                store.dispatch({type:"CHANGE", value: JSON.parse(window.sessionStorage.getItem('acc'))});
                return;
            })
            
        }
        else{
            store.dispatch({type:"CHANGE", value: {}});
            return;
        }
    }
}