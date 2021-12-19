import { store } from "../redux/store";
export let onLogOff = ()=>{
    window.sessionStorage.clear();
    window.localStorage.clear();
    store.dispatch({type:"CLEAR"});
}