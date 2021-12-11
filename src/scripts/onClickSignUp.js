export const onClickSignUp = ()=>{
    let result = {};
    result.name = document.querySelector("#name").value;
    result.email = document.querySelector("#email").value;
    result.country = document.querySelector("#country-select").value;
    result.number = document.querySelector("#mui-1").value;
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
        alert(`You entered incorrectly ${err.join(", ")}`)
    }
    console.log(result);
}