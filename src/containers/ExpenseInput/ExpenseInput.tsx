import { useDispatch } from "react-redux";
import { addExpense } from "../../store/expense/expense.slice";
import s from "./style.module.css";

export function ExpenseInput(props:any) {
  const dispatch = useDispatch()
  const submit = (e:any)=>{
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const name = formData.get("name") as string
    const price = Number(formData.get("price") as string)

    dispatch(addExpense({name,price}))
    console.log(name,price)
  }
  return (
    <form onSubmit={submit}>
      <div className="row justify-content-center flex gap-x-2">
        <div className="col-12 col-sm-5 col-md-4 col-lg-4 mb-2">
          <input
            type="text"
            className="form-control text-gray-400 pl-2"
            placeholder='Ex : "Apple"'
            name="name"
            
          />
        </div>
        <div className="col-12 col-sm-2 col-md-4 col-lg-4 mb-2">
          <input
            type="number"
            step="0.01"
            className="form-control text-gray-400 pl-2"
            placeholder="Ex: 3.99"
            name="price"
            
            
          />
        </div>

        <div className="col-12 col-sm-2 col-md-4 col-lg-4 mb-2">
          <button type="submit" className={`btn btn-primary ${s.btn}`}>
            Add
          </button>
        </div>
      </div>
    </form>
  );
}
