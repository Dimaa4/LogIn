import axios from "axios";
export const onClickLogIn= ()=>{
    const checkAccount = async (acc)=>{
        let db = await axios.get("https://61b5fc90c95dd70017d40dbb.mockapi.io/accounts");
        let dbAcc = db.data.filter((item)=>item.username);
        if(dbAcc[0].username===acc.username){
            if (dbAcc[0].password === acc.password){
                alert ("success");
            }
            else {
                alert("password is incorrect")
            }
        }
        else {
            alert("User name is incorrect")
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
    console.log(result);
}