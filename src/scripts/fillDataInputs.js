import { store } from "../redux/store"
export const fillDataInputs = ()=>{
    
    const acc = store.getState().acc ? store.getState().acc : {};
    let result = {};
    result.name = acc.name;
    result.email = acc.email;
    result.country = acc.country;
    result.number = acc.number;
    return result;
}