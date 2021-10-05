export const ADD_ONE = "ADD_ONE";

export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";

// CLEAR_DISPLAY action string constant
export const CLEAR_DISPLAY = 'CLEAR_DISPLAY';

export const addOne = () => {
    return({type:ADD_ONE});
}

export const applyNumber = (number) => {
    return({type:APPLY_NUMBER, payload:number});
}

// changeOperation action creator
export const changeOperation = (operator) => {
    return({type:CHANGE_OPERATION, payload:operator});
}

// clearDisplay action creator
export const clearDisplay = () => {
    return ({type:CLEAR_DISPLAY});
}