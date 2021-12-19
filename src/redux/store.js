import { account } from "./reducers/accountReducer";
import { createStore } from "redux";

const createStoreAcc = ()=>{
    let stateLocalStore = JSON.parse(window.localStorage.getItem('acc'));
    if(stateLocalStore){
        return stateLocalStore;
    } 
    else{
        let stateSessionStorage = JSON.parse(window.sessionStorage.getItem('acc'));
        if(stateSessionStorage){
            return stateSessionStorage;
        }
        else{
            return {}
        }
    }
}

export let store = createStore(account, createStoreAcc());