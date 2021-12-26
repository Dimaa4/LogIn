export default function mWindow (state = {}, action){
    
    switch (action.type) {
        case "CLOSE":
            return {isOpen:false} 
        case "OPEN":
            return {...action.value, isOpen:true} 
        default:
            return state;
    }
}