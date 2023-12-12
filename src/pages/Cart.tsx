import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store/store";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { formatCurrency } from "../utilites/CurrencyFormatter";
import {
  handleRemove,
  clearAllCartItems,
} from "../store/redux/features/CartItemsSlice/CartItemSlice";
import { useState } from "react";
import { Link } from "react-router-dom";

export function Cart() {
  const { cartItems } = useSelector((state: RootState) => state.cartItems);
  const dispatch: AppDispatch = useDispatch<AppDispatch>();

  const [showDisableEmptyCart, setShowDisableEmptyCart] = useState(true);

  const handleRemoveCartItem = (id: number) => {
    dispatch(handleRemove(id));
  };

  const clearCartItems = () => {
    if (cartItems.length > 0) {
      dispatch(clearAllCartItems());
      setShowDisableEmptyCart(!showDisableEmptyCart);
    }
  };

  return (
    <>
      <Container>
        <h2 className="my-4">Your Cart</h2>
        <Row>
          <Col sm={12} md={10} className="cart">
            {cartItems.length > 0 ? (
              cartItems?.map((items) => {
                return (
                  <Card
                    className="flex p-2 mb-2 mt-2 cart__product_list"
                    key={items.id}
                  >
                    <Link to="/store" className="no-underline">
                      <div className="mb-2">
                        <div>
                          <Card.Img
                            className="product__img w-100"
                            src={items.image}
                            alt=""
                          />
                        </div>
                        <h4 className="cart__product_title py-2 m-0">{items.title}</h4>
                        <span>{formatCurrency(items.price)}</span>
                      </div>
                    </Link>
                    <div className="flex flex-auto">
                      <button
                        className="bg-blue-400 rounded-lg px-3 py-0"
                        onClick={() => handleRemoveCartItem(items.id)}
                        aria-label="product-cards"
                      >
                        Remove
                      </button>
                      <span className="p-1">{items.quantity}</span>
                      <div>
                        <button
                          className="rounded-lg bg-sky-500 qty-increment p-2 m-1"
                          aria-label="quantity-increase"
                          role="increment"
                        >
                          +
                        </button>
                        <button
                          className="rounded-lg bg-sky-500 qty-decrement p-2 m-1"
                          aria-label="quantity-decrease"
                          role="decrement"
                        >
                          -
                        </button>
                      </div>
                    </div>
                  </Card>
                );
              })
            ) : (
              <div>Your shopping cart is empty</div>
            )}
            <div
              className={`${
                cartItems.length > 0 ? "show-empty-btn" : "hide-empty-btn"
              }`}
            >
              <button
                className="remove_all-btn shadow-md p-2 border-2 rounded-md"
                disabled={!showDisableEmptyCart}
                onClick={() => clearCartItems()}
              >
                Empty Cart
              </button>
            </div>
          </Col>
          <Col sm={12} md={2}>
            <Card className="w-100 bg-slate-300 px-4 my-2">
              <h2>Your total amount:</h2>
              <span>$1000</span>
            </Card>
            <button className="bg-sky-500 p-2 text-white rounded-lg hover:text-sky-400">
              Procced to Checkout
            </button>
          </Col>
        </Row>
      </Container>
    </>
  );
}
