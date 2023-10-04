import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { Button, Card, Col } from "react-bootstrap";
import { formatCurrency } from "../utilites/CurrencyFormatter";

export function Cart() {
  const { cartItems } = useSelector((state: RootState) => state.cartItems);

  return (
    <div>
      <h2>Cart Items List</h2>
      <Col sm={4} className=" p-2">
      {cartItems?.map((items) => {
        return (
            <Card className="p-2 m-2" key={items.id}>
              <Card.Img
                className="product__img card-img-top"
                src={items.image}
                alt=""
              />
              <h4 className="product__title">{items.title}</h4>
              <span>{formatCurrency(items.price)}</span>
              <div>
                <Col style={{ display: "flex", flexWrap: "wrap" }}>
                  <Button className="">Remove</Button>
                  <div>
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
