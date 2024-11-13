import { useSelector } from "react-redux";
import s from "./style.module.css";
import {RootState} from "../../store"
export function ExpenseTotal(props:any) {
  const expenseList = useSelector((store:RootState)=>store.EXPENSE.expenseList)
  const income = useSelector((store:RootState)=>store.EXPENSE.income)
  const totalExpense = expenseList.reduce((acc,currentItem)=>{
    return acc + currentItem.price
  },0)
  return (
    <div className="flex flex-col items-center">
      <div className="flex gap-x-5">
        <div className={` ${s.label}`}>Total expenses</div>
        <div className={` ${s.amount}`}>{totalExpense} $</div>
      </div>
      <div className="flex gap-x-5">
        <div className={`col ${s.label}`}>Remaining money</div>
        <div className={`col ${s.amount}`}>{income - totalExpense} $</div>
      </div>
    </div>
  );
}
