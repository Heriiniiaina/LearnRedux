import s from "./style.module.css";
import { RootState } from "../../store";
import { useDispatch, useSelector } from "react-redux";
import { setIncome } from "../../store/expense/expense.slice";
export function IncomeInput(props:any) {
  const income = useSelector((store:RootState) => store.EXPENSE.income)
  const dispatch = useDispatch()
  const updateIncome = (e:any)=>{
    const income = e.target.value
    console.log(income)
    dispatch(setIncome(income))
  }
  return (
    <div className="row justify-content-center mb-2">
      <div className={`col-6 ${s.label}`}>Income</div>
      <div className="col-6">
        <input onChange={updateIncome} defaultValue={income} type="number" className="form-control text-gray-400 pl-3" placeholder="Ex: 3000" />
      </div>
    </div>
  );
}
