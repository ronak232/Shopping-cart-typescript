import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { Button, Card, Col } from "react-bootstrap";
import { formatCurrency } from "../utilites/CurrencyFormatter";
import { handleRemove } from "../store/redux/features/CartItemsSlice/CartItemSlice";

export function Cart() {
  const { cartItems } = useSelector((state: RootState) => state.cartItems);
  const dispatch = useDispatch();

  const handleRemoveCartItem = (id: number) => {
    dispatch(handleRemove(id));
  };

  return (
    <div className="container">
      <h2>Your Cart</h2>
      <Col sm={12}>
        {cartItems?.map((items) => {
          return (
            <Card className="w-100 p-2 mb-2 mt-2" key={items.id}>
              <picture>
                <Card.Img
                  className="product__img card-img-top"
                  src={items.image}
                  alt=""
                />
              </picture>
              <h4 className="product__title">{items.title}</h4>
              <span>{formatCurrency(items.price)}</span>
              <div className="d-flex justify-space-between">
                <Col style={{ display: "flex", flexWrap: "wrap" }}>
                  <Button
                    className=""
                    onClick={() => handleRemoveCartItem(items.id)}
                  >
                    Remove
                  </Button>
                  <div >
                    <Button className="">+</Button>
                    <Button className="">-</Button>
                  </div>
                </Col>
              </div>
            </Card>
          );
        })}
      </Col>
    </div>
  );
}
