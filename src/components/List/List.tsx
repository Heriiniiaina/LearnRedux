import { ListItem } from "../ListItem/ListItem";

interface Expense {
   
  name: string;
  price: number;
}
interface ListProps{
  items:Expense[],

}
export function List({ items }:ListProps) {
  return (
    <div style={{ overflowY: "scroll", height: "40%" }}>
      <table className="table table-hover table-borderless">
        <tbody>
         {
            items.map((item,i)=>{
             return  <ListItem item={item} key={item.name+i}/>
            })
         }
        </tbody>
      </table>
    </div>
  );
}
