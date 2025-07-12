import { ADD_EXPENCE, DELETE_EXPENCE, SET_BUDGET } from "./actionTypes";

export const setBudget =(amount)=>{
    return {
        type : SET_BUDGET,
        payload : amount
    }
}


export const addExpence = (expence)=>{
   return{
     type: ADD_EXPENCE,
    payload : expence
   }
}

export const deleteExpence = (id)=>{
     return{
        type: DELETE_EXPENCE,
        payload : id
     }
}