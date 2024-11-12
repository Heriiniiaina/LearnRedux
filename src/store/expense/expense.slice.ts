import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface Expense {
   
    name: string;
    amount: number;
}
interface ExpenseState {
    expenseList: Expense[];
}
interface ExpenseState {
    expenseList: Expense[];
  }

export const expenseSlice = createSlice({
    name:"expenseSlice",
    initialState:{
        expenseList:[]
    },
    reducers:{
        addExpense: (currentSlice,action:PayloadAction<Expense>)=>{
            currentSlice.expenseList.push(action.payload)
           
            
        }
    }
})

const {addExpense} = expenseSlice.actions
export {addExpense}