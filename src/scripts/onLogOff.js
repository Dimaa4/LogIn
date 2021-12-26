import { store } from "../redux/store";
export let onLogOff = ()=>{
    window.sessionStorage.clear();
    window.localStorage.clear();
    store.dispatch({type:"CLEAR"});
    store.dispatch({type:"OPEN", value:{title:"Success", 
                    content:"You have successfully signed out. Come back later!",
                    color: "#22862a"}})
}