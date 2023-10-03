import { useSelector } from "react-redux";
import { RootState } from "../store/store";

export function Cart() {
  const { cartItems } = useSelector((state: RootState) => state.cartItems);
  console.log(cartItems)

  return (
    <div>
      {cartItems?.map((items) => {
        return <h1>{items.category}</h1>;
      })}
    </div>
  );
}
