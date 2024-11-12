import { ListItem } from "../ListItem/ListItem";
interface itemsType{
  name:string,
  price:string

}
interface ListProps{
  items:itemsType[]
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
