import s from "./style.module.css";
import { RootState } from "../../store";
import { useSelector } from "react-redux";
export function IncomeInput(props:any) {
  const income = useSelector((store:RootState) => store.EXPENSE.income)
  const updateIncome = (e:any)=>{
    const income = e.target.value
    console.log(income)
  }
  return (
    <div className="row justify-content-center mb-2">
      <div className={`col-6 ${s.label}`}>Income</div>
      <div className="col-6">
        <input onChange={updateIncome}type="number" className="form-control text-gray-400" placeholder="Ex: 3000" />
      </div>
    </div>
  );
}
