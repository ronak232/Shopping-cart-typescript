import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store/store";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { formatCurrency } from "../utilites/CurrencyFormatter";
import {
  handleRemove,
  clearAllCartItems,
} from "../store/redux/features/CartItemsSlice/CartItemSlice";


export function Cart() {
  const { cartItems } = useSelector((state: RootState) => state.cartItems);
  const dispatch: AppDispatch = useDispatch<AppDispatch>();

  const handleRemoveCartItem = (id: number) => {
    dispatch(handleRemove(id));
  };

  const clearCartItems = () => {
    dispatch(clearAllCartItems());
  };

  return (
    <>
      <Container>
        <h2>Your Cart</h2>
        <Row>
          <Col sm={12} md={10} className="cart">
            {cartItems.length > 0 ? (
              cartItems?.map((items) => {
                return (
                  <Card
                    className="d-flex p-2 mb-2 mt-2 cart__product_list"
                    key={items.id}
                  >
                    <div className="mb-2">
                      <div>
                        <Card.Img
                          className="product__img w-100"
                          src={items.image}
                          alt=""
                        />
                      </div>
                      <h4 className="cart__product_title">{items.title}</h4>
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
                          <Button
                            className="qty-increment"
                            aria-label="quantity-increase"
                            role="increment"
                          >
                            +
                          </Button>
                          <span>{items.quantity}</span>
                          <Button
                            className="qty-decrement"
                            aria-label="quantity-decrease"
                            role="decrement"
                          >
                            -
                          </Button>
                        </div>
                      </Col>
                    </div>
                  </Card>
                );
              })
            ) : (
              <div>Your shopping cart is empty</div>
            )}
          </Col>
          <Col sm={12} md={2}>
            <Card
              className="w-100 p-2 mb-2 mt-2"
              style={{ height: "200px", backgroundColor: "#eeee" }}
            >
              <h2>Your total amount:</h2>
              <span>{}</span>
            </Card>
            <button>Procced to Checkout</button>
          </Col>
        </Row>
        <div>
          <button
            className="remove_all-btn"
            disabled={cartItems.length > 0 ? false : true}
            onClick={() => clearCartItems()}
          >
            Empty Cart
          </button>
        </div>
      </Container>
    </>
  );
}
