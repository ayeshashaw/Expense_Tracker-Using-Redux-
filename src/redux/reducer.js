import { ADD_EXPENCE, DELETE_EXPENCE, SET_BUDGET } from "./actionTypes"

const initialState = {
    budget : 0,
    expences : []
}


export const expencesReducer = (state = initialState, action)=>{

    switch(action.type){
        case SET_BUDGET:
            return {...state,budget : action.payload}
        case ADD_EXPENCE:
            return {...state,expences: [...state.expences, action.payload]}
        case DELETE_EXPENCE:
            return {...state,expences: state.expences.filter((expence)=> expence.id !== action.payload)}
        default:
           return state

    }
}