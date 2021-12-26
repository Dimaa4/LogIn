import  rootReducer  from "./reducers";
import { createStore } from "redux";

const createStoreAcc = ()=>{
    let stateLocalStore = JSON.parse(window.localStorage.getItem('acc'));
    if(stateLocalStore){
        return {mWindow: {}, acc:stateLocalStore};
    } 
    else{
        let stateSessionStorage = JSON.parse(window.sessionStorage.getItem('acc'));
        if(stateSessionStorage){
            return {mWindow: {}, acc: stateSessionStorage};
        }
        else{
            return {}
        }
    }
}

export let store = createStore(rootReducer, createStoreAcc());