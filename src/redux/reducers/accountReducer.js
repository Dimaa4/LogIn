export function account (state, action){
    
    switch (action.type) {
        case "CHANGE":
            return action.value  
        case "CLEAR":
            return {}  
        default:
            return state;
    }
}