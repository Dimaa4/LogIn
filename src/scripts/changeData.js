
import axios from "axios";
import { store } from "../redux/store";
export const changeData = () =>{
    let result = store.getState().acc;
    const checkAndWriteData = (input)=>{
        let inputVal = document.querySelector(`#${input}`).value;
        if(inputVal.length > 0){
            
            if(input === "number"){
                if(!inputVal.includes("_")){
                    result[input]=inputVal;
                }
            }
            else if(input === "email"){
                if(inputVal.includes("@") || inputVal.includes(".")){
                    result[input]=inputVal;
                }
            }
            else{
                result[input]=inputVal;
            }
        }
    }
    checkAndWriteData("name");
    checkAndWriteData("email");
    checkAndWriteData("country");
    checkAndWriteData("number");
    checkAndWriteData("password");

    axios.put(`https://61b5fc90c95dd70017d40dbb.mockapi.io/accounts/${store.getState().acc.id}`, result)
    .then(()=>{
        store.dispatch({type: "CHANGE", value: result})
        if(window.localStorage){
            window.localStorage.clear();
            window.localStorage.setItem('acc', JSON.stringify(store.getState().acc));
        }
        else{
            window.sessionStorage.clear();
            window.sessionStorage.setItem('acc', JSON.stringify(store.getState().acc));
        }
        store.dispatch({type:"OPEN", value:{title:"Success", 
        content:"You have successfully changed the data",
        color: "#22862a"}})
    })
    .catch(err=>
    store.dispatch({type:"OPEN", value:{title:"ERROR", 
        content:`Error: ${err}`,
        color: "red"}}))


    
}