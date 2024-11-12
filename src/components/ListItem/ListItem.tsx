import s from "./style.module.css";
interface TypeProps{
  item:{
    name:string,
    price:string
  }
}

export function ListItem({ item }: TypeProps) {
  return (
    <tr className="flex gap-x-5">
      <th>{item.name}</th>
      <td className={s.price}>{item.price} $</td>
    </tr>
  );
}
