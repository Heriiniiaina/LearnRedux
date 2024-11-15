import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface Expense {
   
    name: string;
    price: number;
}
interface ExpenseState {
    expenseList: Expense[];
}
interface ExpenseState {
    expenseList: Expense[];
    income:number
  }
  const initialState: ExpenseState = {
    expenseList: [],
    income:1000
  };

export const expenseSlice = createSlice({
    name:"expenseSlice",
    initialState,
    reducers:{
        addExpense: (currentSlice,action:PayloadAction<Expense>)=>{
            currentSlice.expenseList.push({...action.payload, price:Number(action.payload.price)}) 
        },
        setIncome:(currentSlice,action:PayloadAction<number>)=>{
            currentSlice.income = Number(action.payload)
        }
    }
})

const {addExpense,setIncome} = expenseSlice.actions
export {addExpense,setIncome}