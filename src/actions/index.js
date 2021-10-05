export const ADD_ONE = "ADD_ONE";

export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";

// CLEAR_DISPLAY action string 
export const CLEAR_DISPLAY = 'CLEAR_DISPLAY';

// MEMORY_PLUS action string
export const MEMORY_PLUS = 'MEMORY_PLUS';

// MEMORY_CLEAR action string
export const MEMORY_CLEAR = 'MEMORY_CLEAR';

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

// memoryPlus action creator
export const memoryPlus = () => {
    return ({type:MEMORY_PLUS});
}

// memoryClear action creator
export const memoryClear = () => {
    return ({type:MEMORY_CLEAR});
}