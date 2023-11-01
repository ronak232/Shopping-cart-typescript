import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { Button, Card, Col, Row } from "react-bootstrap";
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
      <Row>
        <Col sm={12} md={10}>
          {cartItems.length > 0 ? (
            cartItems?.map((items) => {
              return (
                <Card className="d-flex p-2 mb-2 mt-2" key={items.id}>
                  <div className="mb-2">
                    <div>
                      <Card.Img
                        className="product__img w-100"
                        src={items.image}
                        alt=""
                      />
                    </div>
                    <h4 className="product__title">{items.title}</h4>
                    <span>{formatCurrency(items.price)}</span>
                  </div>
                  <div className="d-flex justify-space-between">
                    <Col style={{ display: "flex", flexWrap: "wrap" }}>
                      <Button
                        className=""
                        onClick={() => handleRemoveCartItem(items.id)}
                        aria-label="product-cards"
                      >
                        Remove
                      </Button>
                      <div>
                        <Button className="" aria-label="quantity-increase">
                          +
                        </Button>
                        <Button className="" aria-label="quantity-decrease">
                          -
                        </Button>
                      </div>
                    </Col>
                  </div>
                </Card>
              );
            })
          ) : (
            <div>No Items in the Cart</div>
          )}
        </Col>
        <Col sm={12} md={2}>
          <Card
            className="w-100 p-2 mb-2 mt-2"
            style={{ height: "200px", backgroundColor: "#eeee" }}
          >
            <h2>Total Price</h2>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
